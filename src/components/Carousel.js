import React from 'react';

const Carousel = ({items}) => {
  return (
    <div className="b-carousel-logo-container">
      {
        Object.values(items).map((Item, i) => {
          return (
            <div className="b-carousel-logo-container__logo" key={i}>
              <Item />
            </div>
          );
        })
      }
    </div>
  );
};

export default Carousel;
