import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function FoundData({ trackingData, steps = [], ismobile, onBack }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-full ${ismobile ? 'flex flex-col' : 'flex flex-row'} items-center justify-center py-6`}
      style={{
        background: "rgba(255, 255, 255, 0.85)", // semi-transparent background
        fontFamily: "'Inter', sans-serif",
        borderRadius: "12px",
        border: "1px solid rgba(0, 0, 0, 0.1)", // subtle border
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)", // soft shadow for depth
      }}
    >
      {/* Back Button for Mobile */}
      {ismobile && (
        <div className="w-full mb-4 flex justify-start">
          <button
            onClick={onBack}
            className="bg-none border-none text-blue-600 font-medium text-lg flex items-center cursor-pointer"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
        </div>
      )}

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl font-semibold text-gray-800 mb-6"
      >
        📦 Tracking Details
      </motion.h3>

      {/* Steps Section */}
      <motion.div
        initial="hidden"
        animate="show"
        className={`w-full ${ismobile ? 'flex flex-col' : 'flex flex-row'} items-center justify-center space-y-6 md:space-y-0 md:space-x-6`}
      >
        {steps.map((step) => {
          const isActive = trackingData.step >= step.id;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center space-y-4"
            >
              {/* Circle Icon */}
              <motion.div
                animate={{
                  backgroundColor: isActive ? step.color : "#ccc",
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white border-2"
                style={{
                  borderColor: isActive ? step.color : "#ccc",
                  boxShadow: isActive ? `0 4px 10px ${step.color}33` : "none",
                }}
              >
                {step.icon}
              </motion.div>

              {/* Step Details */}
              <div className="text-center">
                <p className={`text-sm ${isActive ? 'font-semibold text-black' : 'text-gray-500'}`}>
                  {step.label}
                </p>

                <motion.p
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 text-gray-700 p-4 rounded-lg shadow-md mt-2"
                >
                  {isActive ? step.details : "In Progress..."}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Tracking Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full max-w-sm mt-6 px-6 py-4 bg-white shadow-lg rounded-lg"
      >
        <p><strong>Status:</strong> {trackingData.status}</p>
        <p><strong>Current Location:</strong> {trackingData.location}</p>
        <p><strong>Estimated Delivery:</strong> {trackingData.estimatedDelivery}</p>
      </motion.div>
    </motion.div>
  );
}
