'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <motion.div
          className="faq__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.faq.label}</span>
          <h2 className="section-title">
            {t.faq.title} <span className="text-gradient">{t.faq.titleAccent}</span>
          </h2>
        </motion.div>

        <motion.div
          className="faq__list"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq__toggle">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
