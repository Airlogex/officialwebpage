import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function FoundData({ trackingData, steps = [] }) {

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "3px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        marginTop: "50px",
        width: "100%",
        maxWidth: "700px",
        height: "400px",
        overflow: "scroll",
        textAlign: "left",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Tracking Details</h3>
      {/* Progress Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBlock: "60px", position: "relative" }}>
        {/* Line between steps */}
        <div
          style={{
            position: "absolute",
            top: "25%",
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
      </div>{" "}
      <p>
        <strong>Status:</strong> {trackingData.status}
      </p>
      <p>
        <strong>Current Location:</strong> {trackingData.location}
      </p>
      <p>
        <strong>Estimated Delivery:</strong> {trackingData.estimatedDelivery}
      </p>
      <p>
        <strong>Status:</strong> {trackingData.status}
      </p>
      <p>
        <strong>Current Location:</strong> {trackingData.location}
      </p>
      <p>
        <strong>Estimated Delivery:</strong> {trackingData.estimatedDelivery}
      </p>
    </motion.div>
  );
}
