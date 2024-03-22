import React from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const About = () => {

  const { t } = useTranslation('translations');

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <HiOutlineDotsHorizontal className="article-dot-icon" size={60} />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl text-center">{t('about.header')}</h2>
        <div className="mt-4 text-center text-gray-600 text-lg">
          <p>
            {t('about.description')}
          </p>
        </div>
        <div className="mt-8">
          <img 
            src='https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano-1024x663.jpg'
            alt="About Us" 
            className="w-full object-cover object-center rounded-lg shadow-md h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default About;