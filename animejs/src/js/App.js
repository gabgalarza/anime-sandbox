import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Anime from 'react-anime';
import '../css/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opts: [
        { name: 'start', link: '/start' },
        { name: 'contact', link: '/contact' },
        { name: 'inquires', link: '/inquiries' },
      ]
    }
  }

  intro = (children) => (
    <Anime
      easing="easeInOutExpo"
      duration={500}
      direction="alternate"
      delay={(el, index) => index * 300}
      loop={false}
      translateY="-13rem"
      scale={[.15, 1.5]}>
      { children }
    </Anime>
  );

  menu = (opts = []) => (
    <ul>
      <nav>
      {
        opts.map(opt =>
          <li key={opt.name}>
            <Link to={opt.link}>{opt.name}</Link>
            {/* TODO: replace components */}
            <Route path={opt.link} component={() => <h1>tests</h1>} />
          </li>
        )
      }
      </nav>
    </ul>
)


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="intro">
              {this.intro(<h1>heeello & welcome</h1>)}
              {this.menu(this.state.opts)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
