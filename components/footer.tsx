"use client"

import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-8 right-4 md:right-8 bg-primary text-primary-foreground p-2 md:p-2.5 rounded-full hover:bg-primary hover:brightness-110 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 animate-bounce-in z-40"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12 md:mt-16 py-8 md:py-12 px-4 animate-page-enter">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Brand Section */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-sm font-bold">N</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">NutriMood</h3>
              </div>
              <p className="text-sm text-muted-foreground">Your Mood, Your Food.</p>
              <p className="text-xs text-muted-foreground mt-2">
                Discover personalized food recommendations tailored to how you're feeling.
              </p>
            </div>

            {/* Credit Section */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-sm font-semibold text-foreground mb-3">Developer Credit</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <span className="font-medium text-foreground">Kuni Zahidah Afifah Billah</span>
                </p>
                <p className="text-xs">ID: 23070260117</p>
                <p className="text-xs">Class: GZK-5D</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground animate-page-enter" style={{ animationDelay: "0.3s" }}>
            <p>&copy; 2025 NutriMood. All rights reserved.</p>
            <p>Made with care for your wellbeing</p>
          </div>
        </div>
      </footer>
    </>
  )
}
