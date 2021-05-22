import React from 'react';

const Carousel = ({items, actions}) => {
  return (
    <div className="b-carousel-logo-container">
      {
        Object.values(items).map((Item, i) => {
          return (
            <div
              key={i}
              className="b-carousel-logo-container__logo"
              onMouseEnter={actions.hover}
            >
              <Item />
            </div>
          );
        })
      }
    </div>
  );
};

export default Carousel;
