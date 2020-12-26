import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/nav.module.scss'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} ${styles.active}`
  }

  return <Link href={href}>{ React.cloneElement(children, { className }) }</Link>
}
