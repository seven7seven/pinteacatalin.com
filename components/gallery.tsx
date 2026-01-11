'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface GalleryProps {
  photos: string[]
}

export default function Gallery({ photos }: GalleryProps) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedPhoto])

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!photos || photos.length === 0) {
    return <div className="w-full h-[200px] bg-main">Loading...</div>
  }

  return (
    <>
      {!firstImageLoaded && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="w-10 h-10 border-[3px] border-light border-t-main rounded-full animate-spin" />
        </div>
      )}
      <div
        className={`w-full absolute top-0 -z-10 transition-opacity duration-300 ${
          firstImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {photos.map((imgPath, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] phone:h-[500px] tablet:h-[450px] laptop:h-[550px] desktop:h-[650px] fourk:h-[1000px] cursor-pointer"
            onClick={() => setSelectedPhoto(imgPath)}
          >
            <Image
              src={imgPath}
              alt={`Gallery image #${index + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              loading={index > 2 ? 'lazy' : 'eager'}
              priority={index <= 2}
              onLoad={index === 0 ? () => setFirstImageLoaded(true) : undefined}
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="relative w-full h-full">
            <Image
              src={selectedPhoto}
              alt="Fullscreen photo"
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
