import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import FoundData from "./FoundData";
import { CheckCircleIcon, ClockIcon, MapPinIcon, TruckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const Track = () => {
  const { t } = useTranslation();
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
      name: "John Doe",
      email: "johndoe@gmail.com",
      mobile: "+234 123 4567",
      step: 2,
    },
    67890: {
      id: 2,
      status: "Delivered",
      location: "Abuja, Nigeria",
      estimatedDelivery: "April 2, 2025",
      name: "Jane Smith",
      email: "jane23@gmail.com",
      mobile: "+234 987 6543",
      step: 3,
    },
  };

  const steps = [
    {
      id: 1,
      label: t("order_placed_label"),
      color: "#4caf50",
      icon: <CheckCircleIcon className="h-6 w-6" />,
      details: t("order_placed_details"),
      status: "completed",
    },
    {
      id: 2,
      label: t("shipped_label"),
      color: "#2196f3",
      icon: <TruckIcon className="h-6 w-6" />,
      details: t("shipped_details"),
      status: "in progress",
    },
    {
      id: 3,
      label: t("out_for_delivery_label"),
      color: "#ff9800",
      icon: <ClockIcon className="h-6 w-6" />,
      details: t("out_for_delivery_details"),
      status: "not stated",
    },
    {
      id: 4,
      label: t("delivered_label"),
      color: "#f44336",
      icon: <MapPinIcon className="h-6 w-6" />,
      details: t("delivered_details"),
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
    handleResize();

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
          {t("track_shipping_title")}
        </motion.p>
        <input
          type="text"
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="border w-full p-2 rounded-sm shadow-inner border-white bg-neutral-100 placeholder:font-mono"
          placeholder="e.g AIR-1200065656"
        />
        <button onClick={handleSubmit} className="bg-red-700 text-white p-2 w-full rounded-sm">
          {t("track_order_button")}
        </button>
        <div className=" flex justify-center items-center">
          {isloading ? (
            <div>
              <div className=" rounded-full h-[30px] w-[30px] border-4 border-l-red-600 border-neutral-400 animate-spin"></div>
              <p>{t("loading_message")}</p>
            </div>
          ) : trackingData ? (
            <div className="mt-10">
              <p className="mb-10">{t("package_label")} {trackingData?.id}</p>
              <div className="flex gap-5 flex-col md:flex-row">
                {steps.map((step) => (
                  <div key={step.id} className=" flex items-center gap-5 flex-row md:flex-col relative">
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
                    <strong className="font-black font-mono">{t("user_name_label")}</strong> {trackingData?.name}
                  </p>
                  <p>
                    <strong className="font-black font-mono">{t("user_address_label")}</strong> {trackingData?.location}
                  </p>
                  <p>
                    <strong className="font-black font-mono">{t("user_email_label")}</strong> {trackingData?.email}
                  </p>
                  <p>
                    <strong className="font-black font-mono">{t("user_mobile_label")}</strong> {trackingData?.mobile}
                  </p>
                </div>

                <div className="flex flex-col items-baseline justify-baseline">
                  <span className="font-black">{t("eta_label")}</span>
                  <span className="font-mono">{trackingData?.estimatedDelivery}</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className=" font-mono text-sm">
                {t("note_label")}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Track;
