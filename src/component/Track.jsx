import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import FoundData from "./FoundData";
import { CheckCircleIcon, ClockIcon, MapPinIcon, TruckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Track = () => {
  const [ismobile, setismobile] = useState(window.innerWidth <= 768);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [isloading, setisLoading] = useState(false);

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
      status: "completed",
    },
    {
      id: 2,
      label: "Shipped",
      color: "#2196f3",
      icon: <TruckIcon className="h-6 w-6" />,
      details: "Your order is on the way and is currently being shipped from the warehouse.",
      status: "in progress",
    },
    {
      id: 3,
      label: "Out for Delivery",
      color: "#ff9800",
      icon: <ClockIcon className="h-6 w-6" />,
      details: "The delivery driver has picked up your package and will be delivering it shortly.",
      status: "not stated",
    },
    {
      id: 4,
      label: "Delivered",
      color: "#f44336",
      icon: <MapPinIcon className="h-6 w-6" />,
      details: "Your package has been successfully delivered. Thank you for your order!",
      status: "not started",
    },
  ];

  const fetchTrackingDetails = (trackingId) => {
    return trackingDatabase[trackingId] || null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackingNumber.length > 0 && setisLoading(true);
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
      trackingNumber.length !== 0 && setTrackingData(fetchTrackingDetails(trackingNumber));
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isloading]);

  const handleReset = () => {
    setTrackingData(null);
    setTrackingNumber("");
  };

  return (
    <div className="tracking-page items-center justify-center h-max py-4 mt-[5rem]">
      <motion.div className=" justify-center items-center flex flex-col w-[95%] md:w-[50rem] m-auto gap-2 px-5 py-[5rem] bg-white/40 border border-white">
        <motion.p
          className=" font-extrabold text-3xl mb-4"
          initial={{ width: "1px", overflow: "hidden" }}
          animate={{ width: "max-content" }}
          transition={{ duration: 0.9 }}
        >
          Track shipping
        </motion.p>
        <input
          type="text"
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="border w-full p-2 rounded-sm shadow-inner border-white bg-neutral-100 placeholder:font-mono"
          placeholder="e.g AIR-1200065656"
        />
        <button onClick={handleSubmit} className="bg-red-700 text-white p-2 w-full rounded-sm">
          Track order
        </button>
        <div className=" flex justify-center items-center">
          {isloading ? (
            <div>
              <div className=" rounded-full h-[30px] w-[30px] border-4 border-l-red-600 border-neutral-400 animate-spin"></div>
              <p>please wait</p>
            </div>
          ) : trackingData ? (
            <div className="mt-10">
              <p className="mb-10">Package: {trackingData?.id}</p>
              <div className="flex gap-5 flex-col md:flex-row">
                {steps.map((step) => (
                  <div className=" flex items-center gap-5 flex-row md:flex-col relative">
                    <div
                      className=" justify-center flex items-center rounded-full min-h-[40px] w-[40px]"
                      style={{ backgroundColor: `${step.color}` }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className=" md:text-center font-bold">{step.label}</span>
                      <div className=" bg-white/50 text-xs p-3 w-[100%] md:h-[100px] border border-white flex flex-col gap-2 md:gap-0">
                        <span>{step.details}</span>
                        <span className="bg-green-300 p-2 md:absolute md:-bottom-4 w-full md:w-[80%] left-[18px] md:text-center md:rounded-2xl shadow-lg ">
                          {step.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex justify-between">
                <div>
                  <p>
                    <strong className="font-black font-mono">name:</strong> chukwuemeka
                  </p>
                  <p className="">
                    <strong className="font-black font-mono">address:</strong> machester road, uk
                  </p>
                  <p className="">
                    <strong className="font-black font-mono">email: </strong> chukwuemekacodev@gmail.com
                  </p>
                  <p className="">
                    <strong className="font-black font-mono">mobile:</strong> +2349039124772
                  </p>
                </div>

                <div className="flex flex-col items-baseline justify-baseline">
                  <span className="font-black"> estimated time of arrival</span>
                  <span className="font-mono">10-05-2025 10:00am</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className=" font-mono text-sm">
                NB: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error officiis nulla odit veritatis aliquid accusamus amet
                doloribus sed adipisci maxime, dolore perferendis, tempore consectetur laudantium quidem iure? Omnis, nisi?
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Track;
