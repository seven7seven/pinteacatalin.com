'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface GalleryProps {
  photos: string[]
}

export default function Gallery({ photos }: GalleryProps) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const lastTap = useRef<number>(0)
  const initialPinchDistance = useRef<number | null>(null)
  const initialZoom = useRef<number>(1)

  const minSwipeDistance = 50

  // Reset zoom when changing images or closing
  useEffect(() => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }, [selectedIndex])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      if (e.key === 'Escape') {
        setSelectedIndex(null)
      } else if (e.key === 'ArrowLeft') {
        goToPrev()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  const goToNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % photos.length)
  }

  const goToPrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)
  }

  const getDistance = (touches: React.TouchList) => {
    return Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    )
  }

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch start
      initialPinchDistance.current = getDistance(e.touches)
      initialZoom.current = zoom
    } else if (e.touches.length === 1) {
      // Check for double tap
      const now = Date.now()
      if (now - lastTap.current < 300) {
        // Double tap - toggle zoom
        if (zoom > 1) {
          setZoom(1)
          setPosition({ x: 0, y: 0 })
        } else {
          setZoom(2.5)
        }
        lastTap.current = 0
      } else {
        lastTap.current = now
        touchEndX.current = null
        touchStartX.current = e.targetTouches[0].clientX
      }
    }
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDistance.current) {
      // Pinch zoom
      const currentDistance = getDistance(e.touches)
      const scale = currentDistance / initialPinchDistance.current
      const newZoom = Math.min(Math.max(initialZoom.current * scale, 1), 4)
      setZoom(newZoom)
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 })
      }
    } else if (e.touches.length === 1) {
      if (zoom > 1) {
        // Pan when zoomed
        // Let the browser handle this naturally
      } else {
        touchEndX.current = e.targetTouches[0].clientX
      }
    }
  }

  const onTouchEnd = () => {
    initialPinchDistance.current = null

    if (zoom > 1) {
      // Don't swipe when zoomed
      touchStartX.current = null
      touchEndX.current = null
      return
    }

    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isSwipe = Math.abs(distance) > minSwipeDistance

    if (isSwipe) {
      if (distance > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }

    touchStartX.current = null
    touchEndX.current = null
  }

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
        className={`w-full transition-opacity duration-300 ${
          firstImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {photos.map((imgPath, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] phone:h-[500px] tablet:h-[450px] laptop:h-[550px] desktop:h-[650px] fourk:h-[1000px] cursor-pointer"
            onClick={() => setSelectedIndex(index)}
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
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-in touch-none"
          onClick={() => {
            if (zoom > 1) {
              setZoom(1)
              setPosition({ x: 0, y: 0 })
            } else {
              setSelectedIndex(null)
            }
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            className="absolute top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(null)
            }}
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

          {/* Photo counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>

          <div
            className="relative w-full h-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full h-full transition-transform duration-100"
              style={{
                transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <Image
                src={photos[selectedIndex]}
                alt="Fullscreen photo"
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                priority
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
