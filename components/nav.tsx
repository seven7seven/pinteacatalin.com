'use client'

import NavLink from './nav-link'

export default function Nav() {
  return (
    <div className="text-center h-10 flex justify-center items-center">
      <div>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/photography">Photography</NavLink>
      </div>
    </div>
  )
}
