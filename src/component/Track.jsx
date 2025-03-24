
import React, { useState } from 'react';

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking number ${trackingNumber} submitted`);
  };

  return (
    <div className="tracking-form">
      <h2>Track Your Shipment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Track Package
        </button>
      </form>
    </div>
  );
};

export default Track;
