import React from 'react';

const VirtualTour = () => {
  return (
    <div>
      <h1>Virtual Tour</h1>
      <div className="virtual-tour-instructions">
        <p>HOW TO USE THE VIRTUAL TOUR: All you have to do is left click inside the virtual tour and drag your mouse to any direction or simply use the cursor keys - left, right, up, or down.</p>
      </div>
      <div className="virtual-tour-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864683775413!2d144.9630573153175!3d-37.813627979751714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3678705d5a5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1605665733834!5m2!1sen!2sau" 
          width="600" 
          height="450" 
          frameBorder="0" 
          style={{border:0}} 
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0"
          title="Virtual Tour"
        />
      </div>
    </div>
  );
};

export default VirtualTour;
