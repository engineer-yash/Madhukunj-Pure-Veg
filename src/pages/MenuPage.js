import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Flame } from 'lucide-react';
import { menuCategories, getAllMenuItems } from '@/data/menuData';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterJain, setFilterJain] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCountPerCategory, setVisibleCountPerCategory] = useState({});

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const topRef = useRef(null);

  const allItems = getAllMenuItems();

  /* ---------------------------------------------
     RESET PAGINATION WHEN FILTERS / TAB CHANGE
  --------------------------------------------- */
  useEffect(() => {
    const initialCounts = {};
    allItems.forEach(item => {
      if (!initialCounts[item.category]) {
        initialCounts[item.category] = 8;
      }
    });
    setVisibleCountPerCategory(initialCounts);
  }, [selectedCategory, filterJain, filterSpicy]);

  /* ---------------------------------------------
     SCROLL TO TOP ON TAB / FILTER CHANGE
  --------------------------------------------- */
  useEffect(() => {
    topRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [selectedCategory, filterJain, filterSpicy]);

  /* ---------------------------------------------
     FILTER ITEMS
  --------------------------------------------- */
  const filteredItems = allItems.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory)
      return false;
    if (filterJain && !item.isJain) return false;
    if (filterSpicy && item.spiceLevel === 0) return false;
    return true;
  });

  const categories = ['all', ...new Set(allItems.map(i => i.category))];

  const loadMoreItems = categoryName => {
    setVisibleCountPerCategory(prev => ({
      ...prev,
      [categoryName]: (prev[categoryName] || 8) + 8,
    }));
  };

  return (
    <div className="bg-primary-dark min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 px-4 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="font-heading text-6xl text-secondary mb-6">
            Our Menu
          </h1>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            A curated selection of global vegetarian cuisines
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-primary-dark/95 backdrop-blur-md py-3">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto scrollbar-hide mb-4">
            <div className="flex gap-2 px-2 min-w-max">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-sm text-sm transition ${
                    selectedCategory === category
                      ? 'bg-accent text-primary-dark'
                      : 'bg-primary text-secondary/80 hover:bg-primary-light'
                  }`}
                >
                  {category === 'all' ? 'All Dishes' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filterJain}
                onChange={e => setFilterJain(e.target.checked)}
              />
              Jain Only
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filterSpicy}
                onChange={e => setFilterSpicy(e.target.checked)}
              />
              Spicy <Flame size={14} />
            </label>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section ref={topRef} className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            <p className="text-center text-secondary/70 py-20">
              No items match your filters.
            </p>
          ) : (
            <div className="space-y-16">
              {categories
                .filter(cat => cat !== 'all')
                .map(categoryName => {
                  const categoryItems = filteredItems.filter(
                    item => item.category === categoryName
                  );
                  if (!categoryItems.length) return null;

                  const visible =
                    visibleCountPerCategory[categoryName] || 8;
                  const hasMore = categoryItems.length > visible;

                  return (
                    <div key={categoryName}>
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="text-4xl text-accent mb-6"
                      >
                        {categoryName}
                      </motion.h2>

                      <div className="space-y-6">
                        {categoryItems
                          .slice(0, visible)
                          .map((item, index) => (
                            <MenuItem
                              key={item.id}
                              item={item}
                              index={index}
                              inView={inView}
                              onImageClick={() =>
                                setSelectedImage(item.image)
                              }
                            />
                          ))}
                      </div>

                      {hasMore && (
                        <div className="text-center mt-8">
                          <button
                            onClick={() => loadMoreItems(categoryName)}
                            className="px-8 py-3 bg-accent text-primary-dark rounded-sm"
                          >
                            Load More
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

/* ---------------- MENU ITEM ---------------- */

const MenuItem = ({ item, index, inView, onImageClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.05 }}
    className="bg-primary/40 border border-accent/20 rounded-sm overflow-hidden flex"
  >
    <div className="flex-1 p-6">
      <h3 className="text-2xl text-secondary mb-2">{item.name}</h3>
      <p className="text-secondary/80 mb-4">{item.description}</p>
      <span className="text-accent text-2xl">₹{item.price}</span>
    </div>

    <div
      className="w-40 h-40 cursor-pointer"
      onClick={onImageClick}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
);

/* ---------------- IMAGE MODAL ---------------- */

const ImageModal = ({ image, onClose }) => (
  <AnimatePresence>
    {image && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={e => e.stopPropagation()}
          className="relative max-w-4xl"
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white"
          >
            <X size={32} />
          </button>
          <img src={image} alt="Dish" className="rounded-sm" />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MenuPage;
