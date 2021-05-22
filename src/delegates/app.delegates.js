import anime from 'animejs/lib/anime.es.js';
import constants from '../constants.json';

const AppDelegates = _self => {
  const getMarkdownPost = post => {
    // Fetch markdown posts for sections
    return fetch(post);
  };

  const onHoverArrowAnimation = () => {
    const initialXAxis = 0;

    const enterButton = (e) => anime({
      targets: e.currentTarget.querySelector("span"),
      translateX: initialXAxis + 20,
    });

    const leaveButton = (e) => anime({
      targets: e.currentTarget.querySelector("span"),
      translateX: initialXAxis
    });

    return {
      enterButton,
      leaveButton
    }
  };

  const logoAnimation = (el) => {
    anime({
      targets: [el.currentTarget.querySelectorAll('path'), el.currentTarget.querySelectorAll('circle')],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      direction: "alternate",
    });
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
    logoAnimation,
    getMarkdownPost
  };
};

export default AppDelegates;