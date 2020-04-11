import React, {Component} from 'react';
import anime from 'animejs/lib/anime.es.js';
import Logo from './Logo';
import './App.css';

class App extends Component {
  componentDidMount() {
    //init line drawing for logo
    anime({
      targets: '.path1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 500 },
      direction: 'alternate',
      loop: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
