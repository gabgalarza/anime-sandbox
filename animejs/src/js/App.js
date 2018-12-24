import React, { Component } from 'react';
import Anime from 'react-anime';
import '../css/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.intro();
  }

  intro = (children) => (
    <Anime
      easing="easeInOutExpo"
      duration={1000}
      direction="alternate"
      delay={(el, index) => index * 300}
      loop={false}
      translateY="-13rem"
      scale={[.15, 1.5]}>
      { children }
    </Anime>
  );

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="intro">
          {
            this.intro(
              <h1>Welcome!!</h1>
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
