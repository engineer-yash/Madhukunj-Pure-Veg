import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-primary-dark min-h-screen pt-24 pb-16" data-testid="contact-page">
      <HeroSection />
      <ContactInfoSection />
      {/* <MapSection /> */}
      <ContactFormSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="py-16 px-4 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-secondary mb-6">
          Visit Us
        </h1>
        <p className="font-body text-lg text-secondary/80 max-w-2xl mx-auto">
          We look forward to welcoming you to Madhukunj
        </p>
        <div className="w-24 h-1 bg-accent mx-auto mt-8" />
      </motion.div>
    </section>
  );
};

const ContactInfoSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 px-4" data-testid="contact-info">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact & Social */}
          <div className="space-y-6">
            {/* Phone Numbers Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-primary/40 backdrop-blur-sm p-8 rounded-sm border border-accent/20 hover:border-accent/40 transition-all duration-500"
              data-testid="contact-card-phones"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-accent" size={24} />
                </div>
                <h3 className="font-heading text-2xl text-secondary">Call Us</h3>
              </div>
              
              <div className="space-y-4">
                <a
                  href="tel:+919890004945"
                  className="flex items-center justify-between p-4 bg-primary-dark/50 rounded-sm hover:bg-primary-dark transition-all group"
                >
                  <div>
                    <p className="text-secondary/60 text-sm font-body mb-1">Restaurant</p>
                    <p className="text-secondary font-body text-lg group-hover:text-accent transition-colors">
                      +91 9890004945
                    </p>
                  </div>
                  <Phone className="text-accent/50 group-hover:text-accent transition-colors" size={20} />
                </a>
                
                <a
                  href="tel:+919890004946"
                  className="flex items-center justify-between p-4 bg-primary-dark/50 rounded-sm hover:bg-primary-dark transition-all group"
                >
                  <div>
                    <p className="text-secondary/60 text-sm font-body mb-1">Zomato Orders</p>
                    <p className="text-secondary font-body text-lg group-hover:text-accent transition-colors">
                      +91 9890004946
                    </p>
                  </div>
                  <Phone className="text-accent/50 group-hover:text-accent transition-colors" size={20} />
                </a>
              </div>
            </motion.div>

            {/* Social & Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary/40 backdrop-blur-sm p-8 rounded-sm border border-accent/20 hover:border-accent/40 transition-all duration-500"
              data-testid="contact-card-social"
            >
              <div className="space-y-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/madhukunj.pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-all">
                    <Instagram className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-secondary/60 text-sm font-body">Follow Us</p>
                    <p className="text-secondary font-body text-lg group-hover:text-accent transition-colors">
                      @madhukunj.pune
                    </p>
                  </div>
                </a>

                {/* Divider */}
                <div className="border-t border-accent/10"></div>

                {/* Hours */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-secondary/60 text-sm font-body">Opening Hours</p>
                    <p className="text-secondary font-body text-lg">Daily: 8:00 AM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary/40 backdrop-blur-sm p-8 rounded-sm border border-accent/20 hover:border-accent/40 transition-all duration-500"
            data-testid="contact-card-location"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-accent" size={24} />
              </div>
              <h3 className="font-heading text-2xl text-secondary">Address</h3>
            </div>

            <div className="mb-6">
              <p className="text-secondary font-body text-lg leading-relaxed">
                Shivneri Path, Below Hotel Nandanvan,<br />
                Adarsh Nagar Society, Parsanees Colony,<br />
                Gultekadi, Pune, Maharashtra, 411037
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/jvxPXw5eJUa59d7w5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              <MapPin size={18} />
              <span>Get Directions</span>
            </a>

            {/* Mini Map Preview */}
            <div className="mt-6 rounded-sm overflow-hidden border border-accent/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.296065191748!2d73.8631632!3d18.4896568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f16795de19%3A0x6b4bfbb60cb7271!2sMadhukunj%20Pure%20Veg!5e1!3m2!1sen!2sin!4v1770470203542!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madhukunj Location Preview"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// const MapSection = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <section ref={ref} className="py-16 px-4 bg-primary" data-testid="map-section">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-10"
//         >
//           <h2 className="font-heading text-4xl sm:text-5xl text-secondary mb-4">
//             Find Us
//           </h2>
//           <div className="w-24 h-1 bg-accent mx-auto" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="rounded-sm overflow-hidden shadow-2xl shadow-accent/20 border border-accent/20"
//         >
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.296065191748!2d73.8631632!3d18.4896568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f16795de19%3A0x6b4bfbb60cb7271!2sMadhukunj%20Pure%20Veg!5e1!3m2!1sen!2sin!4v1770470203542!5m2!1sen!2sin"
//             width="100%"
//             height="500"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Madhukunj Location"
//             data-testid="google-map"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-8"
//         >
//           <a
//             href="https://maps.app.goo.gl/jvxPXw5eJUa59d7w5"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center space-x-2 px-8 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
//             data-testid="open-maps-btn"
//           >
//             <MapPin size={20} />
//             <span>Open in Google Maps</span>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

const ContactFormSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ready for backend integration with admin panel
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section ref={ref} className="py-16 px-4 bg-primary" data-testid="contact-form-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-secondary mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-lg text-secondary/80">
            Have a question or want to make a reservation? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-primary/40 backdrop-blur-sm p-8 lg:p-12 rounded-sm border border-accent/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-secondary mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-dark border border-accent/30 rounded-sm text-secondary focus:border-accent focus:outline-none transition-colors"
                  placeholder="John Doe"
                  data-testid="contact-name-input"
                />
              </div>

              <div>
                <label className="block font-body text-secondary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-dark border border-accent/30 rounded-sm text-secondary focus:border-accent focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  data-testid="contact-email-input"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-secondary mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-primary-dark border border-accent/30 rounded-sm text-secondary focus:border-accent focus:outline-none transition-colors"
                placeholder="+91 XXXXX XXXXX"
                data-testid="contact-phone-input"
              />
            </div>

            <div>
              <label className="block font-body text-secondary mb-2">
                Message *
              </label>
              <textarea
                required
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-primary-dark border border-accent/30 rounded-sm text-secondary focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell us how we can help you..."
                data-testid="contact-message-input"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium text-lg rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
              data-testid="submit-contact-btn"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
