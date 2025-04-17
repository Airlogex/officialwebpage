
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "AirLogex has consistently delivered our packages on time and with care.",
    author: "John Smith",
    position: "CEO"
  },
  {
    text: "The best shipping service we've worked with. Highly recommended!",
    author: "Sarah Johnson",
    position: "Manager"
  },
  {
    text: "Exceptional service and reliable tracking system.",
    author: "Michael Brown",
    position: "Operations Director"
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="testimonial-card"
        >
          <p id="testimonials-current-text-85">"{testimonials[current].text}"</p>
          <div className="testimonial-author">
            {testimonials[current].author}
            <span className="testimonial-position" id="testimonials-current-position-86"> - {testimonials[current].position}</span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
