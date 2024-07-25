import React, { useState } from 'react';
import Form from "../Form";
import './DataMarketPlaceComponent.css';

const DataMarketPlaceComponent = () => {
  const [isConsumer, setIsConsumer] = useState<boolean | null>(null);

  return (
    <div className="data-marketplace min-h-screen">
      <p className="description">
        Your go-to source for alternative data sets. We curate datasets from data providers across consumer, geospatial intelligence, and more.
      </p>

      {isConsumer === null ? (
        <div className="user-type-selection min-h-screen">
          <p className="question">Are you a ...?</p>
          <div className="buttons">
            <button onClick={() => setIsConsumer(false)}>Data Service Provider</button>
            <button onClick={() => setIsConsumer(true)}>Data Consumer</button>
          </div>
        </div>
      ) : (
        <Form isConsumer={isConsumer} />
      )}
    </div>
  );
};

export default DataMarketPlaceComponent;