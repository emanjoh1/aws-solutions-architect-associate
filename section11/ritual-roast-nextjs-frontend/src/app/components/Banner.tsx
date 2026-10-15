"use client";

import React from "react";
import { useTranslation } from "../i18n/LanguageContext";

const Banner = () => {
  const { t } = useTranslation();
  const [line1, line2] = t.bannerHeading.split("\n");

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="md:w-3/4 lg:w-2/3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {line1}
            <br />
            {line2}
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl font-normal">
            {t.bannerSubtext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
