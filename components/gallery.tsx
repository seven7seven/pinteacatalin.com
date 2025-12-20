'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryProps {
  photos: string[]
}

export default function Gallery({ photos }: GalleryProps) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)

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
            className="relative w-full h-[400px] phone:h-[500px] tablet:h-[450px] laptop:h-[550px] desktop:h-[650px] fourk:h-[1000px]"
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
    </>
  )
}
