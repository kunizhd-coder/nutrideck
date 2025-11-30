"use client"

import { Button } from "@/components/ui/button"
import { Heart, Smile } from "lucide-react"

interface HomePageProps {
  onStartMoodCheck: () => void
}

export default function HomePage({ onStartMoodCheck }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full text-center space-y-8 md:space-y-12 animate-page-slide-up">
        {/* Logo */}
        <div className="flex justify-center animate-bounce-in" style={{ animationDelay: '0.1s' }}>
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <Heart className="w-10 h-10 md:w-16 md:h-16 text-primary-foreground" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">NutriMood</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">Your Mood, Your Food.</p>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
          Discover personalized food recommendations tailored to how you're feeling. Let your mood guide you to
          nourishment that truly supports your wellbeing.
        </p>

        {/* Mood Icons Preview */}
        <div className="flex justify-center gap-3 md:gap-4 flex-wrap animate-page-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-3xl md:text-4xl">😊</div>
          <div className="text-3xl md:text-4xl">😴</div>
          <div className="text-3xl md:text-4xl">😰</div>
          <div className="text-3xl md:text-4xl">🥗</div>
          <div className="text-3xl md:text-4xl">☕</div>
        </div>

        {/* CTA Button */}
        <div className="pt-6 md:pt-12 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
          <Button
            onClick={onStartMoodCheck}
            size="lg"
            className="rounded-full font-semibold px-6 md:px-10 gap-2 hover:shadow-xl hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            <Smile className="w-4 h-4 md:w-5 md:h-5" />
            Start Mood Check
          </Button>
        </div>

        {/* Footer Info */}
        <div className="pt-8 md:pt-16 text-sm text-muted-foreground animate-page-enter" style={{ animationDelay: '0.6s' }}>
          <p>Choose your mood in 3 simple steps</p>
          <p className="mt-2">Get food recommendations & wellness rituals</p>
        </div>
      </div>
    </div>
  )
}
