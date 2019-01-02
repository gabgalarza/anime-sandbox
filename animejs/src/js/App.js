import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { setAudioContext, drawGraph } from './components/FreqGraph.js';
import Player from './components/Player.js';
import music from '../../src/media/Simon&GarfunkelAmerica.ogg';
import Anime from 'react-anime';
import '../css/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opts: [
        { name: 'support', link: '/support' },
        { name: 'faq', link: '/faq' },
      ],
      gradient: [
        { value: '0%' },
        { value: '50%' },
        { value: '100%' },
        { value: '50%' },
        { value: '0%' },
      ]
    }
  }

  componentDidMount() {
    const audioContext = setAudioContext(music);
    drawGraph(audioContext);
  }

  container = () => (
    <div>
      <div className="intro">
        {this.intro(<h1>yuu</h1>)}
        <Player></Player>
        {this.menu(this.state.opts)}
      </div>
      <canvas id="visualizer"></canvas>
    </div>
  )

  intro = (title) => (
    <Anime
    easing="easeInOutExpo"
    duration={500}
    direction="alternate"
    delay={(el, index) => index * 300}
    loop={false}
    translateY="-13rem"
    scale={[.15, 1.5]}>
      { title }
    </Anime>
  );

  menu = (opts = []) => (
    <nav className="menu">
      <ul>
        {
          opts.map(opt =>
            <li key={opt.name}>
              <Link to={opt.link}>{opt.name}</Link>
              {/* TODO: replace components */}
              <Route
                path={opt.link}
                component={() => <h1>tests</h1>} />
            </li>
          )
        }
      </ul>
    </nav>
  )


  render() {
    return (
      <Router>
        <div className="App">
          {this.container()}
        </div>
      </Router>
    );
  }
}

export default App;
