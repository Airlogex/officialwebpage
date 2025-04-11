import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PaperAirplaneIcon, 
  TruckIcon, 
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChevronDownIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import TestimonialSlider from './TestimonialSlider';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <motion.div 
        id="home"
        className="hero parallax-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="parallax-background">
          <img src="/src/assets/world-map.svg" alt="World Map" className="world-map" />
        </div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('welcome')}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="cta-button">Get Started</button>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDownIcon className="w-8 h-8 mt-8" />
        </motion.div>
      </motion.div>

      <div className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <PaperAirplaneIcon className="service-icon" />
            <h3>{t('airFreight')}</h3>
            <p>Premium air freight services with global reach. We offer temperature-controlled shipping, hazmat handling, and express air cargo solutions with real-time tracking.</p>
            <ul className="service-features">
              <li>Next-flight-out options</li>
              <li>Temperature-sensitive cargo handling</li>
              <li>Door-to-door service</li>
            </ul>
          </div>
          <div className="service-card">
            <TruckIcon className="service-icon" />
            <h3>{t('groundShipping')}</h3>
            <p>Comprehensive ground transportation network covering major routes with dedicated fleet and specialized handling.</p>
            <ul className="service-features">
              <li>Full truckload (FTL) services</li>
              <li>Less than truckload (LTL) options</li>
              <li>Cross-border transportation</li>
            </ul>
          </div>
          <div className="service-card">
            <BoltIcon className="service-icon" />
            <h3>{t('expressDelivery')}</h3>
            <p>Ultra-fast delivery solutions for time-critical shipments with guaranteed delivery windows.</p>
            <ul className="service-features">
              <li>Same-day delivery services</li>
              <li>Next-day guaranteed delivery</li>
              <li>Priority handling & routing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="features">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <GlobeAltIcon className="feature-icon" />
            <h3>Global Coverage</h3>
            <p>Delivering to over 200 countries worldwide with local expertise in every major market. Our extensive network ensures seamless international shipping with customs clearance support.</p>
          </div>
          <div className="feature-card">
            <ShieldCheckIcon className="feature-icon" />
            <h3>Secure Shipping</h3>
            <p>Comprehensive insurance coverage up to $100,000 per shipment. Advanced tracking systems and secure handling protocols protect your valuable items throughout their journey.</p>
          </div>
          <div className="feature-card">
            <ClockIcon className="feature-icon" />
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer service with multilingual support team. Dedicated account managers for business clients and real-time problem resolution.</p>
          </div>
        </div>
      </div>

      <div className="testimonials" id="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <TestimonialSlider />
      </div>

      <div className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Packages Delivered</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-item">
            <h3>99%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="about-section" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="section-title">About AirLogex</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>Founded in 2008, AirLogex has emerged as a leading global logistics provider, specializing in air freight and express courier services. With over 15 years of industry experience, we've built a robust network spanning 200+ countries, serving businesses and individuals with reliable, efficient shipping solutions.</p>
                <p>Our state-of-the-art facilities and dedicated team of professionals ensure that every package is handled with utmost care and delivered with precision. We pride ourselves on combining cutting-edge technology with personalized service to meet the diverse needs of our global clientele.</p>
                <div className="about-features">
                  <div className="feature">
                    <div className="feature-icon-wrapper">
                      <TruckIcon className="feature-icon" />
                    </div>
                    <h4>Modern Fleet</h4>
                    <p>Advanced vehicles equipped with GPS tracking</p>
                  </div>
                  <div className="feature">
                    <div className="feature-icon-wrapper">
                      <ShieldCheckIcon className="feature-icon" />
                    </div>
                    <h4>Secure Handling</h4>
                    <p>State-of-the-art security protocols</p>
                  </div>
                </div>
              </div>
              <div className="about-images">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Air freight operation" className="about-image top" />
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Warehouse operations" className="about-image bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Ship?</h2>
        <p>Get started with AirLogex today and experience hassle-free shipping</p>
        <button className="cta-button">Contact Us Now</button>
      </div>
    </div>
  );
};

export default Home;