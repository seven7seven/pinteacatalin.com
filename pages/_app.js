import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'

import Meta from '../components/meta'

import 'normalize.css/normalize.css'
import 'include-media/dist/_include-media.scss'
import '../styles/main.scss'


const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default App
