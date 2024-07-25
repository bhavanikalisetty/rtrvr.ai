"use client";

import React, { useState } from 'react';
import { kv } from "@vercel/kv";

interface FormData {
  Name: string;
  Email: string;
  Source: string;
}

const Form: React.FC<{ isConsumer: boolean }> = ({ isConsumer }) => {
  const [formData, setFormData] = useState<FormData>({ Name: '', Email: '', Source: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.Source = isConsumer ? 'Data Consumer' : 'Data Service Provider';
    console.log('here form data', formData);
    await kv.set(`${formData.Name}${formData.Email}${formData.Source}`, formData);
    setFormData({ Name: '', Email: '', Source: '' });
    setSubmitted(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {submitted ? (
        <p className="text-white text-center">Thank you! We will contact you soon!</p>
      ) : (
        <>
          <h2>{isConsumer ? 'Data Consumer' : 'Data Service Provider'}</h2>
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" value={formData.Name} onChange={handleChange} />
          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" value={formData.Email} onChange={handleChange} />
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default Form;