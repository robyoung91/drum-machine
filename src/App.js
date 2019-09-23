import React, { Component } from 'react';
import DrumPad from './DrumPad.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.audioRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.audioRef);
  }
  render() {
    const letters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    const DrumPads = letters.map(x => (<div>
      <audio className='clip' src={"./sounds/" + x + ".aif"} id={x} ref={this.audioRef} onClick={this.handleClick} key={x}></audio>
    </div>));

    return (
      <div id='drum-machine'>
        <div id='display'>
          {DrumPads}
        </div>
      </div>
    );
  }
}

export default App;
