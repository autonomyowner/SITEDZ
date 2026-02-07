'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './About.css';

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">{t.about.label}</span>
            <h2 className="section-title">
              {t.about.title}{' '}
              <span className="text-gradient">{t.about.titleAccent}</span>
            </h2>
            <div className="about__text">
              {t.about.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__quote-box">
              <blockquote className="about__quote">
                "{t.about.quote}"
              </blockquote>
              <cite className="about__cite">{t.about.quoteCite}</cite>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {t.about.stats.map((stat, index) => (
            <div key={index} className="stat">
              <span className="stat__number">
                <Counter target={stat.number} suffix={stat.suffix} />
              </span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
