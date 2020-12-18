import Side from '../images/svg/side.svg';
import styles from './block.module.scss'

export default function BlockComponent() {

  return (
    <div className={styles.block}>
      <Side />
      <Side />
      <Side />
    </div>
  )
}
