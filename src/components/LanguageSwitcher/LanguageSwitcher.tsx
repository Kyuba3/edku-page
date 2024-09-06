import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FlagIconFactory from 'react-flag-icon-css';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import './LanguageSwitcher.scss';

const FlagIcon = FlagIconFactory(React, {useCssModules: false});

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="language-switcher">
      <div className="current-language" onClick={toggleDropdown}>
        <FlagIcon code={i18n.language === 'pl' ? 'pl' : 'gb'}/> 
        <span className="language-text">
          {i18n.language === 'pl' ? ' Polski' : ' English'}
        </span>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp size="25" color="#242b52" />
        ) : (
          <MdOutlineKeyboardArrowDown size="25" color="#242b52" />
        )}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => changeLanguage('en')}>
            <FlagIcon code="gb" />
          </div>
          <div className="dropdown-item" onClick={() => changeLanguage('pl')}>
            <FlagIcon code="pl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
