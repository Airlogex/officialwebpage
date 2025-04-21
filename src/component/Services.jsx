// src/components/Services.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PaperAirplaneIcon, TruckIcon, BoltIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: PaperAirplaneIcon,
    titleKey: 'airFreight',
    description: 'Premium air freight services with global reach.',
    features: ['Next-flight-out options', 'Temperature-sensitive cargo', 'Door-to-door service']
  },
  {
    icon: TruckIcon,
    titleKey: 'groundShipping',
    description: 'Reliable ground transport for all your logistics needs.',
    features: ['Full truckload (FTL)', 'Less than truckload (LTL)', 'Cross-border transport']
  },
  {
    icon: BoltIcon,
    titleKey: 'expressDelivery',
    description: 'Fast and secure delivery for urgent shipments.',
    features: ['Same-day delivery', 'Next-day guaranteed', 'Priority handling']
  }
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-2 sm:px-8 md:px-12 lg:px-20 text-[#0a192f]" id='services'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">Our Services</h2>

        <div className="grid gap-10 md:grid-cols-3 p-[20px]">
          {services.map(({ icon: Icon, titleKey, description, features }, idx) => (
            <div
              key={idx}
              className="bg-[#f9fafb] border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-10 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#fee2e2] rounded-full mb-6">
                <Icon className="w-8 h-8 text-[#e11d48]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t(titleKey)}</h3>
              <p className="text-gray-600 mb-5 px-2">{description}</p>
              <ul className="text-sm text-gray-800 space-y-2 text-left w-full max-w-xs mx-auto">
                {features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#e11d48] rounded-full shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
