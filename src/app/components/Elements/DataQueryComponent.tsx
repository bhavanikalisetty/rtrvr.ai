import React, { useState } from 'react';
import inputData from './InputData';
import Image from "next/image";
import DAGVector from "../../../public/dag_vector.svg";
import FinancialReportComponent from "./FinancialReportComponent"

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

    // Function to identify and format special elements
    const renderMessageContent = (message: {text:string, sender: string}) => {
        const text = message.text
        const hasImage = text.includes('<Image');
        const hasChart = text.includes('<Chart>'); // Add detection for your custom chart component
        const hasTable = text.includes('<Table>'); // Add detection for your custom table component
        const hasFinancialReport = text.startsWith("####### Report #######"); // Add detection for the report
        const hasOtherHtml = /<[a-z][\s\S]*>/i.test(text) && !hasImage && !hasChart && !hasTable && !hasFinancialReport;
    
        if (hasImage) {
          return (
            <div className="my-4">
              <div dangerouslySetInnerHTML={{ __html: text }} /> 
            </div>
          );
        } else if (hasChart) {
          return (
            <div className="my-4 border rounded-md p-4 bg-white">
              {/* Render your Chart component here, passing data as needed */}
              <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          );
        } else if (hasTable) {
          return (
            <div className="my-4 overflow-x-auto">
              <div dangerouslySetInnerHTML={{ __html: text }} /> 
            </div>
          );
        } else if (hasOtherHtml){
          return (
            <div className="my-4 text-black">
              <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          )
        } else if (hasFinancialReport) {
            return <FinancialReportComponent reportText={text} />;
          } else {
          return (
            <div
              className={`${
                message.sender === "user" ? "bg-blue-500" : "bg-gray-500"
              } text-white px-4 py-2 rounded-lg mb-2 `}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          );
        }
      };

  return (
    <div id="DataQueryComponent" className="flex flex-col justify-center h-screen w-screen">
      <div className="flex flex-col flex-grow overflow-y-auto max-h-[calc(100vh-300px)] px-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-5`}>
            {renderMessageContent(message)}
            {/* <div
                className={`${
                    message.sender === "user" ? "bg-blue-500" : "bg-gray-500"
                } text-white px-4 py-2 rounded-lg mb-2 `}
                dangerouslySetInnerHTML={{ __html: message.text }}
            /> */}

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

