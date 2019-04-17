import React from 'react';
import Anime from 'react-anime';

const Intro = (props) => (
  <Anime
    easing="easeInOutExpo"
    duration={500}
    direction="alternate"
    delay={(el, index) => index * 300}
    loop={false}
    translateY="-13rem"
    scale={[.15, 1.5]}>
      <h1>{ props.title }</h1>
  </Anime>
);

export default Intro;
