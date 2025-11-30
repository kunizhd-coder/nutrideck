"use client"

import React, { useEffect, useState } from "react"

export default function Splash() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), 1200)
    return () => {
      clearTimeout(t1)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/logo.png"
          alt="NutriMood"
          className="w-28 h-28 md:w-40 md:h-40 object-contain animate-splash-in"
        />
      </div>
    </div>
  )
}
