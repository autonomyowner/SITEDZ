'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './About.css';

const stats = [
  { number: 50, suffix: '+', label: 'Projects Delivered' },
];

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
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Crafting digital excellence{' '}
              <span className="text-gradient">from Algeria</span>
            </h2>
            <div className="about__text">
              <p>
                SiteDZ is a digital agency born from a passion for technology and
                innovation. Based in Algeria, we combine local expertise with
                global standards to deliver exceptional digital solutions.
              </p>
              <p>
                Our team of dedicated developers, designers, and strategists
                work together to transform your ideas into powerful digital
                products. We believe in quality over quantity, crafting each
                project with meticulous attention to detail.
              </p>
              <p>
                From startups to established businesses, we partner with clients
                who share our vision for digital excellence. Your success is our
                measure of achievement.
              </p>
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
                "We don't just build websites and apps. We build digital
                experiences that connect, engage, and inspire."
              </blockquote>
              <cite className="about__cite">— The SiteDZ Team</cite>
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
          {stats.map((stat, index) => (
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
