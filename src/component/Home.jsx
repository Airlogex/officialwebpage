import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GlobeAltIcon, ShieldCheckIcon, ClockIcon, ChevronDownIcon, TruckIcon } from "@heroicons/react/24/outline";
import Services from "./Services";
import TestimonialSlider from "./TestimonialSlider";
import About from "./About";
import ImageSlider from "./ImageSlider";

const Home = () => {
  const { t } = useTranslation();
  const [isActive, setisActive] = useState(false);
  const ourWork = [
    { name: "shipping", image: "../../public/images/airplane1.PNG" },
    { name: "deliver", image: "../../public/images/ship1.JPG" },
    { name: "pickups", image: "../../public/images/airplane1.PNG" },
  ];

  return (
    <div className="text-[#0a192f]">
      {/* Hero Section */}
      <motion.div
        className="bg-no-repeat overflow-x-hidden bg-center bg-cover relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[#0a192f] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ backgroundImage: "url(../../images/hero.JPG" }}
        id="home"
      >
        <div className=" absolute bg-black/70 inset-0"></div>
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t("welcome")}
        </motion.h1>
        <motion.p className="mt-4 text-lg z-10" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          {t("subtitle")}
        </motion.p>
        <motion.div className="z-10 mt-6" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
          <a href="/track">
            <button className="bg-[#ff0000] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition">Get Started</button>
          </a>
        </motion.div>
        <motion.div className="mt-10 z-10" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDownIcon className="w-8 h-8 text-white" />
        </motion.div>

        {/* <div className="relative z-20 flex gap-5 overflow-x-auto">
          {ourWork.map((work) => (
            <motion.div
              className="bg-white/70 rounded-2xl border w-[250px] overflow-hidden relative"
              initial={{ height: "10px" }}
              animate={{ height: "250px" }}
              transition={{ duration: 1 }}
            >
              <img src={work.image} alt={work.name} className=" object-fill" />
              <div className="bg-white absolute -bottom-30  w-full rounded-ss-xl hover:bottom-10 h-[50%] duration-500 ">
                <span className="text-red-400 text-2xl">{work.name}</span>
              </div>
            </motion.div>
          ))}
        </div> */}
      </motion.div>

      {/* ✅ Services Section (Now from separate file) */}
      <Services />

      {/* <ImageSlider /> */}

      {/* Features Section */}
      <section className="bg-[#0a192f] text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              Icon: GlobeAltIcon,
              title: "Global Coverage",
              desc: "Delivering to over 200 countries worldwide...",
            },
            {
              Icon: ShieldCheckIcon,
              title: "Secure Shipping",
              desc: "Comprehensive insurance up to $100,000...",
            },
            {
              Icon: ClockIcon,
              title: "24/7 Support",
              desc: "Round-the-clock customer service...",
            },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} className="bg-[#1f2937] rounded-xl p-6">
              <Icon className="w-8 h-8 text-[#e1b31d] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 font-mono">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#e09 c1e4a] py-16 px-4 relative overflow-hidden" id="testimonials">
        <TestimonialSlider />
        {/* <div className="bg-black/30 absolute inset-0 z-20"></div> */}
        <img src="../../images/airplane3.PNG" alt="airplaine1" className="hidden md:block absolute top-0 right-0  md:h-[800px]  z-10" />
      </section>

      {/* Stats Section */}
      <section className="bg-[#721414] py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            ["15+", "Years of Experience"],
            ["1M+", "Packages Delivered"],
            ["200+", "Countries Served"],
            ["99%", "Customer Satisfaction"],
          ].map(([stat, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-[#fff7f9] p-0">{stat}</h3>
              <p className="mt-2 text-white">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* CTA Section */}
      <section
        className=" text-white py-16 text-center px-4 h-[600px] bg-no-repeat bg-center bg-cover relative justify-center items-center"
        style={{ backgroundImage: "url(../../images/readyToShip.JPG" }}
      >
        <div className=" relative z-20 justify-center, items-center h-full ">
          <div className="h-full w-full">
            <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
            <p className="mb-6 text-gray-300">Get started with AirLogex today and experience hassle-free shipping</p>
            <a href="/contact" className="bg-[#ff0000] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition">
              Contact Us Now
            </a>
          </div>
        </div>
        <div className=" absolute bg-black/60 inset-0 z-10"></div>
      </section>
    </div>
  );
};

export default Home;
