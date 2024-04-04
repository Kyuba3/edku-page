import React from "react";
import { useTranslation } from "react-i18next";
import './Contact.scss';
import ContactForm from "./ContactForm";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdBusinessCenter, MdAlternateEmail } from "react-icons/md";

const ContactPage = () => {
  const { t } = useTranslation('translations');

  return (
    <div className="contact-page-container">
      <div className="contact-page-banner" style={{ backgroundImage: `url()` }}>
        {/* Content like page title, etc. */}
      </div>
      
      <div className="contact-page-content">
        <div className="contact-page-info">
          <HiOutlineDotsHorizontal className="contact-dots-icon" size={40} />
          <h1>{t('contact.title')}</h1>
          <div className="contact-details">
            <div className="contact-detail-item">
              <FaLocationDot className="contact-icon" size={23}/>
              <span>MADET Sp. z o.o.<br />Rokicini Podhalańskie 236a, <br /> 34-444 Raba Wyżna</span>
            </div>
            <div className="contact-detail-item">
              <MdBusinessCenter className="contact-icon" size={23} />
              <span>NIP: 735-275-97-79</span>
            </div>
            <div className="contact-detail-item">
              <FaPhone className="contact-icon" size={23} />
              <span>Tel: +48 788 439 848</span>
            </div>
            <div className="contact-detail-item">
              <MdAlternateEmail className="contact-icon" size={23} />
              <span>madet@gmail.com</span>
            </div>
            <div className="contact-detail-item">
              <span>Odbiór osobisty <br />
                    ul. Józefa Sarego 12/8 <br />
                    31-048, Kraków
              </span>
            </div>
          </div>
        </div>
        
        <div className="contact-page-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;