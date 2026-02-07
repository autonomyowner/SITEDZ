'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">{t.contact.label}</span>
            <h2 className="section-title">
              {t.contact.title}{' '}
              <span className="text-gradient">{t.contact.titleAccent}</span>
            </h2>
            <p className="contact__description">{t.contact.description}</p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">{t.contact.email}</span>
                <a href="mailto:hello@sitedz.com" className="contact__detail-value">
                  hello@sitedz.com
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">{t.contact.phone}</span>
                <a href="tel:+213797339451" className="contact__detail-value">
                  +213 797 339 451
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">{t.contact.location}</span>
                <span className="contact__detail-value">{t.contact.locationValue}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
