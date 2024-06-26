"use client";

import React, { useState } from 'react';
import { kv } from "@vercel/kv";

type FormProps = {
  buttonId: string;
};

const Form: React.FC<FormProps> = ({ buttonId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = {
      Name: name,
      Email: email,
      Source: buttonId
    };
    await kv.set(name+email+buttonId, value);
    setName('');
    setEmail('');
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
      {submitted ? (
        <p className="text-white text-lg mb-4">Thank you! We will contact you soon!</p>
      ) : (
        <>
          <h2 className="text-white text-2xl mb-4">{buttonId}</h2>
          <label htmlFor="name" className="text-white text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full px-4 py-2 rounded-lg text-lg mb-4"
          />
          <label htmlFor="email" className="text-white text-lg mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full px-4 py-2 rounded-lg text-lg mb-4"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default Form;