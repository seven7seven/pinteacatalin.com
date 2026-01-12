'use client'

import { useState, useRef } from 'react'
import { Play } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  poster?: string
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden rounded-lg tablet:rounded-2xl cursor-pointer">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover cursor-pointer"
        onClick={handleVideoClick}
        onEnded={handleVideoEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        playsInline
      />

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
          aria-label="Play video"
        >
          <div className="w-20 h-20 rounded-full bg-light flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
            <Play className="w-10 h-10 text-main fill-main ml-[1px]" />
          </div>
        </button>
      )}
    </div>
  )
}
