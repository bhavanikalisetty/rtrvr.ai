// page.tsx

"use client";

import React, { useEffect, useRef, useState, FormEvent } from "react";
import Header from "@/components/Header";
import Box from "@/components/Elements/Box";
import { useChat } from "ai/react";
import { AiFillGithub } from "react-icons/ai";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import ResponsiveIframe from './components/Elements/ResponsiveIframe';

const Page: React.FC = () => {
  const [gotMessages, setGotMessages] = useState(false);
  const [context, setContext] = useState<string[] | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: async () => {
      setGotMessages(true);
    },
  });

  const prevMessagesLengthRef = useRef(messages.length);

  const handleMessageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setContext(null);
    setGotMessages(false);
  };

  useEffect(() => {
    const getContext = async () => {
      const response = await fetch("/api/context", {
        method: "POST",
        body: JSON.stringify({
          messages,
        }),
      });
      const { context } = await response.json();
      setContext(context.map((c: any) => c.id));
    };
    if (gotMessages && messages.length >= prevMessagesLengthRef.current) {
      getContext();
    }

    prevMessagesLengthRef.current = messages.length;
  }, [messages, gotMessages]);

  const [activeBox, setActiveBox] = useState<null | 'box1' | 'box2'>(null);

  function handleBoxClick(boxId: 'box1' | 'box2') {
    setActiveBox(activeBox === boxId ? null : boxId); // Toggle or reset
  }

  return (
    <div className="flex flex-col justify-between bg-gray-800 p-2 mx-auto w-screen">
      <Header className="my-5"/>

      <button
        onClick={() => {
          window.open(
            "https://github.com/arjunchint/rtrvr.ai",
            "_blank"
          );
        }}
        className="fixed right-12 top-4 md:right-12 md:top-6 text-xl text-white github-button"
      >
        <AiFillGithub/>
      </button>

      {/* <div className="flex w-1/2 flex-grow overflow-hidden relative flex-col md:flex-row justify-center mx-auto gap-4">
        <Box id="box1" activeBox={activeBox} handleBoxClick={handleBoxClick} href="/build-datasets" className="mb-4 md:mb-0" />
        <Box id="box2" activeBox={activeBox} handleBoxClick={handleBoxClick} href="/explore-data-marketplace" />
      </div> */}
      <div className="about-container px-4 py-8 mx-auto max-w-screen-lg min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Unlock the Web's Data with Rtrvr.ai
      </h2>

      <p className="mb-4 text-gray-300">
        Tired of the headaches that come with web scraping and structured data
        extraction? Rtrvr.ai is your Universal Data Agent, powered by LLM Deep Search, designed to
        seamlessly gather and structure information from any website.
      </p>

      {/* Embed Your First Loom Video (e.g., Product Demo) */}
      <div className="loom-video-container mb-6">
        {/* First Loom Video */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0}}>
          {/* <iframe 
            src="https://www.loom.com/embed/bcd45fda89e54f378bfa2bd1e5924d05?sid=140d8055-f23e-4ae0-9148-a508a2e8943c" 
            frameBorder="0" 

            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe> */}
          <ResponsiveIframe
            src="https://www.loom.com/embed/bcd45fda89e54f378bfa2bd1e5924d05?sid=140d8055-f23e-4ae0-9148-a508a2e8943c" 
            title="Rtrvr.ai Custom Data Workflow Demo" // Add a descriptive title for accessibility 
        />
        </div>
      </div>
      

      <h3 className="text-xl font-semibold mb-2 text-white">
        Transforming Data Extraction
      </h3>

      <p className="mb-4 text-gray-300">
        Rtrvr.ai's Chrome extension empowers you to effortlessly extract
        structured data from websites and integrate it seamlessly into your
        workflows. Whether you need to gather sales leads from LinkedIn,
        extract financial data, or build custom data pipelines, Rtrvr.ai
        makes it simple and efficient.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-white">
        Powering the Future of Web Navigation
      </h3>


      {/* You can optionally add a section here about your roadmap: */}
      {/* 
      <h3 className="text-xl font-semibold mb-2 text-white">
        On the Horizon 
      </h3>

      <p className="mb-4 text-gray-300">
        We're constantly innovating! Our roadmap includes exciting features 
        like automated workflow planning and reinforcement learning to further 
        enhance agent performance.
      </p>
      */}

      {/* Embed Your Second Loom Video (e.g., How It Works) */}
      <div className="loom-video-container mb-6">
        {/* Second Loom Video */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          {/* <iframe 
            src="https://www.loom.com/embed/b14cd5dfeb4548bf8ba87b8c87787eed?sid=cf4c4b38-40d4-475e-8be5-1512304b0618"
            frameBorder="0" 
            
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe> */}
          <p className="mb-4 text-gray-300"></p>
          <ResponsiveIframe 
            src="https://www.loom.com/embed/b14cd5dfeb4548bf8ba87b8c87787eed?sid=cf4c4b38-40d4-475e-8be5-1512304b0618" 
            title="Rtrvr.ai Web Navigation Demo" // Add a descriptive title for accessibility 
        />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Page;
