import type { MoodEntry, JournalEntry } from "./types"

const MOOD_HISTORY_KEY = "nutrimood_history"
const JOURNAL_KEY = "nutrimood_journal"

export function saveMoodEntry(mood: string): MoodEntry {
  const entry: MoodEntry = {
    id: Date.now().toString(),
    mood,
    date: new Date().toLocaleDateString("id-ID"),
    time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
  }

  const history = loadMoodHistory()
  history.unshift(entry)

  // Keep only last 30 days
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const filtered = history.filter((entry) => {
    const entryDate = new Date(entry.date)
    return entryDate >= thirtyDaysAgo
  })

  if (typeof window !== "undefined") {
    localStorage.setItem(MOOD_HISTORY_KEY, JSON.stringify(filtered))
  }

  return entry
}

export function loadMoodHistory(): MoodEntry[] {
  if (typeof window === "undefined") return []

  const stored = localStorage.getItem(MOOD_HISTORY_KEY)
  return stored ? JSON.parse(stored) : []
}

export function saveJournalEntry(entry: Omit<JournalEntry, "id" | "date" | "time">): JournalEntry {
  const newEntry: JournalEntry = {
    ...entry,
    id: Date.now().toString(),
    date: new Date().toLocaleDateString("id-ID"),
    time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
  }

  const journal = loadJournal()
  journal.unshift(newEntry)

  if (typeof window !== "undefined") {
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(journal))
  }

  return newEntry
}

export function loadJournal(): JournalEntry[] {
  if (typeof window === "undefined") return []

  const stored = localStorage.getItem(JOURNAL_KEY)
  return stored ? JSON.parse(stored) : []
}

export function deleteJournalEntry(id: string): void {
  if (typeof window === "undefined") return

  const journal = loadJournal()
  const filtered = journal.filter((entry) => entry.id !== id)
  localStorage.setItem(JOURNAL_KEY, JSON.stringify(filtered))
}
