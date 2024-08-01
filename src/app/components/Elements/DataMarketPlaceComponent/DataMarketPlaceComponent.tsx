import React, { useState } from 'react';
import './DataMarketPlaceComponent.css';
import { kv } from "@vercel/kv";

const DataMarketPlaceComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '', 
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();

    if (formData && formData.email) {
      try {
        // Generate a unique key using a combination of timestamp and random string
        const uniqueKey = `email-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  
        await kv.set(uniqueKey, formData);
        // Reset form after submission (optional)
        setFormData({ name: '', email: '', message: '' });
        setShowSuccessMessage(true); // Show success message
        setTimeout(() => {
          setShowSuccessMessage(false); // Hide after a few seconds
        }, 3000);
      } catch (error) {
        console.error("Error storing form:", error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-between bg-gray-800 p-2 mx-auto w-screen">
      <div className="about-container px-4 py-8 mx-auto max-w-screen-lg min-h-screen"> 
        <p className="description text-gray-300">
          Your go-to source for alternative data sets. We curate datasets from data providers across consumer, geospatial intelligence, and more.
        </p>
  
        <div className="user-engagement-form mt-8">
          <p className="question text-white font-semibold text-xl mb-2">Unlock the Power of Data:</p>
          <p className="sub-question text-gray-300 mb-4">Tell us how you'd like to engage with our marketplace.</p>

          {showSuccessMessage && ( 
            <div className="success-message show" role="alert">
              <p>Thanks for reaching out! We'll be in touch soon.</p>
            </div>
          )}
  
          <form onSubmit={handleSubmit} className="flex flex-col"> 
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-700 text-white placeholder-gray-400 p-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
  
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-700 text-white placeholder-gray-400 p-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Tell us how you plan to use the data..." 
              value={formData.message}
              onChange={handleChange}
              rows={4} 
              className="bg-gray-700 text-white placeholder-gray-400 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataMarketPlaceComponent;