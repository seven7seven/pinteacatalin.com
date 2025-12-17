'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles/nav.module.scss'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${styles.item} ${isActive ? styles.active : ''}`}
    >
      {children}
    </Link>
  )
}
