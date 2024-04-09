import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const { t } = useTranslation('translations');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
    phone: '',
    consent: false,
    recaptcha: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleConsentChange = (e: any) => {
    setFormData(prevState => ({
      ...prevState,
      consent: e.target.checked
    }));
  };

  const handleCaptchaChange = (value: any) => {
    setFormData(prevState => ({
      ...prevState,
      recaptcha: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Przed wysłaniem upewnij się, że użytkownik wyraził zgodę i zaznaczył reCAPTCHA
    if (formData.consent && formData.recaptcha) {
      console.log(formData);
      // Tutaj możesz dodać logikę wysyłania formularza, np. przez API.
      // Reset form data
      setFormData({ name: '', email: '', message: '', surname: '', phone: '', consent: false, recaptcha: ''});
    } else {
      // Ostrzeż użytkownika, że musi wyrazić zgodę i zaznaczyć reCAPTCHA
      alert('Musisz wyrazić zgodę na przetwarzanie danych osobowych i zaznaczyć, że nie jesteś robotem.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="name">{t('contact.name')}*</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
    </div>
    <div className="form-group">
      <label htmlFor="surname">{t('contact.surname')}</label>
      <input
        type="text" 
        id="surname" 
        name="surname" 
        value={formData.surname} 
        onChange={handleChange}  
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label htmlFor="email">{t('contact.email')}*</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">{t('contact.phone')}</label>
      <input 
        type="text"
        id="phone" 
        name="phone" 
        value={formData.phone} 
        onChange={handleChange}  
      />
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="message">{t('contact.message')}</label>
    <textarea 
      id="message" 
      name="message" 
      value={formData.message} 
      onChange={handleChange} 
      required 
    ></textarea>
  </div>

  <div className="form-group consent-group">
    <input 
      type="checkbox" 
      id="consent" 
      name="consent" 
      required
      checked={formData.consent} 
      onChange={handleConsentChange} 
      className="consent-checkbox"
    />
    <label htmlFor="consent" className="consent-label">{t('contact.consent')}*</label>
  </div>

  <div className="form-group">
    <ReCAPTCHA
      sitekey="Twoj_klucz_strony_reCAPTCHA"
      onChange={handleCaptchaChange}
    />
  </div>

  <button type="submit">{t('contact.send_button')}</button>
</form>

  );
};

export default ContactForm;