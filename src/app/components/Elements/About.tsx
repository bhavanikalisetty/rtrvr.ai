import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import './About.css';

export default function About() {
  return (
    <div className="about-container px-4 py-8 mx-auto max-w-screen-lg h-screen">
      <div className="header-container">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Meet the Team
        </h3>
      </div>

      <div className="team-grid">
        {/* Arjun Chintapalli */}
        <div className="team-member">
          <img 
            src="arjun.png" 
            alt="Arjun Chintapalli"
            className="team-img" 
          />
          <div className="team-info">
            <h4 className="text-lg font-medium text-white">Arjun Chintapalli</h4>
            <div className="team-contact"> 
              <a href="mailto:rjchint@gmail.com" className="hover:text-white">
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/arjun-chintapalli/"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bhavani Kalisetty */}
        <div className="team-member">
          <img 
            src="bhavani.png" 
            alt="Bhavani Kalisetty"
            className="team-img" 
          />
          <div className="team-info">
            <h4 className="text-lg font-medium text-white">Bhavani Kalisetty</h4>
            <div className="team-contact">
              <a href="mailto:bhavanikalisetty@gmail.com" className="hover:text-white">
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavani-kalisetty/"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
