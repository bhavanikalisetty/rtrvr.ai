import React from 'react';
import './Team.css';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const teamMembers = [
  {
    imgSrc: '/arjun.png', // Replace with actual image paths
    name: 'Arjun Chintapalli',
    email: 'rjchint@gmail.com',
    linkedin: 'https://www.linkedin.com/in/arjun-chintapalli/',
  },
  {
    imgSrc: '/bhavani.png',
    name: 'Bhavani Kalisetty',
    email: 'bhavanikalisetty@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bhavani-kalisetty/',
  },
];

const Team: React.FC = () => {
  return (
    <div className="bg-gray-800 py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Meet Our Team
        </h2>
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out team-member-card">
              <div className="relative h-64"> {/* Container for image and overlay */}
                <Image
                  className="w-full h-full object-cover"
                  src={member.imgSrc}
                  alt={member.name}
                  width={200}
                  height={200}
                />
                {/* Optional: Add a semi-transparent overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="flex items-center space-x-4 text-2xl"> {/* Increase icon size */}
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-blue-500"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;