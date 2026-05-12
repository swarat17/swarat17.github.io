'use client'
import { useState } from 'react'

export default function HeroPhoto() {
  const [error, setError] = useState(false)
  if (error) return null
  return (
    <img
      src="/images/profile.png"
      alt="Swarat Sarkar"
      onError={() => setError(true)}
      className="w-[120px] h-[120px] rounded-full border-2 border-[rgba(10,10,10,0.12)] object-cover flex-shrink-0"
    />
  )
}
