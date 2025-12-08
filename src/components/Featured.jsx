import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import './Featured.css';

const Featured = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
          <span className="section-label">Featured Project</span>
          <h2 className="section-title">
            Our work on <span className="text-gradient">national television</span>
          </h2>
          <p className="section-subtitle">
            ElGhella.com — Algeria's first digital agriculture marketplace platform,
            featured on N1 Algeria channel.
          </p>
        </motion.div>

        <motion.div
          className="featured__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="featured__video-wrapper">
            <div className="featured__video-container">
              <video
                ref={videoRef}
                className="featured__video"
                poster=""
                preload="metadata"
                playsInline
                onEnded={handleVideoEnd}
                onClick={handlePlayPause}
              >
                <source src="/elghella-tv-feature.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button
                className={`featured__play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={handlePlayPause}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                <span className="featured__play-icon">
                  {isPlaying ? 'Pause' : 'Play'}
                </span>
              </button>
            </div>

            <div className="featured__video-border" />
          </div>

          <div className="featured__info">
            <div className="featured__info-grid">
              <div className="featured__info-item">
                <span className="featured__info-label">Project</span>
                <span className="featured__info-value">ElGhella.com</span>
              </div>
              <div className="featured__info-item">
                <span className="featured__info-label">Industry</span>
                <span className="featured__info-value">Agriculture Marketplace</span>
              </div>
              <div className="featured__info-item">
                <span className="featured__info-label">Featured On</span>
                <span className="featured__info-value">N1 Algeria</span>
              </div>
              <div className="featured__info-item">
                <span className="featured__info-label">Featuring</span>
                <span className="featured__info-value">Islam Zellag & Issam Douada</span>
              </div>
            </div>

            <p className="featured__description">
              We developed ElGhella.com, pioneering Algeria's first digital agriculture
              marketplace. This groundbreaking platform connects farmers directly with
              buyers, revolutionizing how agricultural products are traded in Algeria.
              Our work gained national recognition, being featured on N1 Algeria channel
              with Islam Zellag and Issam Douada discussing the platform's impact on
              the agricultural sector.
            </p>

            <div className="featured__achievement">
              <span className="featured__achievement-text">
                First Agriculture Marketplace Platform in Algeria
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
