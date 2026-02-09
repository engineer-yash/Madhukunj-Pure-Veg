import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Leaf, Sparkles, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-primary-dark min-h-screen pt-24 pb-16" data-testid="about-page">
      <HeroSection />
      <BrandStorySection />
      <KrishnaInspirationSection />
      <PhilosophySection />
      <ValuesSection />
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
          Our Story
        </h1>
        <p className="font-body text-lg text-secondary/80 max-w-2xl mx-auto">
          A tale of tradition, purity, and culinary excellence
        </p>
        <div className="w-24 h-1 bg-accent mx-auto mt-8" />
      </motion.div>
    </section>
  );
};

const BrandStorySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4" data-testid="brand-story">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-4xl sm:text-5xl text-accent mb-6">
              Where Heritage Meets World Flavors
            </h2>
            <div className="space-y-4 font-body text-lg text-secondary/90 leading-relaxed">
              <p>
                Madhukunj was born from a simple yet profound vision: to create a sanctuary where pure vegetarian cuisine transcends borders, where Indian soul meets global sophistication.
              </p>
              <p>
                Our name, <span className="text-accent font-medium">Madhukunj</span> 'the garden of sweetness' evokes the sacred groves of Vrindavan, where Lord Krishna played his divine flute, bringing joy and serenity to all beings.
              </p>
              <p>
                Just as those ancient gardens were spaces of pure bliss, our restaurant aspires to be a modern-day sanctuary where every guest experiences tranquility, nourishment, and joy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl shadow-accent/20">
              <img
                src="https://res.cloudinary.com/dkinrfyq7/image/upload/v1770629283/madhukunj.pune-20260209-0010_j8eely.jpg"
                alt="Madhukunj Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-accent/30 rounded-sm -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 backdrop-blur-sm rounded-sm -z-10" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const KrishnaInspirationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 bg-primary" data-testid="krishna-inspiration">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="text-accent" size={40} />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-secondary mb-4">
            Inspired by Lord Krishna
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/30">
              <Heart className="text-accent" size={32} />
            </div>
            <h3 className="font-heading text-2xl text-accent">Love & Compassion</h3>
            <p className="font-body text-secondary/80 leading-relaxed">
              Every dish is prepared with love, honoring the sattvic principle of nourishing body and soul with pure intentions.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/30">
              <Leaf className="text-accent" size={32} />
            </div>
            <h3 className="font-heading text-2xl text-accent">Purity & Nature</h3>
            <p className="font-body text-secondary/80 leading-relaxed">
              Like the forests of Vrindavan, we celebrate nature's bounty, using only the finest vegetarian ingredients.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/30">
              <Sparkles className="text-accent" size={32} />
            </div>
            <h3 className="font-heading text-2xl text-accent">Joy & Celebration</h3>
            <p className="font-body text-secondary/80 leading-relaxed">
              Just as Lord Krishna's flute brought joy, our cuisine creates moments of celebration and togetherness.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-xl text-secondary/90 italic max-w-3xl mx-auto leading-relaxed">
            "Just as the peacock feather adorns Lord Krishna's crown and the flute creates divine melodies, 
            our restaurant weaves tradition and innovation into an experience that transcends the ordinary."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4" data-testid="philosophy">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-sm overflow-hidden shadow-lg">
                <img
                  src="https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/q8pj6rgu_madhukunj.pune-20260207-0001.jpg"
                  alt="Culinary Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden shadow-lg mt-8">
                <img
                  src="https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/adw7trha_madhukunj.pune-20260207-0002.jpg"
                  alt="World Cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="font-heading text-4xl sm:text-5xl text-accent mb-6">
              Our Philosophy
            </h2>
            <div className="space-y-4 font-body text-lg text-secondary/90 leading-relaxed">
              <p>
                <span className="text-accent font-semibold">Pure Vegetarian Excellence:</span> We believe vegetarian cuisine is not a limitation but an invitation to explore infinite flavors and possibilities across the globe.
              </p>
              <p>
                <span className="text-accent font-semibold">World on Your Plate:</span> From the aromatic spices of <span className="text-accent">South Indian</span> cuisine to the exotic flavors of <span className="text-accent">Oriental</span> delights, from hearty <span className="text-accent">Indian Main Course</span> to refined <span className="text-accent">World Cuisine</span> - each category tells a story of culinary heritage and innovation.
              </p>
              <p>
                <span className="text-accent font-semibold">Jain Sensitivity:</span> We honor Jain dietary principles with dedicated dishes across all categories, ensuring everyone finds comfort at our table.
              </p>
              <p>
                <span className="text-accent font-semibold">Crafted with Care:</span> Whether you savor our handcrafted <span className="text-accent">Indian Breads</span>, aromatic <span className="text-accent">Rice & Biryani</span>, innovative <span className="text-accent">Continental Starters</span>, or divine <span className="text-accent">Desserts</span>, each dish embodies our commitment to quality and authenticity.
              </p>
              <p>
                <span className="text-accent font-semibold">Mindful Dining:</span> In a world of haste, we create spaces for slowness, for savoring each bite, for meaningful conversations that transcend the meal itself.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Compassion',
      description: 'Every ingredient, every guest, treated with care and respect'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Sustainability',
      description: 'Mindful sourcing, minimal waste, maximum care for our planet'
    },
    {
      icon: <Users size={32} />,
      title: 'Community',
      description: 'Building connections through shared meals and experiences'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Excellence',
      description: 'Uncompromising quality in every dish, every service'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-primary" data-testid="values">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-secondary mb-4">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-dark/50 backdrop-blur-sm p-8 rounded-sm border border-accent/20 hover:border-accent/40 transition-all duration-500"
              data-testid={`value-${index}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center text-accent">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-accent mb-2">{value.title}</h3>
                  <p className="font-body text-secondary/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-xl text-secondary/90 max-w-3xl mx-auto leading-relaxed">
            At Madhukunj, every meal is a prayer, every guest a blessing, every dish a celebration of life's inherent goodness.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
