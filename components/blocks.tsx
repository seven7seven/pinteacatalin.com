import Gradients from '@/public/images/svg/gradients.svg'
import BlockComponent from '@/components/block'
import styles from '@/styles/blocks.module.scss'

interface BlocksProps {
  nRows: number
  nCols: number
}

export default function Blocks({ nRows, nCols }: BlocksProps) {
  const blocks = []

  for (let i = nRows - 1; i >= 0; i--) {
    const row = [...Array(nCols)].map((_, j) => <BlockComponent key={j} />)
    blocks.push(
      <div className={styles.blocksRow} key={i}>
        {row}
      </div>
    )
  }

  return (
    <>
      <Gradients />
      <div className={styles.blocks}>{blocks}</div>
    </>
  )
}
