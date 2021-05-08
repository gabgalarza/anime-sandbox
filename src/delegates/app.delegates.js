import anime from 'animejs/lib/anime.es.js';

const AppDelegates = _self => {
  const initIntroAnimation = () => {
    console.log('initIntroAnimation called');
    anime({
      targets: '.logo',
      borderRadius: ['0%', '50%'],
      translateY: [0, -120],
      scale: 5,
      easing: 'easeInOutQuad',
      backgroundColor: '#FFF',
      duration: 100,
    });
  };

  return {
    initIntroAnimation
  };
};

export default AppDelegates;