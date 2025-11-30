"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { moods } from "@/lib/moods-data"
import { saveJournalEntry, loadJournal, deleteJournalEntry } from "@/lib/storage"
import type { JournalEntry } from "@/lib/types"
import { Trash2, Plus } from "lucide-react"

export default function FoodJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({
    mood: "",
    food: "",
    notes: "",
  })

  useEffect(() => {
    const loadedEntries = loadJournal()
    setEntries(loadedEntries)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.mood || !formData.food) {
      alert("Please fill in mood and food fields")
      return
    }

    const newEntry = saveJournalEntry({
      mood: formData.mood,
      food: formData.food,
      notes: formData.notes,
    })

    setEntries([newEntry, ...entries])
    setFormData({ mood: "", food: "", notes: "" })
    setIsAdding(false)
  }

  const handleDelete = (id: string) => {
    deleteJournalEntry(id)
    setEntries(entries.filter((e) => e.id !== id))
  }

  const getMoodData = (moodId: string) => moods.find((m) => m.id === moodId)

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 animate-page-enter">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">Food Journal</h1>
          <p className="text-base md:text-lg text-muted-foreground">Track your meals and how they make you feel</p>
        </div>

        {/* Add New Entry Button */}
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} size="lg" className="mb-8 md:mb-12 gap-2 bg-primary text-primary-foreground hover:bg-primary hover:brightness-110 hover:shadow-lg transition-all duration-200">
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            <span>New Entry</span>
          </Button>
        )}

        {/* Add New Entry Form */}
        {isAdding && (
          <Card className="p-6 md:p-8 mb-8 md:mb-12 bg-secondary/5 border-secondary/30">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Add Journal Entry</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm md:text-base font-semibold text-foreground mb-2">
                  How were you feeling?
                </label>
                <select
                  value={formData.mood}
                  onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                  className="w-full px-4 py-2 md:py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                >
                  <option value="">Select a mood...</option>
                  {moods.map((mood) => (
                    <option key={mood.id} value={mood.id}>
                      {mood.emoji} {mood.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold text-foreground mb-2">
                  What did you eat?
                </label>
                <input
                  type="text"
                  value={formData.food}
                  onChange={(e) => setFormData({ ...formData, food: e.target.value })}
                  placeholder="e.g., Grilled chicken with salad"
                  className="w-full px-4 py-2 md:py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold text-foreground mb-2">
                  Notes (optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="How did it make you feel?"
                  rows={4}
                  className="w-full px-4 py-2 md:py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <div className="flex gap-3 md:gap-4">
                <Button type="submit" size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent hover:brightness-110 hover:shadow-lg transition-all duration-200">
                  Save Entry
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setIsAdding(false)}
                  className="flex-1 bg-transparent hover:bg-muted hover:brightness-110 hover:shadow-lg transition-all duration-200"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Entries List */}
        {entries.length === 0 ? (
          <Card className="p-8 md:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">No journal entries yet</p>
            <p className="text-sm text-muted-foreground">Start tracking your meals to build awareness</p>
          </Card>
        ) : (
          <div className="space-y-3 md:space-y-4">
            {entries.map((entry) => {
              const moodData = getMoodData(entry.mood)

              return (
                <Card
                  key={entry.id}
                  className="p-4 md:p-6 bg-gradient-to-r from-secondary/5 to-accent/5 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        {moodData && <span className="text-2xl flex-shrink-0">{moodData.emoji}</span>}
                        <h3 className="text-lg md:text-xl font-semibold text-foreground truncate">{entry.food}</h3>
                      </div>

                      {entry.notes && (
                        <p className="text-sm md:text-base text-muted-foreground mb-3 italic">"{entry.notes}"</p>
                      )}

                      <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                        <span>{entry.date}</span>
                        <span>{entry.time}</span>
                        {moodData && <span>{moodData.name}</span>}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="flex-shrink-0 p-2 md:p-3 rounded-lg hover:bg-destructive/20 text-destructive transition-all duration-200 hover:shadow-md active:scale-95"
                    >
                      <Trash2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    </button>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
