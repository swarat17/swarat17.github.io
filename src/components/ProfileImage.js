'use client'
import { useState } from 'react'

export default function ProfileImage() {
  const [error, setError] = useState(false)

  return (
    <div className="relative">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-3xl scale-110" />
      {/* Decorative ring */}
      <div className="absolute -inset-2 rounded-full border-2 border-blue-200 dark:border-blue-800 border-dashed animate-spin [animation-duration:20s]" />

      {!error ? (
        <img
          src="/images/profile.png"
          alt="Swarat Sarkar"
          onError={() => setError(true)}
          className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
        />
      ) : (
        /* Placeholder shown when image is missing */
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
          <span className="text-white text-6xl font-bold tracking-tight select-none">SS</span>
        </div>
      )}
    </div>
  )
}
