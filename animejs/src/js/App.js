import React, { Component } from 'react';
import { setAudioContext, drawGraph } from './components/FreqGraph.js';
import Intro from './components/Intro.js';
import Player from './components/Player.js';
import music from '../../src/media/Simon&GarfunkelAmerica.ogg';
import '../css/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //isLoggedIn: true, //TODO: set back to false once login is built
      audioContext: null
    }
  }

  componentDidMount() {
    const audioContext = setAudioContext(music);

    if (audioContext) {
      this.setState({
        audioContext: audioContext
      }, () => {
        drawGraph(audioContext)
      })
    }
  }

  container = () => {
    const { audioContext } = this.state;

    return (
      <div className="app__container">
        <div className="intro">
        {(audioContext) ? (
          <div>
            <Intro title="yuu" />
            <Player audioCtx={audioContext} />
          </div>
        ) : "Player not available right now.."}
        </div>
        <canvas id="visualizer"></canvas>
      </div>
   )
}

  render() {
    return (
      <div className="App">
        {this.container()}
      </div>
    );
  }
}

export default App;
