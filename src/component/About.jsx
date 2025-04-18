import { ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";
import React from "react";

function About() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About AirLogex</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2008, AirLogex has been a pioneer in the air freight and express courier industry. With a passion for
            efficiency and customer satisfaction, we specialize in providing fast, reliable, and secure delivery services
            both globally and domestically.
          </p>
          <p className="text-gray-700 mb-6">
            Our commitment to excellence drives us to constantly innovate, improving our processes to meet the ever-changing
            needs of the logistics industry. Whether you're sending a small parcel or large freight, AirLogex ensures that
            your shipments reach their destination safely and on time.
          </p>
          <p className="text-gray-700 mb-6">
            We combine cutting-edge technology with world-class customer service to deliver a seamless experience from start
            to finish. Our fleet is equipped with advanced tracking systems, ensuring full visibility of every shipment. In
            addition, our warehouses are optimized for quick handling, efficient sorting, and safe storage.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f8fafc] p-4 rounded-md">
              <TruckIcon className="w-6 h-6 text-[#e11d48] mb-2" />
              <h4 className="font-semibold">Modern Fleet</h4>
              <p className="text-sm">Our fleet consists of state-of-the-art, GPS-tracked vehicles that operate around the clock to provide timely deliveries.</p>
            </div>
            <div className="bg-[#f8fafc] p-4 rounded-md">
              <ShieldCheckIcon className="w-6 h-6 text-[#e11d48] mb-2" />
              <h4 className="font-semibold">Secure Handling</h4>
              <p className="text-sm">We use top-tier security protocols to ensure the safety of every package, from departure to delivery.</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col gap-6">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            className="rounded-lg w-full mb-4"
            alt="Freight"
          />
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c"
            className="rounded-lg w-full"
            alt="Warehouse"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
