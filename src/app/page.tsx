// page.tsx

"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-800 p-2 mx-auto w-screen">
      <Header className="my-5"/>
      <div className="about-container px-4 py-8 mx-auto max-w-screen-lg min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-white">
        The Universal Data Agent: Unlock the Web&apos;s Data with rtrvr.ai
      </h2>

      <p className="mb-4 text-gray-300">
        Tired of the headaches that come with web scraping and structured data
        extraction? rtrvr.ai is your Universal Data Agent, powered by LLM Deep Search, designed to
        seamlessly gather and structure information from any website.
      </p>

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
      {/* Waitlist Signup Form */}
      <div className="google-embed flex flex-col justify-between items-center space-y-20">
        <iframe className="w-full" height="500" src="https://www.youtube.com/embed/_5txWyujnLM?si=LqxIDmI7Kt9X6o3p" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <iframe className="w-full" src="https://docs.google.com/forms/d/e/1FAIpQLSco4RGAbuggFquzrNF2-wThlrAApHZ3vHWhAQvc239GBsdeyw/viewform?embedded=true" width="640" height="911">Loading…</iframe>
        
      </div>
    </div>

    <Footer />
    </div>
  );
};

export default Page;
