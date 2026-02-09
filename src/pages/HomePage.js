import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChefHat, Globe, UtensilsCrossed, Leaf, Heart, Sparkles, Droplet, Wheat, Instagram } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-primary-dark">
      <HeroSection />
      <TodaysSpecial />
      <KitchenPhilosophy />
      <ExploreFlavors />
      <JainConsciousDining />
      <SignatureIngredients />
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
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 650);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && videoRef.current) {
      const video = videoRef.current;
      const handleVideoEnd = () => {
        setVideoEnded(true);
      };
      
      video.addEventListener('ended', handleVideoEnd);
      
      return () => {
        if (video) {
          video.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, [isMobile]);

  // Reset video state on navigation
  useEffect(() => {
    setVideoEnded(false);
  }, []);

  if (isMobile) {
    return (
      <section className="relative h-screen w-full overflow-hidden" data-testid="hero-section">
        {!videoEnded ? (
          <video
            ref={videoRef}
            muted
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="hero-video"
          >
            <source
              src="https://res.cloudinary.com/dkinrfyq7/video/upload/v1770476188/Madhukunj-Video_nu5p46.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            src="https://res.cloudinary.com/dkinrfyq7/image/upload/v1770621024/hero_section_mobile_2_1_xijbfc.png"
            alt="Madhukunj Hero"
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="hero-static-image"
          />
        )}
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

      {/* Left Overlay Design */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute left-0 top-0 h-full w-1/4 hidden sm:block"
        style={{ zIndex: 1 }}
      >
        <img
          src="https://res.cloudinary.com/dkinrfyq7/image/upload/v1770461384/IMG_20260207_152920_le4zen.png"
          alt="Decorative overlay"
          className="h-full w-full object-cover opacity-60"
        />
      </motion.div>

      {/* Peacock Image on Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute right-0 bottom-0 h-[60%] w-auto hidden sm:block pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <img
          src="https://res.cloudinary.com/dkinrfyq7/image/upload/v1770461383/IMG_20260207_153411-removebg-preview_qmhh55.png"
          alt="Peacock"
          className="h-full w-auto object-contain"
          style={{ objectPosition: 'bottom right' }}
        />
      </motion.div>

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
            Where Taste Meets Tradition
            <br />
            <span className="text-accent">Pure Vegetarian</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-body text-lg sm:text-xl lg:text-2xl text-secondary/90 leading-relaxed max-w-2xl mx-auto"
            data-testid="hero-subtitle"
          >
            Bringing you the finest vegetarian flavors,
            <br />
            one plate at a time
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
  const scrollContainerRef = useRef(null);
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
    },
    {
      name: "Burmese Khow Suey",
      description: "A royal Burmese delicacy with coconut-infused curry, handmade noodles and traditional condiments.",
      image: "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg"
    },
    {
      name: "Mezze Platter",
      description: "Mediterranean journey with hummus, pita, olives and artisanal dips, drizzled with olive oil.",
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

        {/* Mobile/Tablet: Grid Layout, Desktop: Scrollable */}
        <div className="relative">
          {/* Grid for mobile and tablet (md and below) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
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

          {/* Scrollable for desktop (lg and above) */}
          <div className="hidden lg:block">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              id="todays-special-scroll"
            >
              <div className="flex gap-8 lg:gap-12 px-2" style={{ width: 'max-content' }}>
                {specials.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group cursor-pointer flex-shrink-0 w-80"
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
            
            {/* Scroll hint indicators - only for desktop */}
            <TodaySpecialScrollHint />
          </div>
        </div>
      </div>
    </section>
  );
};

// Today's Special Scroll Hint Component
const TodaySpecialScrollHint = () => {
  const [showRightHint, setShowRightHint] = useState(true);
  const [showLeftHint, setShowLeftHint] = useState(false);

  useEffect(() => {
    const container = document.getElementById('todays-special-scroll');
    if (!container) return;

    const handleScroll = () => {
      const isAtStart = container.scrollLeft <= 5;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
      
      setShowLeftHint(!isAtStart);
      setShowRightHint(!isAtEnd);
    };

    // Check initially
    handleScroll();

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {showLeftHint && (
        <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-primary-dark to-transparent pointer-events-none" />
      )}
      {showRightHint && (
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-primary-dark to-transparent pointer-events-none" />
      )}
    </>
  );
};

// Explore Flavors Section
const ExploreFlavors = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const flavors = [
    { name: 'Indian', icon: <Leaf size={40} />, description: 'Heritage flavors from across India' },
    { name: 'Oriental', icon: <Globe size={40} />, description: 'Asian delicacies reimagined' },
    { name: 'Continental', icon: <UtensilsCrossed size={40} />, description: 'European elegance on a plate' },
    { name: 'Tandoor', icon: <ChefHat size={40} />, description: 'Clay oven masterpieces' },
    { name: 'Desserts', icon: <Heart size={40} />, description: 'Sweet symphonies to conclude' }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-primary" data-testid="explore-flavors-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4">
            Explore Our Flavors
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              data-testid={`flavor-card-${index}`}
            >
              <Link to="/menu">
                <div className="bg-primary-dark/50 backdrop-blur-sm p-8 rounded-sm border border-accent/20 hover:border-accent/60 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 text-center">
                  <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
                    {flavor.icon}
                  </div>
                  <h3 className="font-heading text-2xl text-secondary mb-2 group-hover:text-accent transition-colors duration-300">
                    {flavor.name}
                  </h3>
                  <p className="font-body text-sm text-secondary/70">{flavor.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Kitchen Philosophy Section
const KitchenPhilosophy = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section 
      ref={ref} 
      className="py-32 px-4 relative overflow-hidden" 
      style={{ backgroundColor: '#1a3a2e' }}
      data-testid="kitchen-philosophy-section"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <Leaf size={120} className="text-accent" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Sparkles size={100} className="text-accent" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block p-4 rounded-full bg-accent/10 border border-accent/20">
              <Heart className="text-accent" size={48} />
            </div>
          </motion.div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-8 leading-tight">
            From Our Kitchen
          </h2>
          
          <div className="w-32 h-1 bg-accent mx-auto mb-12" />

          <p className="font-body text-xl sm:text-2xl text-secondary/90 leading-relaxed mb-8">
            Rooted in Purity. Crafted with Thought.
          </p>

          <p className="font-body text-lg text-secondary/80 leading-relaxed max-w-3xl mx-auto">
            Every dish at Madhukunj begins with intention - pure ingredients, mindful cooking, 
            and flavors that respect tradition while embracing the world. We believe in the power 
            of food to nourish not just the body, but the soul.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Jain & Conscious Dining Section
const JainConsciousDining = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    { icon: <Leaf size={32} />, text: 'Jain-friendly preparations' },
    { icon: <Heart size={32} />, text: 'No onion / garlic options' },
    { icon: <Sparkles size={32} />, text: 'Respect for dietary beliefs' }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-primary" data-testid="jain-dining-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4">
            Jain & Conscious Dining
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-body text-lg text-secondary/90 leading-relaxed">
              At Madhukunj, we understand that dining is deeply personal. Our commitment to 
              conscious cooking means every guest finds comfort, joy, and respect in our offerings.
            </p>
            
            <p className="font-body text-lg text-secondary/90 leading-relaxed">
              We honor Jain dietary principles with dedicated preparation methods, ensuring 
              authenticity and care in every dish. Your beliefs matter to us.
            </p>

            <div className="pt-4">
              <Link
                to="/menu"
                className="inline-block px-8 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium rounded-sm transition-all duration-300"
              >
                View Jain Menu
              </Link>
            </div>
          </motion.div>

          {/* Right: Icons/Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-primary-dark/50 backdrop-blur-sm rounded-sm border border-accent/20"
              >
                <div className="text-accent flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="font-body text-lg text-secondary">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Signature Ingredients Section
const SignatureIngredients = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const ingredients = [
    {
      name: 'Stone-Ground Spices',
      description: 'Freshly ground to preserve aroma and potency',
      icon: <Wheat size={48} />,
      image: 'https://res.cloudinary.com/dkinrfyq7/image/upload/v1770469135/spices_hknsal.jpg'
    },
    {
      name: 'Fresh Dairy',
      description: 'Daily sourced from trusted local farms',
      icon: <Droplet size={48} />,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500'
    },
    {
      name: 'Hand-Picked Vegetables',
      description: 'Organic produce selected for peak freshness',
      icon: <Leaf size={48} />,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500'
    },
    {
      name: 'Cold-Pressed Oils',
      description: 'Pure, unrefined oils for authentic flavors',
      icon: <Droplet size={48} />,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-primary-dark" data-testid="signature-ingredients-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4">
            Signature Ingredients
          </h2>
          <p className="font-body text-lg text-secondary/70 max-w-2xl mx-auto mb-6">
            Quality begins with what we choose
          </p>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
              data-testid={`ingredient-card-${index}`}
            >
              <div className="relative overflow-hidden rounded-sm mb-4 aspect-square">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-accent">
                  {ingredient.icon}
                </div>
              </div>
              <h3 className="font-heading text-2xl text-secondary mb-2 group-hover:text-accent transition-colors duration-300">
                {ingredient.name}
              </h3>
              <p className="font-body text-sm text-secondary/70 leading-relaxed">
                {ingredient.description}
              </p>
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
              initial={{ opacity: 0, y: index % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
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
              Our philosophy is rooted in <span className="text-accent font-medium">purity</span> of ingredients, of intention, of experience. Every dish honors the vegetarian tradition while embracing global flavors - from authentic <span className="text-accent font-medium">South Indian</span> delicacies to exotic <span className="text-accent font-medium">Oriental</span> creations, from classic <span className="text-accent font-medium">Indian Main Course</span> to refined <span className="text-accent font-medium">World Cuisine</span>.
            </p>
            <p>
              We honor <span className="text-accent font-medium">Jain dietary principles</span>, ensuring every guest finds comfort and joy in our offerings. Whether you crave the smoky flavors from our <span className="text-accent font-medium">Tandoor</span>, handcrafted breads, aromatic biryanis, or divine desserts, each category is crafted with equal devotion.
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
            <div className="rounded-sm overflow-hidden shadow-2xl shadow-accent/20">
              <img
                src="https://res.cloudinary.com/dkinrfyq7/image/upload/v1770629284/madhukunj.pune-20260209-0008_itjvcy.jpg"
                alt="Madhukunj Interior"
                className="w-full h-full object-cover"
              />
            </div>
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
    "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443379/madhukunj.pune-20260207-0001_dg54ah.jpg",
    "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443383/madhukunj.pune-20260207-0002_okxx4o.jpg",
    "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770629283/madhukunj.pune-20260209-0007_otgcwe.jpg",
    "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443373/madhukunj.pune-20260207-0004_xh0g2l.jpg",
    "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg",
    "https://res.cloudinary.com/dkinrfyq7/image/upload/v1770629283/madhukunj.pune-20260209-0009_xktevr.jpg"
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
          <a
            href="https://www.instagram.com/madhukunj.pune"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-secondary mb-4 group-hover:text-accent transition-colors duration-300">
              @madhukunj.pune
            </h2>
          </a>
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
