import React from 'react';
import music from '../../../src/media/Simon&GarfunkelAmerica.ogg';
//import Icon from 'react-simple-icons';

const Player = ({song}) => (
  <div>
    <audio
      //className="audio"
      controls
      preload="auto"
      src={music}>
    </audio>
  </div>
)

export default Player;
