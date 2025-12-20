import fs from 'fs'
import path from 'path'
import LayoutWrapper from '@/components/layout-wrapper'
import Gallery from '@/components/gallery'

async function getPhotos(): Promise<string[]> {
  const photoDirectory = 'images/photography'
  const dir = path.join(process.cwd(), 'public', photoDirectory)
  const filenames = fs.readdirSync(dir)
  return filenames.map(name => path.join('/', photoDirectory, name))
}

export default async function PhotographyPage() {
  const photos = await getPhotos()

  return (
    <LayoutWrapper isTransparent>
      <div className="text-center">
        <Gallery photos={photos} />
      </div>
    </LayoutWrapper>
  )
}
