import useSWR from 'swr'
import Image from 'next/image'

import styles from '../styles/gallery.module.scss'

function Gallery() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/getphotos', fetcher);

  return <>
    <div className={styles.gallery}>
      { Gallery.renderGallery(data) }
    </div>
  </>
}

Gallery.renderGallery = (data) => {
  if (data) return data.map((imgPath, index) => Gallery.renderImage(imgPath, index))
  if (!data) {
    return <div className={styles.loading}>Loading...</div>
  }
}

Gallery.renderImage = (imgPath, index) => {
  let renderProps = {
    loading: index > 2 ? "lazy" : "eager",
    priority: index <= 2
  }
  return <div key={index} className={styles.item}>
    <Image
      src={ imgPath }
      alt={ `Gallery image #${index+1}` }
      {...renderProps}
      objectFit="cover"
      layout="fill"
      key={ index }
    />
  </div>
}

export default Gallery
