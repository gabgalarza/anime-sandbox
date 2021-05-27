import React from 'react';
import {ReactComponent as PlayBtnIcon} from '../assets/playbtn.svg';

const PodcastRoll = ({items, actions}) => {
  return(
    <div id="PodcastRollDiv" className="b-podcast-roll">
      <div className="b-podcast-roll__item-container">
        {items.map((item, i) => {
          return (
            <div key={i} id="PodcastItemDiv" className="b-podcast-roll__item">
              <div id="PodcastPlayBtnDiv" className="b-play-btn__container">
                <button className="b-play-btn__button" disabled={actions.isLoading} onClick={actions.play}>
                  <div className="b-play-btn__icon">
                    <PlayBtnIcon />
                  </div>
                </button>
              </div>
              <div id="PodcastDescriptionDiv" className="b-podcast-roll__description">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
 
export default PodcastRoll;