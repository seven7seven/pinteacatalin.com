'use client'

import Image from 'next/image'
import styles from '@/styles/gallery.module.scss'

interface GalleryProps {
  photos: string[]
}

export default function Gallery({ photos }: GalleryProps) {
  if (!photos || photos.length === 0) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <div className={styles.gallery}>
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
          />
        </div>
      ))}
    </div>
  )
}
