'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: t.footer.navigation,
      links: [
        { name: t.nav.services, href: '/#services' },
        { name: t.nav.pricing, href: '/#pricing' },
        { name: t.nav.about, href: '/#about' },
        { name: t.nav.blog, href: '/blog' },
        { name: t.nav.contact, href: '/#contact' },
      ],
    },
    {
      title: t.footer.services,
      links: [
        { name: t.footer.webDev, href: '/#services' },
        { name: t.footer.mobileApps, href: '/#services' },
        { name: t.footer.uiux, href: '/#services' },
      ],
    },
    {
      title: t.footer.connect,
      links: [
        { name: 'Instagram', href: 'https://instagram.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'Twitter', href: 'https://twitter.com' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="footer__logo">
              <span className="footer__logo-text">Site</span>
              <span className="footer__logo-accent">DZ</span>
            </a>
            <p className="footer__tagline">{t.footer.tagline}</p>
          </motion.div>

          <div className="footer__links">
            {footerLinks.map((group, index) => (
              <motion.div
                key={group.title}
                className="footer__link-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="footer__link-title">{group.title}</h4>
                <ul className="footer__link-list">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="footer__link"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="footer__copyright">
            &copy; {currentYear} {t.footer.copyright}
          </p>
          <p className="footer__made">{t.footer.madeIn}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
