import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FoundData from "./FoundData";
import { CheckCircleIcon, ClockIcon, MapPinIcon, TruckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Track = () => {
  const [ismobile, setismobile] = useState(window.innerWidth <= 768);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [isloading, setisLoading] = useState(true);

  const trackingDatabase = {
    12345: {
      id: 1,
      status: "In Transit",
      location: "Lagos, Nigeria",
      estimatedDelivery: "April 10, 2025",
      step: 2,
    },
    67890: {
      id: 2,
      status: "Delivered",
      location: "Abuja, Nigeria",
      estimatedDelivery: "April 2, 2025",
      step: 3,
    },
  };

  const steps = [
    {
      id: 1,
      label: "Order Placed",
      color: "#4caf50",
      icon: <CheckCircleIcon className="h-6 w-6" />,
      details: "Your order has been successfully placed and is being processed by our team.",
    },
    {
      id: 2,
      label: "Shipped",
      color: "#2196f3",
      icon: <TruckIcon className="h-6 w-6" />,
      details: "Your order is on the way and is currently being shipped from the warehouse.",
    },
    {
      id: 3,
      label: "Out for Delivery",
      color: "#ff9800",
      icon: <ClockIcon className="h-6 w-6" />,
      details: "The delivery driver has picked up your package and will be delivering it shortly.",
    },
    {
      id: 4,
      label: "Delivered",
      color: "#f44336",
      icon: <MapPinIcon className="h-6 w-6" />,
      details: "Your package has been successfully delivered. Thank you for your order!",
    },
  ];

  const fetchTrackingDetails = (trackingId) => {
    return trackingDatabase[trackingId] || null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrackingData(fetchTrackingDetails(trackingNumber));
  };

  useEffect(() => {
    const handleResize = () => {
      setismobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run once on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setisLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const handleReset = () => {
    setTrackingData(null);
    setTrackingNumber("");
  };

  return (
    <div className="tracking-page flex flex-col items-center justify-center min-h-screen py-4">
      <div className={`flex ${ismobile ? 'flex-col' : 'flex-row'} items-center justify-center w-full`}>
        {/* Tracking Form */}
        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`w-full ${trackingData === null ? 'md:w-full' : 'md:w-1/2'} flex-grow`}
        >
          <div className="tracking-form p-8 bg-white/30 shadow-lg rounded-lg border border-white">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Track Your Shipment</h2>
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/35"
                  placeholder="Enter tracking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  required
                  id="tracking-number-input"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3 w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                id="track-package-88"
              >
                Track Package
              </button>
            </form>
          </div>
        </motion.div>

        {/* Tracking Info */}
        {trackingData && <FoundData {...{ trackingData, steps, ismobile, onBack: handleReset }} />}
      </div>
    </div>
  );
};

export default Track;
