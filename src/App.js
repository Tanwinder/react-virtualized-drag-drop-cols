import React, { Component } from 'react';
import './App.css';
import MySelect from './components/virtual-select'
import cityData from './data/cities'
import VirtualGrid from './components/virtual-grid'

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <MySelect data={cityData}/>
        <VirtualGrid />
      </div>
    );
  }
}

export default App;
