import React from 'react';
import PropTypes from 'prop-types';

const PageSection = ({ id, img, title, blurbText, order, duration, children }) => {
  return (
    <div id={`${id}pageSectionDiv`} className="b-page-section">
      {title && <h3 className="b-page-section__header">{title}</h3>}
      <div className="b-page-section__container">
        {img && <div className="b-page-section__image">{img}</div>}
        {blurbText
          && <div className="b-page-section__blurb-text">
              {blurbText.heading && <h1>{blurbText.heading}</h1>}
              {blurbText.copy
                && <div className="copy-line-height">
                    {blurbText.copy}
                  </div>
              }
            </div>
        }
        {children}
      </div>
    </div>
  );
};

PageSection.propTypes = {
  /* some copy text displayed next to image */
  blurbText: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired
  }),
  /* an image needed to display for page section */
  img: PropTypes.node,
  /* render section based on order */
  order: PropTypes.number,
  /* animation duration */
  duration: PropTypes.number,
  /* Child components to render */
  children: PropTypes.node
};

export default PageSection;