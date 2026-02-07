'use client';

import { useLanguage } from '@/context/LanguageContext';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const message = encodeURIComponent('مرحبا، أريد إنشاء موقع إلكتروني لعملي');

  return (
    <a
      href={`https://wa.me/213797339451?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contact us on WhatsApp"
    >
      <span className="whatsapp-btn__circle" />
      <span className="whatsapp-btn__text">{t.whatsapp.text}</span>
    </a>
  );
};

export default WhatsAppButton;
