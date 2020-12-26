import Gradients from '../public/images/svg/gradients.svg'
import BlockComponent from '../components/block'

import styles from '../styles/blocks.module.scss'

export default function Blocks({ nRows, nCols }) {

  let blocks = [];
  for (var i = nRows - 1; i >= 0; i--) {
    let row = [...Array(nCols)].map((e, j) => <BlockComponent key={j} />);
    blocks.push(<div className={ styles.blocksRow } key={i}>
      { row }
    </div>);
  }

  return <>
    <Gradients />
    <div className={styles.blocks}>
      { blocks }
    </div>
  </>
}
