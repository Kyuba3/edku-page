import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Header.scss";

const HeaderView = () => {

  const { t } = useTranslation(['translations']);
  const headerImage = "https://kamperowicz.pl/wp-content/uploads/2024/02/kamper_kolorowanka_3.webp";

  return (
    <div className="header-container">
      <div className="header-title-container">
        <h1>
          <Trans ns={'translations'} i18nKey={'header.header'}></Trans>
        </h1>
        <h2>
        <Trans ns={'translations'} i18nKey={'header.subheader'}></Trans>
        </h2>
        <div className="header-buttons">
          <Link to={'/products'}>{t('header.products_button')}</Link>
          <Link to={'/contact'}>{t('header.contact_button')}</Link>
        </div>
      </div>
      <div className="header-image">
        {/* Make sure to use the correct path to your image */}
        <img src={headerImage} alt="Energia"/>
      </div>
    </div>
  )
}

export default HeaderView;