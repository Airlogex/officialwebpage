import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBoxOpen, FaShippingFast, FaHome, FaCheckCircle } from "react-icons/fa";

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);

  // Fake database for demo
  const trackingDatabase = {
    12345: { id: 1, status: "In Transit", location: "Lagos, Nigeria", estimatedDelivery: "April 10, 2025", step: 2 },
    67890: { id: 2, status: "Delivered", location: "Abuja, Nigeria", estimatedDelivery: "April 2, 2025", step: 3 },
  };

  const steps = [
    { id: 1, label: "Order Placed", icon: <FaBoxOpen size={24} />, color: "#f39c12" },
    { id: 2, label: "In Transit", icon: <FaShippingFast size={24} />, color: "#3498db" },
    { id: 3, label: "Out for Delivery", icon: <FaHome size={24} />, color: "#2ecc71" },
    { id: 4, label: "Delivered", icon: <FaCheckCircle size={24} />, color: "#27ae60" },
  ];

  const fetchTrackingDetails = (trackingId) => {
    return trackingDatabase[trackingId] || null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrackingData(fetchTrackingDetails(trackingNumber));
  };

  return (
    <div className="tracking-page" style={{ textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {/* Tracking Form */}
        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: trackingData === null ? "100%" : "50%" }}
        >
          <div className="tracking-form">
            <h2>Track Your Shipment</h2>
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter tracking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  required
                  style={{ padding: "10px", width: "100%", borderRadius: "8px", border: "1px solid #ccc" }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Track Package
              </button>
            </form>
          </div>
        </motion.div>

        {/* Tracking Details */}
        {trackingData && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "3px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "500px",
              textAlign: "left",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Tracking Details</h3>
            <p>
              <strong>Status:</strong> {trackingData.status}
            </p>
            <p>
              <strong>Current Location:</strong> {trackingData.location}
            </p>
            <p>
              <strong>Estimated Delivery:</strong> {trackingData.estimatedDelivery}
            </p>

            {/* Progress Bar */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", position: "relative" }}>
              {/* Line between steps */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10%",
                  width: "80%",
                  height: "5px",
                  backgroundColor: "#ddd",
                  zIndex: 0,
                }}
              />
              {steps.map((step, index) => (
                <div key={step.id} style={{ textAlign: "center", zIndex: 1 }}>
                  <motion.div
                    animate={{
                      backgroundColor: trackingData.step >= step.id ? step.color : "#ddd",
                      scale: trackingData.step >= step.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "auto",
                      color: "#fff",
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <p style={{ fontSize: "12px", marginTop: "5px", color: trackingData.step >= step.id ? step.color : "#888" }}>{step.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Track;
