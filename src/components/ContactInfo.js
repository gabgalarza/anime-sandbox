import React from 'react';
import Avatar from '../assets/avatar.png';
import {ReactComponent as TwitterIcon} from '../assets/twitter.svg';
import {ReactComponent as GithubIcon} from '../assets/github.svg';

const ContactInfo = () => {
  return (
    <div id="ContactInfoDiv" className="b-contact-info">
      <img className="b-contact-info__avatar" src={Avatar} alt="Avatar" />
      <div className="b-contact-info__social">
       <div className="b-contact-info__social-icon">
         <TwitterIcon/>
         <span>Twitter</span>
       </div>
       <div className="b-contact-info__social-icon">
         <GithubIcon/>
         <span>Github</span>
       </div>
      </div>
    </div>
  );
};

export default ContactInfo;