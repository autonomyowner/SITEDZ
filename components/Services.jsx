'use client';

import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies. From landing pages to complex platforms, we deliver scalable solutions.',
  },
  {
    number: '02',
    title: 'Mobile Applications',
    description:
      'Native and cross-platform mobile apps for iOS and Android. We create seamless mobile experiences that users love.',
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with functionality. We craft interfaces that are both beautiful and intuitive.',
  },
  {
    number: '04',
    title: 'Tech Consulting',
    description:
      'Strategic technology guidance to help your business grow. We analyze, plan, and implement the right solutions for your needs.',
  },
  {
    number: '05',
    title: 'Maintenance & Support',
    description:
      'Ongoing technical support and maintenance to keep your digital products running smoothly and securely.',
  },
];

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
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Expertise that drives <span className="text-gradient">results</span>
          </h2>
          <p className="section-subtitle">
            We offer comprehensive digital solutions tailored to transform your
            ideas into reality.
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
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
                Learn more
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
