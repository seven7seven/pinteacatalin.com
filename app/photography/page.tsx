import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import LayoutWrapper from '@/components/layout-wrapper'
import Gallery from '@/components/gallery'

export const metadata: Metadata = {
  title: 'Photography — Pintea Cătălin',
  description: 'A collection of photos I\'ve taken over the years.',
  openGraph: {
    title: 'Photography — Pintea Cătălin',
    description: 'A collection of photos I\'ve taken over the years.',
  },
}

async function getPhotos(): Promise<string[]> {
  const photoDirectory = 'images/photography'
  const dir = path.join(process.cwd(), 'public', photoDirectory)
  const filenames = fs.readdirSync(dir)
  return filenames.map(name => path.join('/', photoDirectory, name))
}

export default async function PhotographyPage() {
  const photos = await getPhotos()

  return (
    <LayoutWrapper isTransparent hideTitle noNavSpacer>
      <Gallery photos={photos} />
    </LayoutWrapper>
  )
}
