import Nav from '../components/nav'

import styles from '../styles/layout.module.scss'
import stylesUtils from '../styles/utils.module.scss'

export default function Layout({ children }) {
  return <>
    <Nav />
    <div className={styles.header}>
      <h1 className={stylesUtils.title}>Pintea Cătălin</h1>
      <div className={stylesUtils.textCenter}>
        <p>Nexus for my online work & presence</p>
      </div>
    </div>
    <div>{children}</div>
  </>
}
