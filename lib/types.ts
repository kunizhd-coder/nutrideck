export interface MoodEntry {
  id: string
  mood: string
  date: string
  time: string
}

export interface JournalEntry {
  id: string
  mood: string
  food: string
  notes: string
  date: string
  time: string
}

export interface DailyAffirmation {
  text: string
  mood?: string
}
