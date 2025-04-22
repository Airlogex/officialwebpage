import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a192f] text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="footer-section">
          <h3 className="text-2xl font-bold mb-4 text-white">{t("footer_brand")}</h3>
          <p className="text-gray-400">{t("footer_description")}</p>
        </div>

        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4 text-white">{t("footer_quick_links")}</h3>
          <ul>
            <li><Link to="/" className="text-gray-400 hover:text-red-600 transition duration-300">{t("footer_home")}</Link></li>
            <li><Link to="/track" className="text-gray-400 hover:text-red-600 transition duration-300">{t("footer_track")}</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-red-600 transition duration-300">{t("footer_contact")}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4 text-white">{t("footer_services")}</h3>
          <ul>
            <li className="text-gray-400 hover:text-red-600 transition duration-300">{t("footer_air_freight")}</li>
            <li className="text-gray-400 hover:text-red-600 transition duration-300">{t("footer_ground_shipping")}</li>
            <li className="text-gray-400 hover:text-red-600 transition duration-300">{t("footer_express_delivery")}</li>
            <li className="text-gray-400 hover:text-red-600 transition duration-300">{t("footer_warehousing")}</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-xl text-white font-semibold mb-4">{t("footer_contact_info")}</h3>
          <ul>
            <li className="text-gray-400">{t("footer_email")}</li>
            <li className="text-gray-400">{t("footer_phone")}</li>
            <li className="text-gray-400">{t("footer_address")}</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-400 text-sm">
          {t("footer_copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
