import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          {/* Logo */}
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://res.cloudinary.com/dkinrfyq7/image/upload/v1770447536/Madhukunj-Logo_iccvy8.png"
              alt="Madhukunj - Pure Veg"
              className="h-16 w-auto"
            />
          </Link>

          {/* Divider */}
          <div className="w-24 h-px bg-accent/30" />

          {/* Copyright */}
          <p className="text-secondary/70 text-sm font-body text-center">
            © {new Date().getFullYear()} Madhukunj. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
