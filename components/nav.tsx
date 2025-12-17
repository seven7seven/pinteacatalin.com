'use client'

import NavLink from './nav-link'
import styles from '@/styles/nav.module.scss'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navInner}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/photography">Photography</NavLink>
      </div>
    </div>
  )
}
