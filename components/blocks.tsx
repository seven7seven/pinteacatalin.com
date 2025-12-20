import Gradients from '@/public/images/svg/gradients.svg'
import BlockComponent from '@/components/block'

interface BlocksProps {
  nRows: number
  nCols: number
}

const BLOCK_W = 97
const BLOCK_H = 56

export default function Blocks({ nRows, nCols }: BlocksProps) {
  const blocks = []

  for (let i = nRows - 1; i >= 0; i--) {
    const row = [...Array(nCols)].map((_, j) => <BlockComponent key={j} />)
    const isEvenRow = (nRows - 1 - i) % 2 === 1
    blocks.push(
      <div
        key={i}
        style={{
          height: BLOCK_H,
          ...(isEvenRow && {
            position: 'relative',
            right: BLOCK_W / 2,
            top: -BLOCK_H / 2,
          }),
        }}
      >
        {row}
      </div>
    )
  }

  return (
    <>
      <Gradients />
      <div
        className="text-center mb-8"
        style={{ paddingBottom: BLOCK_H, paddingLeft: BLOCK_W / 2 }}
      >
        {blocks}
      </div>
    </>
  )
}
