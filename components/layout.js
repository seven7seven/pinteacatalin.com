import styles from '../styles/layout.module.scss';
import stylesUtils from '../styles/utils.module.scss';


export default function Layout({ children }) {
  return <>
    <div className={styles.header}>
      <h1>Pintea Cătălin</h1>
      <div className={stylesUtils.textCenter}>
        <p>Nexus for my online work & presence</p>
      </div>
    </div>
    <div>{children}</div>
  </>
}
