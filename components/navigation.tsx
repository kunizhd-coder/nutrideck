"use client"

import { useState } from "react"
import { Home, History, BookOpen } from "lucide-react"

interface NavigationProps {
  currentPage: string
  onNavigate: (page: "home" | "selection" | "result" | "history" | "journal") => void
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "history", label: "History", icon: History },
    { id: "journal", label: "Journal", icon: BookOpen },
  ]

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 md:hidden">
        <div className="flex justify-around items-center h-20 px-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as any)
                  setIsOpen(false)
                }}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
                  isActive ? "text-primary bg-primary/20 shadow-md hover:brightness-110" : "text-muted-foreground hover:text-foreground hover:shadow-sm hover:brightness-110"
                }`}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-card border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white text-sm font-bold">N</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">NutriMood Deck</h1>
          </div>

          <div className="flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as any)}
                  className={`flex items-center gap-2 px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg transition-all duration-200 font-medium hover:shadow-md active:scale-95 ${
                    isActive ? "bg-primary text-primary-foreground shadow-md hover:brightness-110" : "text-foreground hover:bg-muted hover:shadow-sm hover:brightness-110"
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
