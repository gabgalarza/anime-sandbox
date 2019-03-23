import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { setAudioContext, drawGraph } from './components/FreqGraph.js';
import Intro from './components/Intro.js';
import Player from './components/Player.js';
import Login from './components/Login.js';
//import Menu from './components/Menu.js';
import music from '../../src/media/Simon&GarfunkelAmerica.ogg';
import '../css/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opts: [
        { name: 'support', link: '/support' },
        { name: 'faq', link: '/faq' },
      ],
      isLoggedIn: false
    }
  }

  componentDidMount() {
    const audioContext = setAudioContext(music);

    this.state.isLoggedIn && Promise.resolve(audioContext).then(cxt => drawGraph(cxt));
  }

  container = () => {
    const { isLoggedIn } = this.state;

    return (
      <div className="app__container">
        <div className="intro">
            <Intro title="yuu" />
            {isLoggedIn ? (
              <div>
                <Player></Player>
              </div>
            ) : (
              <Login />
            )}
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
