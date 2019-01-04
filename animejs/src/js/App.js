import React, { Component } from 'react';
import music from '../../src/media/Simon&GarfunkelAmerica.ogg';
import { setAudioContext, drawGraph } from './components/FreqGraph.js';
import Intro from './components/Intro.js';
import Player from './components/Player.js';
import Menu from './components/Menu.js'

import '../css/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opts: [
        { name: 'support', link: '/support' },
        { name: 'faq', link: '/faq' },
      ]
    }
  }

  componentDidMount() {
    const audioContext = setAudioContext(music);
    Promise.resolve(audioContext).then(cxt => drawGraph(cxt));
  }

  container = () => (
    <div className="container">
      <div className="intro">
        <Intro title="yuu" />
        <Player></Player>
        <Menu opts={this.state.opts} />
      </div>
      <canvas id="visualizer"></canvas>
    </div>
  )

  render() {
    return (
      <div className="App">
        {this.container()}
      </div>
    );
  }
}

export default App;
