import Side from '@/public/images/svg/side.svg'
import styles from '@/styles/block.module.scss'

export default function BlockComponent() {
  return (
    <div className={styles.block}>
      <Side />
      <Side />
      <Side />
    </div>
  )
}
