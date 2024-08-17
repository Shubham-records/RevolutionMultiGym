import {useState} from "react";
import React from 'react';

export default function ContactUs(){

    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        message: ''
      });
    
      const handleChange = (data) => {
        setFormData({
          ...formData,
          [data.target.name]: data.target.value
        });
      };
    
      async function handleSubmit(data) {
        data.preventDefault();
        console.log('Form submitted:', formData);
        const response = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        setFormData({ name: '', contact: '', email: '', message: '' });
      };
    
      return (
        <form className="form-container" onSubmit={(data)=>(handleSubmit(data))}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
    
          <button className="formbutton" type="submit">Submit</button>
        </form>
    );
}