import React, { Component } from 'react';
import './App.css';

const bankOne = [
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

    const bankTwo = [{
        key: 'Q',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Lofi%20Sega%20Samples/25[kb]lofi-sega-sample-86.wav.mp3',
        keyCode: 81,
      },
      {
        key: 'W',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Lofi%20Sega%20Samples/35[kb]lofi-sega-sample-96.wav.mp3',
        keyCode: 87,
      },
      {
        key: 'E',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/CASIO%20SK-1/9[kb]SK1_LT.wav.mp3',
        keyCode: 69,
      },
      {
        key: 'A',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/UNUSUAL%20KITS%20and%20FX/R2D2%20Construction%20Kit/18[kb]R2D2-ouch.aif.mp3',
        keyCode: 65,
      },
      {
        key: 'S',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/43[kb]8bitkit-powerup-10.wav.mp3',
        keyCode: 83,
      },
      {
        key: 'D',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/6[kb]8bitkit-select-5.wav.mp3',
        keyCode: 68,
      },
      {
        key: 'Z',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/3[kb]8bitkit-select-8.wav.mp3',
        keyCode: 90,
      },
      {
        key: 'X',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Lofi%20Sega%20Samples/19[kb]lofi-sega-sample-93.wav.mp3',
        keyCode: 88,
      },
      {
        key: 'C',
        url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Lofi%20Sega%20Samples/11[kb]lofi-sega-sample-94.wav.mp3',
        keyCode: 67,
      },
    ];

    const banks = [bankOne, bankTwo];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: 0,
      volume: 0.3,
      power: true,
    };
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleClick = (ref) => {
    this.state.power ? this[ref].volume = this.state.volume : this[ref].volume = 0;
    this[ref].currentTime = 0;
    this[ref].play();
  }

  handleKeyDown = (e) => {
      let audio = document.getElementById(e.key.toUpperCase());
      let audioButton = document.getElementById(e.key.toUpperCase() + '-button');
      if (audio) {
        this.state.power ? audio.volume = this.state.volume : audio.volume = 0;
        audio.currentTime = 0;
        audio.play();
        audioButton.style['background-color'] = '#429477';
      }
  }

  handleMouseDown = (ref) => {
    this[ref].style['background-color'] = '#429477';
    setTimeout(() => this[ref].style['background-color'] = '#cf6a39', 1000);
  }

  handleMouseUp = (ref) => {
    this[ref].style['background-color'] = '#cf6a39';
  }

  handleKeyUp = (e) => {
    let audioButton = document.getElementById(e.key.toUpperCase() + '-button');
      if (audioButton) {
        audioButton.style['background-color'] = '#cf6a39';
      }
  }

  changeBank = () => {
    if (this.state.bank === 0) {
      this.setState({
        bank: 1,
      })
    } else {
      this.setState({
        bank: 0,
      })
    }
  }

  changeVolume = (e) => {
    this.setState({
      volume: e.target.value,
    })
  }

  togglePower = () => {
    this.setState({
      power: !this.state.power,
    })
  }

  render() {
    
    let drumPads = banks[this.state.bank].map((element, index) => 
      (
        <div className='drumPad' key={element.key}>
          <audio 
            className='clip' 
            src={element.url} 
            type='audio/wav' 
            id={element.key} 
            key={element.keyCode}
            ref={ ref => this[element.key] = ref }
          />
          <button 
            id={element.key + '-button'}
            onClick={()=>{this.handleClick(element.key)}}
            ref={ref => this[element.key + '-button'] = ref}
            onMouseDown = {() => {this.handleMouseDown(element.key + '-button')}}
            onMouseUp = {() => {this.handleMouseUp(element.key + '-button')}}>
              {element.key}
          </button>
        </div>
      )
    );

    return (
      <div id='drum-machine'>
        <h1>8-bit SFX<br/>Machine</h1>
        <div id='display'>
          <div id='drum-pads'>
            {drumPads}
          </div>
          <div id='controls'>
            <button onClick={this.togglePower}>Power: {this.state.power ? 'On' : 'Off'}</button>
            <input type='range' min='0' max='1' step='0.01' value={this.state.volume} onChange={this.changeVolume}/>
            <button onClick={this.changeBank}>Bank {this.state.bank + 1}</button>
          </div>
        </div>
        <footer>by Rob Young</footer>
      </div>
    );
  }
}

export default App;
