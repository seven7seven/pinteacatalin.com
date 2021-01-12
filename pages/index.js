import { useEffect } from 'react'

import Layout from '../components/layout'
import Blocks from '../components/blocks'

import stylesUtils from '../styles/utils.module.scss'

function HomePage() {

  useEffect(() => {
    // Update the body class
    document.querySelector("body").classList.remove("transparent");
  });

  return <Layout>
    <Blocks nRows={3} nCols={3} />
    <div className={stylesUtils.textCenter}>
      <p>
        Currently improving the way real estate is transactioned <a href="https://www.crmrebs.ro/" target="_blank">@REBS</a>
      </p>
      <p>
        This is a living experiment and <a href="https://github.com/seven7seven/pinteacatalin.com" target="_blank">its source code is public</a>.
      </p>
      <p>
        Get in touch — <a href="mailto:catalin@rebs.ro" target="_blank">catalin@rebs.ro</a>
      </p>
    </div>
  </Layout>
}

export default HomePage

