import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChefHat, Globe, UtensilsCrossed, Leaf, Heart, Sparkles } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-primary-dark">
      <HeroSection />
      <TodaysSpecial />
      <ExploreCuisines />
      <SignatureCreations />
      <MadhukunjExperience />
      <InstagramWall />
      <CTASection />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 800);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && videoRef.current) {
      videoRef.current.addEventListener('ended', () => {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      });
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="relative h-screen w-full overflow-hidden" data-testid="hero-section">
        <video
          ref={videoRef}
          autoPlay
          loop={false}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="hero-video"
        >
          <source
            src="https://res.cloudinary.com/dkinrfyq7/video/upload/v1770447497/Madhukunj-Video_lufxp4.mp4"
            type="video/mp4"
          />
        </video>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden" data-testid="hero-section">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dkinrfyq7/image/upload/v1770446266/Hero_pwxuck.png)'
        }}
      />

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary/60 to-primary-dark/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="text-center max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-secondary mb-6 leading-tight"
            data-testid="hero-title"
          >
            World Cuisine.
            <br />
            <span className="text-accent">Pure Vegetarian.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-body text-lg sm:text-xl lg:text-2xl text-secondary/90 leading-relaxed max-w-2xl mx-auto"
            data-testid="hero-subtitle"
          >
            Where culinary artistry meets spiritual tranquility.
            <br />
            A serene journey through flavors of the world,
            <br />
            crafted with pure vegetarian perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12"
          >
            <Link
              to="/menu"
              className="inline-block px-10 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium text-lg rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1"
              data-testid="explore-menu-btn"
            >
              Explore Menu
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Today's Special Section
const TodaysSpecial = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const specials = [
    {
      name: "Truffle Butter Mushroom Spaghetti",
      description: "Handcrafted pasta tossed in aromatic truffle butter, crowned with forest mushrooms and aged parmesan.",
      image: "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg"
    },
    {
      name: "Paneer Tikka Masala",
      description: "Grilled cottage cheese in a velvety tomato-cashew gravy, kissed with smoke and spices.",
      image: "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg"
    },
    {
      name: "Saffron Risotto",
      description: "Creamy arborio rice infused with precious saffron threads, finished with butter and parmesan.",
      image: "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-primary-dark" data-testid="todays-special-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4">
            Today's Special
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {specials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
              data-testid={`special-item-${index}`}
            >
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-heading text-2xl text-secondary mb-3 group-hover:text-accent transition-colors duration-300">
                {item.name}
              </h3>
              <p className="font-body text-secondary/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Explore Cuisines Section
const ExploreCuisines = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cuisines = [
    { name: 'Indian', icon: <Leaf size={40} />, description: 'Heritage flavors from across India' },
    { name: 'Oriental', icon: <Globe size={40} />, description: 'Asian delicacies reimagined' },
    { name: 'Continental', icon: <UtensilsCrossed size={40} />, description: 'European elegance on a plate' },
    { name: 'Tandoor', icon: <ChefHat size={40} />, description: 'Clay oven masterpieces' },
    { name: 'Desserts', icon: <Heart size={40} />, description: 'Sweet symphonies to conclude' }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-primary" data-testid="explore-cuisines-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4">
            Explore Our Cuisines
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              data-testid={`cuisine-card-${index}`}
            >
              <Link to="/menu">
                <div className="bg-primary-dark/50 backdrop-blur-sm p-8 rounded-sm border border-accent/20 hover:border-accent/60 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 text-center">
                  <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
                    {cuisine.icon}
                  </div>
                  <h3 className="font-heading text-2xl text-secondary mb-2 group-hover:text-accent transition-colors duration-300">
                    {cuisine.name}
                  </h3>
                  <p className="font-body text-sm text-secondary/70">{cuisine.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Signature Creations Section
const SignatureCreations = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const signatures = [
    {
      name: "Madhukunj Chef Special",
      description: "Our master chef's crown jewel. A symphony of secret spices and rare ingredients, crafted exclusively for the discerning palate."
    },
    {
      name: "Burmese Khow Suey",
      description: "A royal Burmese delicacy. Coconut-infused curry with handmade noodles, served with an orchestra of traditional condiments."
    },
    {
      name: "Mezze Platter",
      description: "A Mediterranean journey. Hummus, pita, olives, and artisanal dips presented with olive oil drizzle and fresh herbs."
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-primary-dark" data-testid="signature-creations-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="text-accent" size={36} />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4">
            Signature Creations
          </h2>
          <p className="font-body text-lg text-secondary/80 max-w-2xl mx-auto">
            Handpicked by our master chef, these dishes embody the soul of Madhukunj
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="space-y-8">
          {signatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-primary/40 backdrop-blur-sm p-8 lg:p-10 rounded-sm border border-accent/20 hover:border-accent/40 transition-all duration-500"
              data-testid={`signature-item-${index}`}
            >
              <h3 className="font-heading text-3xl text-accent mb-4">{item.name}</h3>
              <p className="font-body text-lg text-secondary/90 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Madhukunj Experience Section
const MadhukunjExperience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-primary" data-testid="experience-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4">
            The Madhukunj Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6 text-secondary/90 font-body text-lg leading-relaxed">
            <p>
              At Madhukunj, dining transcends nourishment. It becomes a meditation, a celebration of life's simple pleasures elevated to art.
            </p>
            <p>
              Our philosophy is rooted in <span className="text-accent font-medium">purity</span> — of ingredients, of intention, of experience. Every dish honors the vegetarian tradition while embracing global flavors.
            </p>
            <p>
              We honor <span className="text-accent font-medium">Jain dietary principles</span>, ensuring every guest finds comfort and joy in our offerings.
            </p>
            <p>
              Here, meals are savored in tranquility. Conversations flow like gentle streams. Time slows, allowing you to truly taste, to truly be.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl shadow-accent/20">
              <img
                src="https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/zxucu0pq_Madhukunj.png"
                alt="Madhukunj Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent/30 rounded-sm -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Instagram Wall Section
const InstagramWall = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const instagramImages = [
    "https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/q8pj6rgu_madhukunj.pune-20260207-0001.jpg",
    "https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/adw7trha_madhukunj.pune-20260207-0002.jpg",
    "https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/2f88x19l_madhukunj.pune-20260207-0003.jpg",
    "https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/9hwy4phx_madhukunj.pune-20260207-0004.jpg",
    "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg",
    "https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/zxucu0pq_Madhukunj.png"
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-primary-dark" data-testid="instagram-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4">
            @madhukunj.pune
          </h2>
          <p className="font-body text-lg text-secondary/80 mb-6">
            Follow us for daily inspiration
          </p>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/madhukunj.pune"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-sm"
              data-testid={`instagram-post-${index}`}
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="text-accent" size={32} fill="currentColor" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-32 px-4 bg-primary" data-testid="cta-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-8 leading-tight">
          Begin Your Journey
          <br />
          <span className="text-accent">Into Culinary Serenity</span>
        </h2>
        <p className="font-body text-xl text-secondary/90 mb-12 leading-relaxed">
          Every meal at Madhukunj is a moment of grace.
          <br />
          Join us and discover why the world tastes better when it's pure.
        </p>
        <Link
          to="/contact"
          className="inline-block px-12 py-5 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium text-lg rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1"
          data-testid="visit-us-btn"
        >
          Visit Us Today
        </Link>
      </motion.div>
    </section>
  );
};

export default HomePage;
