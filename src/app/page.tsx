// page.tsx

"use client";

import React from "react";
import Header from "@/components/Header";
import ResponsiveIframe from './components/Elements/ResponsiveIframe';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-800 p-2 mx-auto w-screen">
      <Header className="my-5"/>
      <div className="about-container px-4 py-8 mx-auto max-w-screen-lg min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Unlock the Web&apos;s Data with rtrvr.ai
      </h2>

      <p className="mb-4 text-gray-300">
        Tired of the headaches that come with web scraping and structured data
        extraction? rtrvr.ai is your Universal Data Agent, powered by LLM Deep Search, designed to
        seamlessly gather and structure information from any website.
      </p>

      {/* Embed Your First Loom Video (e.g., Product Demo) */}
      <div className="loom-video-container mb-6">
        {/* First Loom Video */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0}}>
          <ResponsiveIframe
            src="https://www.loom.com/embed/bcd45fda89e54f378bfa2bd1e5924d05?sid=140d8055-f23e-4ae0-9148-a508a2e8943c" 
            title="rtrvr.ai Custom Data Workflow Demo" // Add a descriptive title for accessibility 
        />
        </div>
      </div>
      

      <h3 className="text-xl font-semibold mb-2 text-white">
        Transforming Data Extraction
      </h3>

      <p className="mb-4 text-gray-300">
        rtrvr.ai&apos;s Chrome extension empowers you to effortlessly extract
        structured data from websites and integrate it seamlessly into your
        workflows. Whether you need to gather sales leads from LinkedIn,
        extract financial data, or build custom data pipelines, rtrvr.ai
        makes it simple and efficient.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-white">
        Powering the Future of Web Navigation
      </h3>

      <p className="mb-4 text-gray-300">
        We&apos;re constantly innovating! Our roadmap includes exciting features 
        like advanced workflow planning and reinforcement learning to further 
        enhance agent performance.
      </p>

      {/* Embed Your Second Loom Video (e.g., How It Works) */}
      <div className="loom-video-container mb-6">
        {/* Second Loom Video */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <p className="mb-4 text-gray-300"></p>
          <ResponsiveIframe 
            src="https://www.loom.com/embed/b14cd5dfeb4548bf8ba87b8c87787eed?sid=cf4c4b38-40d4-475e-8be5-1512304b0618" 
            title="rtrvr.ai Web Navigation Demo" // Add a descriptive title for accessibility 
        />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Page;
