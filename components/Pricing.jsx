'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './Pricing.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const Pricing = () => {
  const { t } = useLanguage();
  const whatsappLink = 'https://wa.me/213797339451?text=' + encodeURIComponent('مرحبا، أريد الاستفسار عن الأسعار');

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <motion.div
          className="pricing__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.pricing.label}</span>
          <h2 className="section-title">
            {t.pricing.title} <span className="text-gradient">{t.pricing.titleAccent}</span>
          </h2>
          <p className="section-subtitle">{t.pricing.subtitle}</p>
        </motion.div>

        <motion.div
          className="pricing__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}
              variants={itemVariants}
            >
              {plan.badge && (
                <span className="pricing-card__badge">{plan.badge}</span>
              )}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">{plan.price}</span>
                {plan.currency && (
                  <span className="pricing-card__currency">{plan.currency}</span>
                )}
              </div>
              <p className="pricing-card__description">{plan.description}</p>
              <ul className="pricing-card__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-card__feature">{feature}</li>
                ))}
              </ul>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-card__cta`}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
