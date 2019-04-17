import React, { Component } from 'react';
import {
  FaBackward as Back,
  FaPlayCircle as Play,
  FaPause as Pause,
  FaForward as Forward
} from 'react-icons/fa';

class Player extends Component {
  constructor(props){
    super(props);

    this.state = {
      isPlaying: false,
      player: props.audioCtx ? props.audioCtx : null
    };

    this.pressPlay = this.pressPlay.bind(this);
  }

  componentDidMount() {
    const player = this.state.player;
    if (player) {
      this.setState({
        player: player
      });
    }
  }

  pressPlay(e) {
    e.preventDefault();

    this.setState({
      isPlaying: !this.state.isPlaying
    }, () => {
      const { isPlaying, player } = this.state;

      return !isPlaying ? player.pause() : player.play()
    });
  }

  render() {
    const { isPlaying } = this.state;

    return (
      <div id="player">
        <Back color="#fff" />
        {isPlaying ?
          <Pause
            onClick={(e) => {
              this.pressPlay(e);
            }}
            color="#fff"
            size="40" /> :
          <Play
            id="play"
            onClick={(e) => {
              this.pressPlay(e);
            }}
            color="#fff"
            size="40" />
        }
        <Forward color="#fff" />
      </div>
    )
  }
}

export default Player;
