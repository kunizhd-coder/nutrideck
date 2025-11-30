"use client"

import { useState, useEffect } from "react"
import HomePage from "@/components/home-page"
import MoodSelection from "@/components/mood-selection"
import MoodResult from "@/components/mood-result"
import MoodHistory from "@/components/mood-history"
import FoodJournal from "@/components/food-journal"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { MoodEntry } from "@/lib/types"
import { saveMoodEntry, loadMoodHistory } from "@/lib/storage"

export default function Page() {
  const [currentPage, setCurrentPage] = useState<"home" | "selection" | "result" | "history" | "journal">("home")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([])

  useEffect(() => {
    const history = loadMoodHistory()
    setMoodHistory(history)
  }, [])

  const handleStartMoodCheck = () => {
    setCurrentPage("selection")
  }

  const handleMoodSelected = (mood: string) => {
    setSelectedMood(mood)
    setCurrentPage("result")
  }

  const handleSaveMood = (mood: string) => {
    const entry = saveMoodEntry(mood)
    setMoodHistory((prev) => [entry, ...prev])
  }

  const handleBackToMoodSelection = () => {
    setCurrentPage("selection")
    setSelectedMood(null)
  }

  const handleBackToHome = () => {
    setCurrentPage("home")
    setSelectedMood(null)
  }

  const handleNavigate = (page: "home" | "selection" | "result" | "history" | "journal") => {
    if (page === "result" && !selectedMood) {
      setCurrentPage("selection")
    } else {
      setCurrentPage(page)
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <div className="flex-1 pt-20 pb-24 md:pb-16">
        {currentPage === "home" && <HomePage onStartMoodCheck={handleStartMoodCheck} />}
        {currentPage === "selection" && (
          <MoodSelection onMoodSelected={handleMoodSelected} onNavigate={handleNavigate} />
        )}
        {currentPage === "result" && selectedMood && (
          <MoodResult
            mood={selectedMood}
            onBackToSelection={handleBackToMoodSelection}
            onBackToHome={handleBackToHome}
            onSaveMood={handleSaveMood}
          />
        )}
        {currentPage === "history" && <MoodHistory entries={moodHistory} />}
        {currentPage === "journal" && <FoodJournal />}
      </div>

      <Footer />
    </main>
  )
}
