import React, { useState } from 'react';
import './ContactForm.css';

const Contact = () =>{
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3002/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    
    <div className="contact-form-container">
      <div className="text">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>City, State ZIP</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
      
        <div className="form-group">
        <h2>Contact Form</h2>
          <label htmlFor="name">Name:</label>
          <input
            htmlFor="name"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name" 
            type="text"
            required
          />
        </div>
        <div className="form-group">
		<label for="email">Email:</label>
         <input htmlFor="name"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Name" 
                    type="email"
                    required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
           htmlFor="message"
           className="form-control"
           id="message"
           name="message"
           placeholder="message" 
           type="message"
           required
          />
          
        </div>
        <button type="submit">{status}</button>
      </form>
      
      <div className="map-container">
        {/* Replace the map iframe source with your own map embed code */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.453074667391!2d-122.08410488469106!3d37.42201649143071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857d1d79f01019%3A0x4d81fbce24f401c2!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1621261912315!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
title='Royal technology'
        />
      </div>
    </div>
    
  );
};

export default Contact;
