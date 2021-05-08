import React, {useEffect} from 'react';
import AppDelegates from './delegates/app.delegates';
import Logo from './Logo';
import './App.scss';

const App = () => {
  useEffect(() => {
    const AppDelegateMethods = AppDelegates(this);
    const introAnimation = setTimeout(() => {
      AppDelegateMethods.initIntroAnimation();
    }, 1500);

    return () => {
      clearTimeout(introAnimation);
    };
  }, []);

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <Logo />
          <p>Coming soon.</p>
          <a
            className="App-link"
            href="https://foo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
