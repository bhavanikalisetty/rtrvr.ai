import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-sm"> 
      <div className="mx-auto flex flex-col sm:flex-row justify-between items-center max-w-screen-xl">
        <div>
          Copyright © {new Date().getFullYear()} rtrvr.ai Inc. All rights reserved.
        </div>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="https://x.com/rtrvrai" target="_blank" rel="noopener noreferrer" className="hover:text-white"> 
            X (fka. Twitter) 
          </a>
          <a href="https://www.linkedin.com/company/rtrvr-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:support@rtrvr.ai" className="hover:text-white"> 
            Support 
          </a>
          {/** Bhavani TO_DO: update terms and privacy later */}
          <a href="/" className="hover:text-white">
            Terms
          </a>
          <a href="/" className="hover:text-white">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;