import dynamic from 'next/dynamic';

const BlockComponent = dynamic(() => import('../components/block'));
import Gradients from '../public/images/svg/gradients.svg';

function HomePage() {
  const nRows = 4,
        nCols = 3;

  let blocks = [];
  for (var i = nRows - 1; i >= 0; i--) {
    let row = [...Array(nCols)].map((e, j) => <BlockComponent key={j} />);
    blocks.push(<div className="blocks-row" key={i}>
      { row }
    </div>);
  }

  return <>
    <div className='header'>
      <h1>Pintea Cătălin</h1>
      <div className="text-center">
        <p>Nexus for my online work & presence</p>
      </div>
    </div>
    <Gradients />
    <div className="blocks">
      { blocks }
    </div>
    <div className="text-center">
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
  </>
}

export default HomePage

