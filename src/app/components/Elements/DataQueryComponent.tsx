import React, { useState } from 'react';
import inputData from './InputData';
import Image from "next/image";
import RtrvrAILogo from "../../../public/rtrvrai.svg";

const DataQueryComponent = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState(inputData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('herebefore', messages)
    setMessages(prevMessages => [...prevMessages, { text: 'from user' + query, sender: 'user' }]);  
    setQuery('');
    setMessages(prevMessages => [...prevMessages, { text: 'from assistant' + query, sender: 'assistant' }]);
    console.log('hereafter', messages)

    // Send the query to the server and update the messages state with the response
  };

  return (
    <div id="DataQueryComponent" className="flex flex-col justify-center h-screen w-screen">
      <div className="flex flex-col flex-grow overflow-y-auto max-h-[calc(100vh-300px)] px-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-5`}>
            <div
                className={`${
                    message.sender === "user" ? "bg-blue-500" : "bg-gray-500"
                } text-white px-4 py-2 rounded-lg mb-2 `}
                dangerouslySetInnerHTML={{ __html: message.text }}
            />

          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8 px-4">
        <label htmlFor="query" className="text-white text-xl mb-4">
          What data are you looking for?
        </label>
        <div className="relative flex flex-col w-full max-w-md">
            <input
                type="text"
                id="query"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full px-4 py-2 rounded-lg text-lg h-16 pr-16"
                placeholder="Ask Anything!"
            />
            <button
                type="submit"
                className="absolute top-0 right-0 h-full px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                Send
            </button>
        </div>

      </form>
    </div>
  );
};

export default DataQueryComponent;

