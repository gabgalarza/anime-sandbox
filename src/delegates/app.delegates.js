import anime from 'animejs/lib/anime.es.js';
import constants from '../constants.json';

const AppDelegates = _self => {
  const getMarkdownPost = post => {
    // Fetch markdown posts for sections
    return fetch(post);
  };

  const onHoverArrowAnimation = (e) => {
    console.log(e, '<== event');
  };

  const initIntroAnimation = () => {
    anime({
      targets: '.App-container',
      translateY: -300,
      opacity: 1,
      easing: 'easeOutQuint',
      delay: constants.animations.introDelay
    });
  };

  return {
    initIntroAnimation,
    onHoverArrowAnimation,
    getMarkdownPost
  };
};

export default AppDelegates;