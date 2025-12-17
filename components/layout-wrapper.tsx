'use client'

import { useEffect } from 'react'
import Nav from './nav'
import styles from '@/styles/layout.module.scss'
import stylesUtils from '@/styles/utils.module.scss'

interface LayoutWrapperProps {
  children: React.ReactNode
  isTransparent?: boolean
}

export default function LayoutWrapper({ children, isTransparent = false }: LayoutWrapperProps) {
  useEffect(() => {
    if (isTransparent) {
      document.body.classList.add('transparent')
    } else {
      document.body.classList.remove('transparent')
    }

    return () => {
      document.body.classList.remove('transparent')
    }
  }, [isTransparent])

  return (
    <>
      <Nav />
      <div className={styles.header}>
        <h1 className={stylesUtils.title}>Pintea Cătălin</h1>
        <div className={stylesUtils.textCenter}>
          <p>Nexus for my online work & presence</p>
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}
