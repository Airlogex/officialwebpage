import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "AirLogex has consistently delivered our packages on time and with care.",
    author: "John Smith",
    position: "CEO",
  },
  {
    text: "The best shipping service we've worked with. Highly recommended!",
    author: "Sarah Johnson",
    position: "Manager",
  },
  {
    text: "Exceptional service and reliable tracking system.",
    author: "Michael Brown",
    position: "Operations Director",
  },
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
    <div className="md:w-[60%] justify-center items-center z-30 relative">
      <h2 className="text-3xl font-extrabold text-center mb-12 relative z-30 text-[#0b1b37]">What Our Clients Say</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:w-[70%] m-auto bg-[#f4f4f4]/90 border border-white p-20 shadow-2xl"
        >
          <p id="testimonials-current-text-85">"{testimonials[current].text}"</p>
          <div className="text-xl font-extrabold mt-8 text-[#1b4617] font-mono text-shadow">
            {testimonials[current].author}
            <span className=" font-sans" id="testimonials-current-position-86">
              {" "}
              - {testimonials[current].position}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot shadow ${index === current ? "bg-[#bc0a10]" : "bg-neutral-700"}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
