import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://res.cloudinary.com/dkinrfyq7/image/upload/v1770473095/Gemini_Generated_Image_ngj8y9ngj8y9ngj8-ai-brush-removebg-ow5nx29_ywhzsh.png"
                alt="Madhukunj - Pure Veg"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-secondary/80 font-body text-sm leading-relaxed mb-4">
              Where Taste Meets Tradition 🌿
              <br />
              Bringing you the finest vegetarian flavors, one plate at a time
            </p>
            <a
              href="https://www.instagram.com/madhukunj.pune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent-light transition-colors"
              data-testid="footer-instagram"
            >
              <Instagram size={20} />
              <span className="font-body text-sm">@madhukunj.pune</span>
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary/70 hover:text-accent transition-colors font-body text-sm"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl text-secondary mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+919890004945"
                className="flex items-start space-x-2 text-secondary/70 hover:text-accent transition-colors group"
                data-testid="footer-phone-restaurant"
              >
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div className="font-body text-sm">
                  <div className="text-secondary/50 text-xs">Restaurant</div>
                  <div>+91 9890004945</div>
                </div>
              </a>
              <a
                href="tel:+919890004946"
                className="flex items-start space-x-2 text-secondary/70 hover:text-accent transition-colors group"
                data-testid="footer-phone-zomato"
              >
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div className="font-body text-sm">
                  <div className="text-secondary/50 text-xs">Zomato</div>
                  <div>+91 9890004946</div>
                </div>
              </a>
              
              <a 
                  href="https://maps.app.goo.gl/epsXLCbvQt4m26vm8"
                  className="flex items-start space-x-2 text-secondary/70 hover:text-accent transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-address"
              >
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className = "font-body text-sm">
                <div className="text-secondary/50 text-xs">Address</div>
                <p className="leading-relaxed">
                  Shivneri Path, Below Hotel Nandanvan,
                  <br />
                  Adarsh Nagar Society, Parsanees Colony,
                  <br />
                  Gultekadi, Pune, Maharashtra, 411037
                </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl text-secondary mb-4">Find Us</h3>
            <div className="rounded-sm overflow-hidden border border-accent/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.296065191748!2d73.8631632!3d18.4896568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f16795de19%3A0x6b4bfbb60cb7271!2sMadhukunj%20Pure%20Veg!5e1!3m2!1sen!2sin!4v1770470203542!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madhukunj Location"
                data-testid="footer-map"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-accent/20 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-secondary/60 text-sm font-body">
            © {new Date().getFullYear()} Madhukunj. All rights reserved. Crafted with ❤ for pure vegetarian excellence.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
