import React from 'react';
import PropTypes from 'prop-types';

const PageSection = ({ img, blurbText, order, duration }) => {
  return (
    <div id="pageSectionDiv">
      <div className="page-section__container">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

PageSection.propTypes = {
  /* an image needed to display for page section */
  img: PropTypes.string.isRequired,
  /* some copy text displayed next to image */
  blurbText: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired
  }).isRequired,
  /* render section based on order */
  order: PropTypes.number,
  /* animation duration */
  duration: PropTypes.number
};