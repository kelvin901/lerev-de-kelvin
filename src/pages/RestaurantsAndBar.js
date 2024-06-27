import React from 'react';

const RestaurantsAndBar = () => {
  return (
    <div>
      <h1>Restaurants & Bar</h1>
      <div className="restaurants-list">
        <div className="restaurant-item">
          <h2>Main Bar</h2>
          <button>View More</button>
        </div>
        <div className="restaurant-item">
          <h2>Garden Dining</h2>
          <button>View More</button>
        </div>
        <div className="restaurant-item">
          <h2>Restaurant</h2>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsAndBar;
