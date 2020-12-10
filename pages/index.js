import Block from '../images/svg/block.svg';

function HomePage() {
  const nBlocks = 3 * 2;

  let blocks = [...Array(nBlocks)].map((e, i) => <Block />);

  return <>
    <h1>Labaketzi.</h1>
    <div className="blocks">
      { blocks }
    </div>
  </>
}

export default HomePage

