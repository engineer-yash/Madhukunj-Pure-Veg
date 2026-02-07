import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Flame } from 'lucide-react';
import { menuCategories, getAllMenuItems } from '@/data/menuData';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterJain, setFilterJain] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const allItems = getAllMenuItems();

  const filteredItems = allItems.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (filterJain && !item.isJain) return false;
    if (filterSpicy && item.spiceLevel === 0) return false;
    return true;
  });

  const categories = ['all', ...new Set(allItems.map((item) => item.category))];

  return (
    <div className="bg-primary-dark min-h-screen pt-24 pb-16" data-testid="menu-page">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-secondary mb-6">
            Our Menu
          </h1>
          <p className="font-body text-lg text-secondary/80 max-w-2xl mx-auto">
            A curated selection of global cuisines, thoughtfully prepared with pure vegetarian ingredients
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8" />
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-primary-dark/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters - Single Line Scrollable */}
          <div className="overflow-x-auto pb-4 mb-4 scrollbar-hide">
            <div className="flex gap-3 min-w-max justify-start md:justify-center px-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-sm font-body text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-accent text-primary-dark shadow-lg shadow-accent/30'
                      : 'bg-primary text-secondary/80 hover:bg-primary-light hover:text-secondary'
                  }`}
                  data-testid={`filter-${category}`}
                >
                  {category === 'all' ? 'All Dishes' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filterJain}
                onChange={(e) => setFilterJain(e.target.checked)}
                className="w-5 h-5 rounded border-accent/50 bg-primary text-accent focus:ring-accent focus:ring-offset-0"
                data-testid="filter-jain"
              />
              <span className="font-body text-secondary/80 group-hover:text-accent transition-colors">
                Jain Only
              </span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filterSpicy}
                onChange={(e) => setFilterSpicy(e.target.checked)}
                className="w-5 h-5 rounded border-accent/50 bg-primary text-accent focus:ring-accent focus:ring-offset-0"
                data-testid="filter-spicy"
              />
              <span className="font-body text-secondary/80 group-hover:text-accent transition-colors">
                Spicy <Flame className="inline" size={16} />
              </span>
            </label>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section ref={ref} className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-body text-xl text-secondary/70">
                No items match your filters. Try adjusting your selection.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-16">
              {/* Group by category */}
              {categories
                .filter((cat) => cat !== 'all')
                .map((categoryName) => {
                  const categoryItems = filteredItems.filter(
                    (item) => item.category === categoryName
                  );
                  if (categoryItems.length === 0) return null;

                  return (
                    <div key={categoryName} data-testid={`category-${categoryName}`}>
                      {/* Category Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                      >
                        <h2 className="font-heading text-4xl lg:text-5xl text-accent mb-2">
                          {categoryName}
                        </h2>
                        <div className="w-16 h-0.5 bg-accent/50" />
                      </motion.div>

                      {/* Items Grid */}
                      <div className="space-y-6">
                        {categoryItems.map((item, index) => (
                          <MenuItem
                            key={item.id}
                            item={item}
                            index={index}
                            inView={inView}
                            onImageClick={() => setSelectedImage(item.image)}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

// Menu Item Component
const MenuItem = ({ item, index, inView, onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-primary/40 backdrop-blur-sm rounded-sm border border-accent/20 overflow-hidden hover:border-accent/40 transition-all duration-500 group"
      data-testid={`menu-item-${item.id}`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-heading text-2xl lg:text-3xl text-secondary group-hover:text-accent transition-colors duration-300">
              {item.name}
            </h3>
            <div className="flex items-center space-x-2 ml-4">
              {item.isJain && (
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-body rounded-sm border border-accent/40">
                  JAIN
                </span>
              )}
              {item.spiceLevel > 0 && (
                <div className="flex">
                  {[...Array(item.spiceLevel)].map((_, i) => (
                    <Flame
                      key={i}
                      size={16}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <p className="font-body text-secondary/80 mb-4 leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="font-heading text-3xl text-accent">
              ₹{item.price}
            </span>
          </div>
        </div>

        {/* Image */}
        <div
          className="md:w-64 lg:w-80 h-48 md:h-auto cursor-pointer overflow-hidden"
          onClick={onImageClick}
          data-testid={`menu-item-image-${item.id}`}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
};

// Image Modal Component
const ImageModal = ({ image, onClose }) => {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          data-testid="image-modal"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-secondary hover:text-accent transition-colors p-2"
              data-testid="close-modal-btn"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            <img
              src={image}
              alt="Dish"
              className="w-full h-auto rounded-sm shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuPage;
