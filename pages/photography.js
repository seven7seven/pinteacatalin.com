import { useEffect } from 'react'

import Layout from '../components/layout'
import Gallery from '../components/gallery'

import stylesUtils from '../styles/utils.module.scss'

export default function Photography() {

  useEffect(() => {
    // Update the body class
    document.querySelector("body").classList.add("transparent");
  });

  return <Layout>
    <div className={stylesUtils.textCenter}>
      <Gallery/>
    </div>
  </Layout>
}
