import React, { Component } from 'react';
import DrumPad from './DrumPad.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div id='drum-machine'>
        <div id='display'>
          <DrumPad className='drum-pad' letter='Q' />
          <DrumPad className='drum-pad' letter='W' />
          <DrumPad className='drum-pad' letter='E' />
          <DrumPad className='drum-pad' letter='A' />
          <DrumPad className='drum-pad' letter='S' />
          <DrumPad className='drum-pad' letter='D' />
          <DrumPad className='drum-pad' letter='Z' />
          <DrumPad className='drum-pad' letter='X' />
          <DrumPad className='drum-pad' letter='C' />
        </div>
      </div>
    );
  }
}

export default App;
