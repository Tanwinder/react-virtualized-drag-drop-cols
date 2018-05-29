import React, {Component} from 'react';
import { Grid } from 'react-virtualized';
import MySelect from './virtual-select'
import cityData from '../data/cities'

// Grid data as an array of arrays
const list = [
  ['x5', <MySelect data={cityData}/>, 'BMWhdh sgdjsn gfjsfb sfbewfbweb', 'CA', 'lorem'],
  ['abc', 'Manomoneeedbewdhw', 'xyz', 'CAwq bwjbwqw kjqnwq', 'loremsfbewjfbewjbfewj'],
  ['abc', 'Manomoneehbdewhd', 'xyz', 'CAwhbd wqbwdwq', 'lorem'],
  ['abc', 'Manomonee', 'xyz', 'CAwwdbw dbwbjwqbd', 'lorem'],
  ['x5', <MySelect data={cityData}/>, 'BMW', 'CA'],
  ['abc', 'Manomoneeedbewjb', 'xyz', 'CA'],
  ['abc', 'Manomonee', 'xyz', 'CA'],
  ['x5', <MySelect data={cityData}/>, 'BMWsdfvsdhjsshjfbsh', 'CA'],
  ['abc', 'Manomonee', 'xyz', 'CA'],
  ['x5', <MySelect data={cityData}/>, 'BMW', 'CA'],
  ['abc', 'Manomonee', 'xyz', 'CA'],
  ['abc', 'Manomonee', 'xyz', 'CA', 'lorem'],
  ['x5', <MySelect data={cityData}/>, 'BssW', 'CA'],
  ['x5', <MySelect data={cityData}/>, 'qxsakjxW', 'CA'],
  ['x5', <MySelect data={cityData}/>, 'BjxbbxkW', 'CA'],
];



class VirtualGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            colNum: list[0].length,
            width : 0,
            kl: true
        }
    }
    componentDidMount(){
        this.colWidth();
        window.addEventListener('resize',this.colWidth.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.colWidth.bind(this));
    }

    colWidth(){
        let width = window.innerWidth*98/100;
        this.setState({ width })
    }
    // cellBack(){
    //     alert('hi');
    //     this.setState({kl: false});
    // }
    cellRenderer ({ columnIndex, key, rowIndex, style, isScrolling }) {
        const content = isScrolling
    ? '...'
    : list[rowIndex][columnIndex];
        if(typeof(list[rowIndex][columnIndex]) === 'object'){
            return (
                <div
                  key={key}
                  style={style}
                  className="item-cell"
                //   onClick={()=> this.cellBack()}
                >
                  {list[rowIndex][columnIndex]}
                </div>
              ) 
        }
      return (
        <div
          key={key}
          style={style}
          className="non-item-cell"
        >
          {content}
        </div>
      )  
    }


    render(){
        return(
            <Grid
                cellRenderer={this.cellRenderer.bind(this)}
                autoContainerWidth={false}
                columnCount={this.state.colNum}
                columnWidth={this.state.width/this.state.colNum}
                height={250}
                rowCount={list.length}
                rowHeight={40}
                width={this.state.width}
                className="container"
            />
        )
    }
}

export default VirtualGrid;