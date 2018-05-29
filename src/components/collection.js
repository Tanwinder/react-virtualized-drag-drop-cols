import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Collection } from 'react-virtualized';
import MySelect from './virtual-select'
import cityData from '../data/cities'

// Grid data as an array of arrays
const list = [
  ['x5', <MySelect data={cityData}/>, 'BMW', 'CA'],
  ['abc', 'Manomonee', 'xyz..', 'CA'],
  ['abc', 'Manomonee', 'xyz..', 'CA'],
  ['abc', 'Manomonee', 'xyz..', 'CA'],
  ['abc', 'Manomonee', 'xyz..', 'CA'],
  ['abc', 'Manomonee', 'xyz..', 'CA'],
  ['x5', <MySelect data={cityData}/>, 'BMW', 'CA'],
  ['abc', 'Manomonee', 'xyz..', 'CA'],
  ['abc', 'Manomonee', 'xyz..', 'CA'],
];

function cellSizeAndPositionGetter ({ rowIndex }) {
    const item = list[rowIndex];
  
    return {
      height: 200,
      width: 300,
      x: 100,
      y: 200
    }
  }

function cellRenderer ({ columnIndex, key, rowIndex, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[rowIndex][columnIndex]}
    </div>
  )  
}


class VirtualCollection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            // <Grid
            //     cellRenderer={cellRenderer}
            //     columnCount={list[0].length}
            //     columnWidth={300}
            //     height={200}
            //     rowCount={list.length}
            //     rowHeight={40}
            //     width={1000}
            // />
            <Collection
                cellCount={list[0].length}
                cellRenderer={cellRenderer}
                cellSizeAndPositionGetter={cellSizeAndPositionGetter}
            />
        )
    }
}

export default VirtualCollection;