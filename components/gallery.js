import useSWR from 'swr'
import Image from 'next/image'

import styles from '../styles/gallery.module.scss'

export default function Gallery() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/getphotos', fetcher);

  return <>
    <div className={styles.gallery}>
    {!data && "..."}
    {data && data.map(imgPath => <>
      <div className={styles.item}>
        <Image
          src={ imgPath }
          alt={ `Gallery image` }
          layout="fill"
          objectFit="cover"
          key={ imgPath }
        />
      </div>
    </>)}
    </div>
  </>
}
