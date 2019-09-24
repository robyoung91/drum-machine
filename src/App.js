import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  };

  handleClick = (ref) => {
    console.log(this[ref]);
    this[ref].currentTime = 0;
    this[ref].play();
  };

  handleKeyDown = (e) => {
      let audio = document.getElementById(e.key.toUpperCase());
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
  };

  render() {
    
    const audioFiles = [
      {
        key: 'Q',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/10[kb]8bitkit-bounce-2.wav.mp3',
        keyCode: 81,
      },
      {
        key: 'W',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/76[kb]8bitkit-bounce.wav.mp3',
        keyCode: 87,
      },
      {
        key: 'E',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/15[kb]8bitkit-coin-10.wav.mp3',
        keyCode: 69,
      },
      {
        key: 'A',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/45[kb]8bitkit-coin-4.wav.mp3',
        keyCode: 65,
      },
      {
        key: 'S',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/62[kb]8bitkit-explosion-2.wav.mp3',
        keyCode: 83,
      },
      {
        key: 'D',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/13[kb]8bitkit-jump-3.wav.mp3',
        keyCode: 68,
      },
      {
        key: 'Z',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/29[kb]8bitkit-jump-9.wav.mp3',
        keyCode: 90,
      },
      {
        key: 'X',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/4[kb]8bitkit-laser-2.wav.mp3',
        keyCode: 88,
      },
      {
        key: 'C',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/22[kb]8bitkit-powerup-7.wav.mp3',
        keyCode: 67,
      },
    ];

    const DrumPads = audioFiles.map((element, index) => 
      (
        <div key={element.key}>
          <audio 
            className='clip' 
            src={element.url} 
            type='audio/wav' 
            id={element.key} 
            key={element.keyCode}
            ref={ ref => this[element.key] = ref }
          />
          <button 
            onClick={()=>{this.handleClick(element.key)}}>
              {element.key}
          </button>
        </div>
      )
    );

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
