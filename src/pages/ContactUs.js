import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>Name: <input type="text" /></label>
        <label>Email: <input type="email" /></label>
        <label>Message: <textarea /></label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
