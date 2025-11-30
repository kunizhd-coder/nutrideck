"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { moods } from "@/lib/moods-data"

interface MoodSelectionProps {
  onMoodSelected: (mood: string) => void
  onNavigate: (page: "home" | "selection" | "result" | "history" | "journal") => void
}

export default function MoodSelection({ onMoodSelected, onNavigate }: MoodSelectionProps) {
  return (
    <div className="min-h-screen px-4 py-8 md:py-12 animate-page-enter">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4 text-balance">
            How are you feeling today?
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Choose the mood that best describes how you're feeling right now
          </p>
        </div>

        {/* Mood Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {moods.map((mood, index) => (
            <button
              key={mood.id}
              onClick={() => onMoodSelected(mood.id)}
              className="group flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg active:scale-95 active:shadow-md bg-card hover:bg-secondary/30 border-2 border-transparent hover:border-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background animate-stagger"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-200">
                {mood.emoji}
              </div>
              <span className="text-sm md:text-base lg:text-lg font-semibold text-foreground text-center line-clamp-2">
                {mood.name}
              </span>
            </button>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center animate-page-scale-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="outline" onClick={() => onNavigate("home")} className="gap-2 hover:bg-muted hover:brightness-110 hover:shadow-lg transition-all duration-200">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Go Back</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
