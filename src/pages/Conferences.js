import React from 'react';

const Conferences = () => {
  return (
    <div>
      <h1>Conferences</h1>
      <div className="conferences-list">
        <div className="conference-item">
          <h2>The Boardroom</h2>
          <button>View More</button>
        </div>
        <div className="conference-item">
          <h2>Batian Conference</h2>
          <button>View More</button>
        </div>
        <div className="conference-item">
          <h2>Teleki Conference</h2>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Conferences;
