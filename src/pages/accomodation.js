import React from 'react';

const Accommodation = () => {
  return (
    <div>
      <h1>Accommodation</h1>
      <div className="accommodation-list">
        <div className="accommodation-item">
          <h2>Standard Room</h2>
          <button>View More</button>
        </div>
        <div className="accommodation-item">
          <h2>Family Cottage</h2>
          <button>View More</button>
        </div>
        <div className="accommodation-item">
          <h2>Superior Room</h2>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
