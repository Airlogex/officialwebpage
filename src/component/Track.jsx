import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import FoundData from "./FoundData";
import { CheckCircleIcon, ClockIcon, MapPinIcon, TruckIcon, ArrowLeftIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
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

  const shorten = (text) => {
    if (text.length > 11) {
      return text.substring(0, 20) + "...";
    }
    return text;
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
              <p className="mb-10">
                {t("package_label")} {trackingData?.id}
              </p>
              <div className="flex gap-5 flex-col md:flex-row">
                {steps.map((step) => (
                  <div key={step.id} className=" flex items-center gap-5 flex-row md:flex-col relative">
                    <div
                      className=" justify-center flex items-center rounded-full min-h-[40px] w-[40px]"
                      style={{ backgroundColor: `${step.color}` }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex flex-col w-full">
                      <span className=" md:text-center font-bold">{shorten(step.label)}</span>
                      <div className=" bg-white/50 text-xs p-3 w-full md:h-[100px] border border-white flex flex-col gap-2 md:gap-0">
                        <span>{step.details}</span>
                        <span className="bg-green-300 p-2 md:absolute md:-bottom-4 w-full md:w-[80%] left-[18px] md:text-center md:rounded-2xl shadow-lg ">
                          {step.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-[5rem]">
                {/* For small screens: Flex rows */}
                <div className="md:hidden space-y-4">
                  <div className="flex justify-between ">
                    <span className="font-mono font-black">{t("user_name_label")}</span>
                    <span>{trackingData?.name}</span>
                  </div>
                  <div className="flex justify-between ">
                    <span className="font-mono font-black">{t("user_address_label")}</span>
                    <span>{trackingData?.location}</span>
                  </div>
                  <div className="flex justify-between ">
                    <span className="font-mono font-black">{t("user_email_label")}</span>
                    <span>{trackingData?.email}</span>
                  </div>
                  <div className="flex justify-between ">
                    <span className="font-mono font-black">{t("user_mobile_label")}</span>
                    <span>{trackingData?.mobile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono font-black">{shorten(t("eta_label"))}</span>
                    <span className="font-mono">{trackingData?.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Table view for medium and larger screens */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="min-w-full table-auto border border-gray-300">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-4 text-sm text-white py-2 text-left font-black font-mono border border-gray-300">
                          {t("user_name_label")}
                        </th>
                        <th className="px-4 text-sm text-white py-2 text-left font-black font-mono border border-gray-300">
                          {t("user_address_label")}
                        </th>
                        <th className="px-4 text-sm text-white py-2 text-left font-black font-mono border border-gray-300">
                          {t("user_email_label")}
                        </th>
                        <th className="px-4 text-sm text-white py-2 text-left font-black font-mono border border-gray-300">
                          {t("user_mobile_label")}
                        </th>
                        <th className="px-4 text-sm text-white py-2 text-left font-black font-mono border border-gray-300">
                          {shorten(t("eta_label"))}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100">
                        <td className="px-3 text-center text-sm py-2 border border-gray-500">{trackingData?.name}</td>
                        <td className="px-3 text-center text-sm py-2 border border-gray-500">{trackingData?.location}</td>
                        <td className="px-3 text-center text-sm py-2 border border-gray-500">{trackingData?.email}</td>
                        <td className="px-3 text-center text-sm py-2 border border-gray-500">{trackingData?.mobile}</td>
                        <td className="px-3 text-center text-sm py-2 border border-gray-500 font-mono">{trackingData?.estimatedDelivery}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 flex gap-4 justify-end">
                <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-sm shadow hover:bg-red-700 transition duration-200">
                  <MapPinIcon className="w-5 h-5" />
                  {t("live_map_button")}
                </button>
                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm shadow hover:bg-green-700 transition duration-200">
                  <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                  {t("chat_courier_button")}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className=" font-mono text-sm">{t("note_label")}</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Track;
