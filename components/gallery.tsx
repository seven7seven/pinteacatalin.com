'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/gallery.module.scss'

interface GalleryProps {
  photos: string[]
}

export default function Gallery({ photos }: GalleryProps) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)

  if (!photos || photos.length === 0) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <>
      {!firstImageLoaded && (
        <div className={styles.loader}>
          <div className={styles.spinner} />
        </div>
      )}
      <div className={`${styles.gallery} ${firstImageLoaded ? styles.visible : styles.hidden}`}>
        {photos.map((imgPath, index) => (
          <div key={index} className={styles.item}>
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
