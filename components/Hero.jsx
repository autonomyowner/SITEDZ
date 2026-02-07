'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const whatsappLink = 'https://wa.me/213797339451?text=' + encodeURIComponent('مرحبا، أريد إنشاء موقع إلكتروني لعملي');

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <motion.div className="hero__content container" style={{ y, opacity }}>
        <motion.span
          className="hero__label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.hero.label}
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.hero.title1}
          <br />
          <span className="text-gradient">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a href="#contact" className="btn btn-primary">
            {t.hero.cta1}
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t.hero.cta2}
          </a>
        </motion.div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>{t.hero.scroll}</span>
          <div className="hero__scroll-line">
            <motion.div
              className="hero__scroll-dot"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
