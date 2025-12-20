import LayoutWrapper from '@/components/layout-wrapper'
import Blocks from '@/components/blocks'

export default function HomePage() {
  return (
    <LayoutWrapper>
      <Blocks nRows={3} nCols={3} />
      <div className="text-center">
        <p>
          Currently improving the way real estate is transactioned{' '}
          <a href="https://www.crmrebs.ro/" target="_blank" rel="noopener noreferrer">
            @REBS
          </a>
        </p>
        <p>
          This is a living experiment and{' '}
          <a href="https://github.com/seven7seven/pinteacatalin.com" target="_blank" rel="noopener noreferrer">
            its source code is public
          </a>
          .
        </p>
        <p>
          Get in touch —{' '}
          <a href="mailto:catalin@rebs.ro" target="_blank" rel="noopener noreferrer">
            catalin@rebs.ro
          </a>
        </p>
      </div>
    </LayoutWrapper>
  )
}
