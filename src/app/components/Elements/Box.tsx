import React from "react";
import Link from "next/link";


type BoxProps = {
  id: 'box1' | 'box2';
  activeBox: null | 'box1' | 'box2';
  handleBoxClick: (boxId: 'box1' | 'box2') => void;
  href: string;
};

const Box: React.FC<BoxProps> = ({ id, activeBox, handleBoxClick, href }) => {
  return (
    <Link legacyBehavior href={href}>
      <div className={`absolute transform ${activeBox === id ? 'translate-x-0' : 'translate-x-full'} 
        transition-transform duration-500 ease-in-out w-1/4 h-1/5 bg-gray-700 overflow-y-auto lg:static lg:translate-x-0 lg:mx-2 
        rounded-lg cursor-pointer flex items-center justify-center  hover:bg-gray-600 ${ activeBox === id ? "bg-blue-500" : "bg-gray-700"}`}
      onClick={() => handleBoxClick(id)}
      >
          <a
            onClick={() => handleBoxClick(id)}
          >
            <p className="text-white text-xl text-center">
              {id === 'box1' ? 'Construct your own dataset' : 'Explore our data marketplace'}
            </p>
          </a>
          </div>
    </Link>
  );
};

export default Box;