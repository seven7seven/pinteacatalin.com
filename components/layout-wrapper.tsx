'use client'

import { useEffect } from 'react'
import Nav from './nav'

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
      <div className="mb-8">
        <h1 className="title">Pintea Cătălin</h1>
        <div className="text-center">
          <p>Nexus for my online work & presence</p>
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}
