"use client";

import React from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
import backgroundImage from "../../images/background.png"; // تأكد من مسار الصورة
export default function Title() {
  const { t } = useLanguage();
  const title = t("common.productDetails");

  return (
    <div className="title relative w-full overflow-hidden">
      <img
        src={backgroundImage.src}
        alt="Background"
        className="w-full h-[100px] md:h-[200px] object-cover relative z-[-1] opacity-80"
      />
      <div className="container absolute inset-0 w-full h-full z-10 bg-white/70 flex items-center justify-center text-center">
        <h1 className="font-bold text-4xl text-black opacity-5 md:text-7xl ">
          {title}
        </h1>
        <h1 className="text-[#020202] font-[600] text-2xl md:text-4xl absolute z-20">
          {title}
        </h1>
      </div>
    </div>
  );
}
