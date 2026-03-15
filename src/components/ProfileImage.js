'use client'
import { useState } from 'react'

export default function ProfileImage() {
  const [error, setError] = useState(false)

  return (
    <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/15 dark:bg-blue-500/10 blur-2xl scale-125" />

      {/* Outer decorative rings */}
      <div className="absolute inset-0 rounded-full border border-blue-400/20 dark:border-blue-500/15 scale-[1.06]" />
      <div className="absolute inset-0 rounded-full border border-gold/15 scale-[1.13]" />

      {/* Image or fallback */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-400/25 dark:border-blue-500/20 shadow-2xl shadow-blue-900/30">
        {!error ? (
          <img
            src="/images/profile.png"
            alt="Swarat Sarkar"
            onError={() => setError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-navy-600">
            <span className="font-display text-5xl font-bold text-blue-600 dark:text-blue-400">
              SS
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
