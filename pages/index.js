import dynamic from 'next/dynamic'

const BlockComponent = dynamic(() => import('../components/block'))

function HomePage() {
  const nBlocks = 3;

  let blocks = [...Array(nBlocks)].map((e, i) => <BlockComponent key={i} />);

  return <>
    <div className='header'>
      <h1>Pintea Cătălin</h1>
      <div className="text-center">
        <p>Nexus for my online work & presence</p>
      </div>
    </div>
    <div className="blocks">
      { blocks }
    </div>
    <div className="text-center">
      <p>
        🏡 Currently improving the way real estate is transactioned <a href="https://www.crmrebs.ro/" target="_blank">@REBS</a>
      </p>
      <p>
        🚧 This is a living experiment and <a href="https://github.com/seven7seven/pinteacatalin.com" target="_blank">its source code is public</a>.
      </p>
      <p>
        📬 Reach out at <a href="mailto:catalin@rebs.ro" target="_blank">catalin@rebs.ro</a>
      </p>
    </div>
  </>
}

export default HomePage

