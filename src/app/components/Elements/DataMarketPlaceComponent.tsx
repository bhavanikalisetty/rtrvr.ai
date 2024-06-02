import React, { useState } from 'react';
import Form from "./Form";

const DataMarketPlaceComponent = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div id="DataMarketPlaceComponent" className="flex flex-col items-center justify-center h-screen w-full mr-4 mx-5 lg:mx-0">
      <p className="text-white text-lg mb-4">
        Your go-to source for alternative data sets. We curate datasets from data providers across consumer, geospatial intelligence, and more.
      </p>
      
      {!selectedButton && (
        <div className="flex flex-col items-center">
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