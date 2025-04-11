import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBoxOpen, FaShippingFast, FaHome, FaCheckCircle } from "react-icons/fa";
import FoundData from "./FoundData";

const Track = () => {
  const [ismobile, setismobile] = useState(window.innerWidth > 768 ? false : true);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [isloading, setisLoading] = useState(true)

  // Fake database for demo
  const trackingDatabase = {
    12345: { id: 1, status: "In Transit", location: "Lagos, Nigeria", estimatedDelivery: "April 10, 2025", step: 2 },
    67890: { id: 2, status: "Delivered", location: "Abuja, Nigeria", estimatedDelivery: "April 2, 2025", step: 3 },
  };

  const steps = [
    { id: 1, label: "Order Placed", icon: <FaBoxOpen size={24} />, color: "rgb(84, 232, 15)" },
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

  useEffect(() => {
    const hanglechange = () => {
      if (window.innerWidth > 1014) {
        setismobile(false);
      } else {
        setismobile(true);
      }
    };
    window.addEventListener("resize", hanglechange);
    return () => window.removeEventListener("resize", hanglechange);
  }, []);


  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setisLoading(false)
    },20000)

    
  },[])

  return (
    <div className="tracking-page" style={{ textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: ismobile ? "column-reverse" : "row", alignItems: "center", justifyContent: "center" }}>
        {/* Tracking Form */}
        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: trackingData === null ? "100%" : "50%" }}
        >
          <div className="tracking-form" style={{ height: ismobile && trackingData !== null ? 10 : "100%", overflow:"hidden" }}>
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
        {trackingData && <FoundData {...{ trackingData, steps }} />}
      </div>
    </div>
  );
};

export default Track;
