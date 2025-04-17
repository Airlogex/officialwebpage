import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChevronDownIcon,
  TruckIcon
} from '@heroicons/react/24/outline';
import Services from './Services';
import TestimonialSlider from './TestimonialSlider';
import About from './About';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="text-[#0a192f]">
      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[#0a192f] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/src/assets/world-map.svg" alt="World Map" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/src/assets/airplane.svg" alt="Airplane" className="w-full h-full object-cover" />
        </div>
        <motion.h1 className="text-4xl sm:text-6xl font-bold z-10" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          {t('welcome')}
        </motion.h1>
        <motion.p className="mt-4 text-lg z-10" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          {t('subtitle')}
        </motion.p>
        <motion.div className="z-10 mt-6" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
          <a href="/trackorder">
            <button className="bg-[#ff0000] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition">
              Get Started
            </button>
          </a>
        </motion.div>
        <motion.div className="mt-10 z-10" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDownIcon className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>

      {/* ✅ Services Section (Now from separate file) */}
      <Services />

      {/* Features Section */}
      <section className="bg-[#0a192f] text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            Icon: GlobeAltIcon,
            title: "Global Coverage",
            desc: "Delivering to over 200 countries worldwide..."
          }, {
            Icon: ShieldCheckIcon,
            title: "Secure Shipping",
            desc: "Comprehensive insurance up to $100,000..."
          }, {
            Icon: ClockIcon,
            title: "24/7 Support",
            desc: "Round-the-clock customer service..."
          }].map(({ Icon, title, desc }, i) => (
            <div key={i} className="bg-[#1f2937] rounded-xl p-6">
              <Icon className="w-8 h-8 text-[#e11d48] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-transparent py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <TestimonialSlider />
      </section>

      {/* Stats Section */}
      <section className="bg-[#0a192f] py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[["15+", "Years of Experience"], ["1M+", "Packages Delivered"], ["200+", "Countries Served"], ["99%", "Customer Satisfaction"]].map(([stat, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-[#e11d48] p-0">{stat}</h3>
              <p className="mt-2 text-white">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <About/>

      {/* CTA Section */}
      <section className="bg-[#0a192f] text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
        <p className="mb-6 text-gray-300">Get started with AirLogex today and experience hassle-free shipping</p>
        <button className="bg-[#ff0000] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition">Contact Us Now</button>
      </section>
    </div>
  );
};

export default Home;
