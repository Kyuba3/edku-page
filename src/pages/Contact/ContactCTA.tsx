import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactCTA = () => {

  const { t } = useTranslation('translations');
 
  return (
    <div 
      className="backgroundImage relative text-white text-start p-10 mb-10"
    >
      <div className='text-container'>
        <h2 className="text-6xl font-bold mb-4">{t('contact.questions')}</h2>
        <p className="mb-8 text-2xl ">{t('contact.questions2')}</p>
        <a
          href={'/contact'}
          className="contact-button text-white font-bold py-2 px-4 rounded"
        >
          {t('contact.contact_button')}
        </a>
      </div>
    </div>
  );
};

export default ContactCTA;