import { ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="py-16 px-4 bg-white w-full" id="about">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t("about_title")}</h2>
          <p className="text-gray-700 mb-4">{t("about_p1")}</p>
          <p className="text-gray-700 mb-6">{t("about_p2")}</p>
          <p className="text-gray-700 mb-6">{t("about_p3")}</p>
          <motion.div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ x: 100, y: 0 }} animate={{ x: 0, y: 0 }} transition={{ duration: 1 }} className="bg-[#f8fafc] p-4 rounded-md">
              <TruckIcon className="w-6 h-6 text-[#e11d48] mb-2" />
              <h4 className="font-semibold">{t("about_fleet_title")}</h4>
              <p className="text-sm">{t("about_fleet_desc")}</p>
            </motion.div>
            <div className="bg-[#f8fafc] p-4 rounded-md">
              <ShieldCheckIcon className="w-6 h-6 text-[#e11d48] mb-2" />
              <h4 className="font-semibold">{t("about_security_title")}</h4>
              <p className="text-sm">{t("about_security_desc")}</p>
            </div>
          </motion.div>
        </div>
        <div className="md:col-span-1 flex flex-col gap-6 relative h-[100%] w-full">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            className="rounded-lg mb-4 h-[300px] w-[1100px]"
            alt={t("about_img1_alt")}
          />
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c"
            className="rounded-lg h-[300px]"
            alt={t("about_img2_alt")}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
