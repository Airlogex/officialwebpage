import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GlobeAltIcon, ShieldCheckIcon, ClockIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Services from "./Services";
import TestimonialSlider from "./TestimonialSlider";
import About from "./About";

const Home = () => {
  const { t } = useTranslation();
  const [isActive, setisActive] = useState(false);

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
            <button className="bg-[#ff0000] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition">
              {t("get_started")}
            </button>
          </a>
        </motion.div>
        <motion.div className="mt-10 z-10" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDownIcon className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <Services />

      {/* Features Section */}
      <section className="bg-[#0a192f] text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("why_choose_us")}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              Icon: GlobeAltIcon,
              title: t("global_coverage_title"),
              desc: t("global_coverage_desc"),
            },
            {
              Icon: ShieldCheckIcon,
              title: t("secure_shipping_title"),
              desc: t("secure_shipping_desc"),
            },
            {
              Icon: ClockIcon,
              title: t("support_title"),
              desc: t("support_desc"),
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
        <img src="../../images/airplane3.PNG" alt="airplaine1" className="hidden md:block absolute top-0 right-0  md:h-[800px]  z-10" />
      </section>

      {/* Stats Section */}
      <section className="bg-[#721414] py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            ["15+", t("years_experience")],
            ["1M+", t("packages_delivered")],
            ["200+", t("countries_served")],
            ["99%", t("customer_satisfaction")],
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
            <h2 className="text-3xl font-bold mb-4">{t("ready_to_ship_title")}</h2>
            <p className="mb-6 text-gray-300">{t("ready_to_ship_desc")}</p>
            <a href="/contact" className="bg-[#ff0000] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition">
              {t("contact_us")}
            </a>
          </div>
        </div>
        <div className=" absolute bg-black/60 inset-0 z-10"></div>
      </section>
    </div>
  );
};

export default Home;
