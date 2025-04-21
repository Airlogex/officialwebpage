import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismobile, setIsMobile] = useState(window.innerWidth <= 768); // Check mobile view
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "pt", label: "Português" },
    { code: "ru", label: "Русский" },
    { code: "zh", label: "中文" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <nav className="bg-white shadow-md z-50 fixed w-full top-0 left-0">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold text-gray-900 hover:text-red-500 transition-colors duration-300" id="nav-logo">
          AirLogex
        </Link>

        {/* Navbar Links */}
        <div className="hidden lg:flex items-center space-x-8"> {/* Only show on larger screens */}
          <a href="/#home" className="text-gray-800 hover:text-red-500 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-red-100">
            Home
          </a>
          <a href="/#services" className="text-gray-800 hover:text-red-500 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-red-100">
            Services
          </a>
          <a href="/#about" className="text-gray-800 hover:text-red-500 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-red-100">
            About
          </a>
          <a href="/#testimonials" className="text-gray-800 hover:text-red-500 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-red-100">
            Testimonials
          </a>
          <Link to="/track" className="text-gray-800 hover:text-red-500 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-red-100">
            {t("trackShipment")}
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-red-500 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-red-100">
            {t("contact")}
          </Link>

          {/* Language selector */}
          <div
            className="flex items-center space-x-2 py-2 px-4 rounded-lg cursor-pointer hover:bg-red-100"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          >
            <GlobeAltIcon className="h-5 text-gray-900" />
            <span className="text-gray-900">English</span>
          </div>
          {isLanguageMenuOpen && (
            <div
              className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 w-48 space-y-2"
              id="language-menu"
            >
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="text-gray-800 hover:text-red-500 transition-colors duration-300 cursor-pointer"
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        {ismobile && (
          <div onClick={toggleMenu} className="lg:hidden cursor-pointer">
            {isMenuOpen ? (
              <XMarkIcon className="h-8 text-gray-900 transition-transform transform duration-300" />
            ) : (
              <Bars3Icon className="h-8 text-gray-900 transition-transform transform duration-300" />
            )}
          </div>
        )}
      </div>

      {/* Mobile view menu */}
      {ismobile && isMenuOpen && (
        <div className="flex flex-col items-center space-y-4 mt-4 p-4 bg-white shadow-md rounded-lg">
          <a href="/" className="text-gray-800 hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="/#services" className="text-gray-800 hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="/#about" className="text-gray-800 hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="/#testimonials" className="text-gray-800 hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </a>
          <Link to="/track" className="text-gray-800 hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
            {t("trackShipment")}
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
            {t("contact")}
          </Link>

          {/* Mobile language selector */}
          <div
            className="flex items-center space-x-2 py-2 px-4 rounded-lg cursor-pointer hover:bg-red-100"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          >
            <GlobeAltIcon className="h-5 text-gray-900" />
            <span className="text-gray-900">English</span>
          </div>
          {isLanguageMenuOpen && (
            <div
              className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 w-48 space-y-2"
              id="language-menu"
            >
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="text-gray-800 hover:text-red-500 transition-colors duration-300 cursor-pointer"
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
