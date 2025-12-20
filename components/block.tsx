import Side from '@/public/images/svg/side.svg'

const BLOCK_W = 97
const BLOCK_H = 56

export default function BlockComponent() {
  return (
    <div className="inline-block relative" style={{ width: BLOCK_W, height: BLOCK_H }}>
      <svg className="relative" width={BLOCK_W} height={BLOCK_H}>
        <Side />
      </svg>
      <svg
        className="absolute"
        width={BLOCK_W}
        height={BLOCK_H}
        style={{
          transform: 'rotate(-120deg)',
          left: -0.25 * BLOCK_W,
          top: BLOCK_H * 0.75,
        }}
      >
        <Side />
      </svg>
      <svg
        className="absolute"
        width={BLOCK_W}
        height={BLOCK_H}
        style={{
          transform: 'rotate(-60deg)',
          left: 0.25 * BLOCK_W,
          top: BLOCK_H * 0.75,
        }}
      >
        <Side />
      </svg>
    </div>
  )
}
