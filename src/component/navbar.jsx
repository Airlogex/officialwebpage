import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismobile, setismobile] = useState(window.innerWidth > 768 ? false : true);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setismobile(false);
      } else {
        setismobile(true);
      }
    };
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

 
  return (
    <nav className="nav">
      <div className="nav-container">
        <div
          className="flex justify-between items-center w-full"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
        >
          <Link to="/" className="nav-logo">
            AirLogex
          </Link>
          {ismobile && (
            <div onClick={toggleMenu}>{isMenuOpen ? <XMarkIcon style={{ height: 25 }} /> : <Bars3Icon style={{ height: 35 }} />}</div>
          )}
        </div>
        <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </a>
          <Link to="/track" onClick={() => setIsMenuOpen(false)}>
            {t("trackShipment")}
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            {t("contact")}
          </Link>
          <div>
            <GlobeAltIcon style={{ color: "black", height: 20 }} onClick={changeLanguage} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
