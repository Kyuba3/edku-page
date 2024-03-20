import React from "react";
import { useTranslation } from "react-i18next";
import FlagIconFactory from 'react-flag-icon-css';
import './LanguageSwitcher.scss';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  }

  const FlagIcon = FlagIconFactory(React, {useCssModules: false});

  return (
    <div className="language-switcher">
      <div className="current-language">
        <FlagIcon code={i18n.language === 'pl' ? 'pl' : 'gb'} /> <MdOutlineKeyboardArrowDown color="white" />
      </div>
      <select onChange={changeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher;