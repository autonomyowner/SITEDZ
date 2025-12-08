import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
      ],
    },
    {
      title: 'Connect',
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
            <p className="footer__tagline">
              Crafting exceptional digital experiences from Algeria to the world.
            </p>
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
            © {currentYear} SiteDZ. All rights reserved.
          </p>
          <p className="footer__made">
            Made with precision in Algeria
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
