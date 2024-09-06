import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation('translations');

  return (
    <footer className="footer text-sm">
      <div className="container mx-auto px-6 py-4">
        
        <div className="footer-top flex items-center justify-between pt-5 pb-5">
          <a href="/" className="text-3xl font-bold">Madet.pl</a>
          <div className="footer-links flex items-center text-xl">
            <a href="/products" className="mx-4">{t('navbar.products')}</a>
            <a href="/" className="mx-4">{t('navbar.informations')}</a>
            <a href="/articles" className="mx-4">{t('navbar.blog')}</a>
            <a href="/?scrollTo=about" className="mx-4">{t('navbar.about')}</a>
            <a href="/contact" className="mx-4">{t('navbar.contact')}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <a href="/" className="mx-2">{t('footer.privace_policy')}</a>
            <a href="/" className="mx-2">{t('footer.regulations')}</a>
            <a href="/" className="mx-2">{t('footer.shipping')}</a>
            <a href="/" className="mx-2">{t('footer.guaranty')}</a>
            <a href="/" className="mx-2">{t('footer.reclamations')}</a>
          </div>
          <div className='footer-socials flex'>
            <a href='https://facebook.com' className="text-blue-600 mx-2">
              <FaFacebook size="1.5em" />
            </a>
            <a href='https://instagram.com' className="text-pink-600 mx-2">
              <FaInstagram size="1.5em" />
            </a>
            <a href='https://youtube.com' className="text-red-600 mx-2">
              <FaYoutube size="1.5em" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
