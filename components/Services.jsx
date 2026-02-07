'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './Services.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.services.label}</span>
          <h2 className="section-title">
            {t.services.title} <span className="text-gradient">{t.services.titleAccent}</span>
          </h2>
          <p className="section-subtitle">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {t.services.items.map((service) => (
            <motion.article
              key={service.number}
              className="service-card"
              variants={itemVariants}
            >
              <div className="service-card__header">
                <span className="service-card__number">{service.number}</span>
                <div className="service-card__line" />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <a href="#contact" className="service-card__link">
                {t.services.learnMore}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
