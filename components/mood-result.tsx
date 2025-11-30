"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { moods, moodDetails } from "@/lib/moods-data"
import { ArrowLeft, Heart, Lightbulb, Utensils, Save } from "lucide-react"
import { useState } from "react"

interface MoodResultProps {
  mood: string
  onBackToSelection: () => void
  onBackToHome: () => void
  onSaveMood: (mood: string) => void
}

export default function MoodResult({ mood, onBackToSelection, onBackToHome, onSaveMood }: MoodResultProps) {
  const [showRitual, setShowRitual] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const moodData = moods.find((m) => m.id === mood)
  const details = moodDetails[mood as keyof typeof moodDetails]

  if (!moodData || !details) {
    return <div>Mood tidak ditemukan</div>
  }

  const handleSave = () => {
    onSaveMood(mood)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 animate-page-enter">
      <div className="max-w-3xl mx-auto">
        {/* Header with Mood */}
        <div className="text-center mb-8 md:mb-12 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block text-6xl md:text-8xl mb-4 md:mb-6 animate-bounce-in" style={{ animationDelay: '0.2s' }}>{moodData.emoji}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">Anda merasa {moodData.name}</h1>
          <p className="text-base md:text-lg text-muted-foreground">{details.explanation}</p>
        </div>

        {isSaved && (
          <div className="mb-6 p-4 bg-accent/20 border border-accent text-accent-foreground rounded-lg text-center font-semibold animate-page-scale-in">
            Mood berhasil disimpan ke riwayat!
          </div>
        )}

        {/* Food Recommendations */}
        <div className="mb-8 md:mb-12 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <Utensils className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Makanan yang Direkomendasikan</h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {details.foods.map((food, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary/30 hover:border-accent/50 transition-all duration-300 hover:shadow-md animate-stagger"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <p className="text-base md:text-lg font-semibold text-foreground">{food}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Wellness Ritual */}
        <div className="mb-8 md:mb-12 animate-page-scale-in" style={{ animationDelay: '0.6s' }}>
          <button onClick={() => setShowRitual(!showRitual)} className="w-full group">
            <Card className="p-4 md:p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md cursor-pointer">
              <div className="flex items-center gap-3 md:gap-4">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Ritual Kesehatan 1 Menit</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {showRitual ? "Klik untuk sembunyikan" : "Klik untuk tampilkan"}
                  </p>
                </div>
              </div>
            </Card>
          </button>

          {showRitual && (
            <div className="mt-4 md:mt-6 p-4 md:p-6 bg-primary/5 border-2 border-primary/20 rounded-xl animate-page-slide-up">
              <p className="text-base md:text-lg text-foreground leading-relaxed italic">{details.ritual}</p>
            </div>
          )}
        </div>

        {/* Affirmation */}
        <Card className="mb-8 md:mb-12 p-4 md:p-6 bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 animate-bounce-in" style={{ animationDelay: '0.7s' }}>
          <div className="flex items-start gap-3 md:gap-4">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-base md:text-lg font-semibold text-foreground mb-2">Afirmasi Anda untuk Hari Ini</p>
              <p className="text-sm md:text-base text-foreground italic">\"{details.affirmation}\"</p>
            </div>
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button onClick={handleSave} className="gap-2 bg-accent text-accent-foreground hover:bg-accent hover:brightness-110 text-sm md:text-base lg:text-lg px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 hover:shadow-lg transition-all duration-200">
            <Save className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <span>Simpan ke Riwayat</span>
          </Button>
          <Button onClick={onBackToSelection} variant="outline" className="gap-2 bg-transparent text-sm md:text-base lg:text-lg px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 hover:bg-muted hover:brightness-110 hover:shadow-lg transition-all duration-200">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <span>Pilih Mood Lain</span>
          </Button>
          <Button onClick={onBackToHome} variant="outline" className="gap-2 bg-transparent text-sm md:text-base lg:text-lg px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 hover:bg-muted hover:brightness-110 hover:shadow-lg transition-all duration-200">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <span>Kembali ke Beranda</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
