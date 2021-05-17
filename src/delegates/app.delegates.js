import anime from 'animejs/lib/anime.es.js';
import constants from '../constants.json';

const AppDelegates = _self => {
  const getMarkdownPost = post => {
    // Fetch markdown posts for sections
    return fetch(post);
  };

  const initIntroAnimation = () => {
    anime({
      targets: '.App-container',
      translateY: -300,
      opacity: 1,
      easing: 'easeOutExpo',
      delay: constants.animations.introDelay
    });
  };

  return {
    initIntroAnimation,
    getMarkdownPost
  };
};

export default AppDelegates;