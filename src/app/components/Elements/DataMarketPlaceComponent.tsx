import React, { useState } from 'react';
import Form from "./Form";
import './DataMarketPlaceComponent.css';

const DataMarketPlaceComponent = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  return (
    <div id="DataMarketPlaceComponent" className="flex flex-col items-center justify-center min-h-screen w-full mr-4 mx-5 lg:mx-0">
      <p className="text-white text-lg mb-4">
        Your go-to source for alternative data sets. We curate datasets from data providers across consumer, geospatial intelligence, and more.
      </p>
      
      {!selectedButton && (
        <div className="text-description flex flex-col items-center min-h-screen">
            <p className="text-white text-lg mb-4">
                Are you a ...?
            </p>
            <div className="flex justify-between gap-8">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => handleButtonClick('Data Service Provider')}>
                Data Service Provider
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => handleButtonClick('Data Consumer')}>
                Data Consumer
            </button>
            </div>
        </div>
      )}
      {selectedButton && <Form buttonId={selectedButton} />}
    </div>
  );
};

export default DataMarketPlaceComponent;

// import React, { useState } from 'react';
// import Form from "./Form";
// import './DataMarketPlaceComponent.css';

// const DataMarketPlaceComponent = () => {
//   const [selectedButton, setSelectedButton] = useState<string | null>(null);

//   const handleButtonClick = (buttonId: string) => {
//     setSelectedButton(buttonId);
//   };

//   return (
//     <div id="DataMarketPlaceComponent" className="flex flex-col items-center justify-center w-full mr-4 mx-5 lg:mx-0 bg-gray-800">
//       <p className="text-description text-white text-lg mb-4">
//         Your go-to source for alternative data sets. We curate datasets from data providers across consumer, geospatial intelligence, and more.
//       </p>
      
//       {!selectedButton && (
//         <div className="flex flex-col items-center min-h-screen">
//             <p className="text-white text-xl mb-6">Are you a ...?</p>
//             <div className="flex justify-center gap-12">
//               <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => handleButtonClick('Data Service Provider')}>
//                 Data Service Provider
//               </button>
//               <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => handleButtonClick('Data Consumer')}>
//                 Data Consumer
//               </button>
//             </div>
//         </div>
//       )}
//       {selectedButton && <Form buttonId={selectedButton} />}
//     </div>
//   );
// };

// export default DataMarketPlaceComponent;