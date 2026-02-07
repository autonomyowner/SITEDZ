'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './Featured.css';

const Featured = () => {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    { name: 'Cuisine Alger', url: 'www.cuisinealger.com', industry: 'Kitchen & Interior Design' },
    { name: 'Walid Fermeture', url: 'www.walidfermeture.com', industry: 'Construction & Doors' },
    { name: 'Allouani', url: 'www.allouani.com', industry: 'Business Services' },
    { name: 'Biogre Nagold', url: 'www.biogrenagold.com', industry: 'Organic Products' },
    { name: 'Mind Shift Arabia', url: 'www.mindshiftarabia.com', industry: 'Consulting & Training' },
    { name: 'ZSST', url: 'www.zsst.xyz', industry: 'Technology' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="featured" id="featured">
      <div className="container">
        <motion.div
          className="featured__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.featured.label}</span>
          <h2 className="section-title">
            {t.featured.title} <span className="text-gradient">{t.featured.titleAccent}</span>
          </h2>
          <p className="section-subtitle">{t.featured.subtitle}</p>
        </motion.div>

        <motion.div
          className="featured__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="featured__video-wrapper" ref={videoContainerRef}>
            <div className="featured__video-container">
              {isVisible && (
                <video
                  ref={videoRef}
                  className="featured__video"
                  preload="none"
                  playsInline
                  onEnded={handleVideoEnd}
                  onClick={handlePlayPause}
                >
                  <source src="/elghella-tv-feature.mp4" type="video/mp4" />
                </video>
              )}

              <button
                className={`featured__play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={handlePlayPause}
                aria-label={isPlaying ? t.featured.pause : t.featured.play}
              >
                <span className="featured__play-icon">
                  {isPlaying ? t.featured.pause : t.featured.play}
                </span>
              </button>
            </div>

            <div className="featured__video-border" />
          </div>

          <div className="featured__info">
            <div className="featured__info-grid">
              <div className="featured__info-item">
                <span className="featured__info-label">{t.featured.project}</span>
                <span className="featured__info-value">ElGhella.com</span>
              </div>
              <div className="featured__info-item">
                <span className="featured__info-label">{t.featured.industry}</span>
                <span className="featured__info-value">{t.featured.industryValue}</span>
              </div>
              <div className="featured__info-item">
                <span className="featured__info-label">{t.featured.featuredOn}</span>
                <span className="featured__info-value">N1 Algeria</span>
              </div>
              <div className="featured__info-item">
                <span className="featured__info-label">{t.featured.featuring}</span>
                <span className="featured__info-value">{t.featured.featuringValue}</span>
              </div>
            </div>

            <p className="featured__description">{t.featured.description}</p>

            <div className="featured__achievement">
              <span className="featured__achievement-text">{t.featured.achievement}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="projects__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="projects__title">{t.featured.moreProjects}</h3>
          <div className="projects__grid">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="project__card-content">
                  <h4 className="project__name">{project.name}</h4>
                  <p className="project__url">{project.url}</p>
                  <span className="project__industry">{project.industry}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
