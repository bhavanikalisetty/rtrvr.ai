import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-200 text-lg">
      <p className="mb-4">
        rtrvr.ai was started with a vision to build a data exchange platform for structured data connecting data source providers and consumers efficiently. <br/> To faciliate customers with effective data generation and analysis we are building a LLM Deep Search enabled workflow engine. 
      </p>
      <p className="mb-4">
        Contact details:
      </p>
      <p className="mb-4">
        Arjun Chintapalli
      </p>
      <div className="flex space-x-4">
        <a href="mailto:rjchint@gmail.com" className="hover:text-white">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.linkedin.com/in/arjun-chintapalli/" className="hover:text-white" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
