import Link from './link'

import styles from '../styles/nav.module.scss'
import stylesUtils from '../styles/utils.module.scss'

export default function Nav() {
  return <div className={styles.nav}>
    <div className={styles.navInner}>
      <Link href="/">
        <a className={styles.item}>
          Home
        </a>
      </Link>
      <Link href="/photography">
        <a className={styles.item}>
          Photography
        </a>
      </Link>
    </div>
  </div>
}
