import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Lerev-de-Kelvin</h1>
      <Carousel>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="Slide 3" />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>
      <div className="booking-info">
        <label>Arrival Date: <input type="date" /></label>
        <label>Nights: <input type="number" /></label>
        <label>Name: <input type="text" /></label>
        <label>Email: <input type="email" /></label>
        <label>Guests: <input type="number" /></label>
      </div>
      <div className="info-section">
        <div className="left-photo">
          <img src="https://via.placeholder.com/200x200" alt="Hotel" />
        </div>
        <div className="right-info">
          <h2>Welcome</h2>
          <p>Showcase of amenities available in the hotel.</p>
        </div>
      </div>
      <div className="map-section">
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864683775413!2d144.9630573153175!3d-37.813627979751714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3678705d5a5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1605665733834!5m2!1sen!2sau" 
            width="600" 
            height="450" 
            frameBorder="0" 
            style={{border:0}} 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
            title="Hotel Location"
          />
        </div>
        <div className="social-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://pinterest.com">Pinterest</a>
          <div className="subscription">
            <label>Subscribe to get updated: <input type="email" /></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
