"use client"

import { Card } from "@/components/ui/card"
import { moods } from "@/lib/moods-data"
import { Calendar, Clock, Trash2 } from "lucide-react"
import type { MoodEntry } from "@/lib/types"
import { useState } from "react"

interface MoodHistoryProps {
  entries: MoodEntry[]
  onReset?: () => void
}

export default function MoodHistory({ entries, onReset }: MoodHistoryProps) {
  const [showConfirm, setShowConfirm] = useState(false)
  const getMoodData = (moodId: string) => moods.find((m) => m.id === moodId)

  const handleReset = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("moodHistory")
      setShowConfirm(false)
      onReset?.()
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 animate-page-enter">
      <div className="max-w-3xl mx-auto">
        {/* Header with Reset Button */}
        <div className="mb-8 md:mb-12 flex items-start justify-between gap-4 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">Mood History</h1>
            <p className="text-base md:text-lg text-muted-foreground">Track your emotions over the past 30 days</p>
          </div>
          {entries.length > 0 && (
            <button
              onClick={() => setShowConfirm(true)}
              className="flex-shrink-0 p-2 md:p-3 lg:p-4 rounded-lg bg-destructive text-white hover:bg-destructive hover:brightness-110 transition-all duration-200 hover:shadow-lg active:scale-95"
              title="Reset history"
            >
              <Trash2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </button>
          )}
        </div>

        {entries.length === 0 ? (
          <Card className="p-8 md:p-12 text-center animate-page-scale-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground mb-4">No mood entries yet</p>
            <p className="text-sm text-muted-foreground">Start checking your mood to build your history</p>
          </Card>
        ) : (
          <div className="space-y-3 md:space-y-4">
            {entries.map((entry, index) => {
              const moodData = getMoodData(entry.mood)
              if (!moodData) return null

              return (
                <Card
                  key={entry.id}
                  className="p-4 md:p-6 bg-gradient-to-r from-primary/5 to-accent/5 hover:shadow-md transition-all duration-300 animate-stagger"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                      <div className="text-3xl md:text-4xl flex-shrink-0">{moodData.emoji}</div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground truncate">{moodData.name}</h3>
                        <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-xs md:text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {entry.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {entry.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}

        {entries.length > 0 && (
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-4 md:p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{entries.length}</div>
              <p className="text-sm md:text-base text-muted-foreground">Total Check-ins</p>
            </Card>

            <Card className="p-4 md:p-6 bg-gradient-to-br from-secondary/10 to-secondary/5">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">
                {new Set(entries.map((e) => e.date)).size}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">Days Tracked</p>
            </Card>

            <Card className="p-4 md:p-6 bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {(() => {
                  const moodCounts = entries.reduce(
                    (acc, e) => {
                      acc[e.mood] = (acc[e.mood] || 0) + 1
                      return acc
                    },
                    {} as Record<string, number>,
                  )
                  return Object.keys(moodCounts).length
                })()}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">Unique Moods</p>
            </Card>
          </div>
        )}

        {showConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-sm p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Clear History?</h2>
              <p className="text-muted-foreground mb-6">
                This will permanently delete all your mood entries. This action cannot be undone.
              </p>
              <div className="flex gap-3 md:gap-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-secondary text-black hover:bg-secondary hover:brightness-110 transition-all duration-200 font-medium text-sm md:text-base hover:shadow-lg active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-destructive text-white hover:bg-destructive hover:brightness-110 transition-all duration-200 font-medium text-sm md:text-base hover:shadow-lg active:scale-95"
                >
                  Delete
                </button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
