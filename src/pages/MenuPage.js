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
  const [visibleCountPerCategory, setVisibleCountPerCategory] = useState({ all: 8 });
  const [visitedTabs, setVisitedTabs] = useState(new Set(['all'])); // Track visited tabs
  const [scrollPositions, setScrollPositions] = useState({}); // Track scroll positions per tab

  const allItems = getAllMenuItems();

  const filteredItems = allItems.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (filterJain && !item.isJain) return false;
    if (filterSpicy && item.spiceLevel === 0) return false;
    return true;
  });

  const categories = ['all', ...new Set(allItems.map((item) => item.category))];

  const loadMoreItems = (categoryName) => {
    setVisibleCountPerCategory((prev) => ({
      ...prev,
      [categoryName]: (prev[categoryName] || 8) + 8,
    }));
  };

  // Scroll to category header section - show header name at top
  const scrollToCategoryHeader = () => {
    setTimeout(() => {
      const categoryHeader = document.getElementById('category-header');
      if (categoryHeader) {
        // Calculate the position to place category header just below sticky filters
        const stickyHeaderHeight = 180; // Height of navbar + filter section
        const elementPosition = categoryHeader.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - stickyHeaderHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 50);
  };

  // Save current scroll position before changing tab
  const saveScrollPosition = (category) => {
    setScrollPositions(prev => ({
      ...prev,
      [category]: window.pageYOffset
    }));
  };

  // Restore scroll position for a tab
  const restoreScrollPosition = (category) => {
    const savedPosition = scrollPositions[category];
    if (savedPosition !== undefined) {
      setTimeout(() => {
        window.scrollTo({ top: savedPosition, behavior: 'instant' });
      }, 0);
    }
  };

  // Handle category change with visited tracking
  const handleCategoryChange = (category) => {
    // Save current scroll position
    saveScrollPosition(selectedCategory);
    
    setSelectedCategory(category);
    
    // Check if this tab has been visited before
    if (!visitedTabs.has(category)) {
      // First time visit - scroll to category header
      setVisitedTabs(prev => new Set([...prev, category]));
      setTimeout(() => scrollToCategoryHeader(), 150);
    } else {
      // Revisit - restore last scroll position
      restoreScrollPosition(category);
    }
  };

  // Handle filter changes - always scroll to top
  const handleFilterChange = (filterType, value) => {
    if (filterType === 'jain') {
      setFilterJain(value);
    } else if (filterType === 'spicy') {
      setFilterSpicy(value);
    }
    // Scroll to category header when filters change
    setTimeout(() => scrollToCategoryHeader(), 150);
  };

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
            Authentic vegetarian dishes crafted from the finest ingredients across diverse culinary traditions
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8" />
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-3 px-4 bg-primary-dark/95 backdrop-blur-md shadow-lg sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters - Single Line Scrollable */}
          <div className="relative">
            <div className="overflow-x-auto mb-2 scrollbar-hide scroll-smooth" id="category-tabs-container">
              <div className="flex gap-2 min-w-max justify-start md:justify-center px-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-2 rounded-sm font-body text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                      selectedCategory === category
                        ? 'bg-accent text-primary-dark shadow-lg shadow-accent/30'
                        : 'bg-primary text-secondary/80 hover:bg-primary-light hover:text-secondary'
                    }`}
                    data-testid={`filter-${category}`}
                    data-tab-index={index}
                  >
                    {category === 'all' ? 'All Dishes' : category}
                  </button>
                ))}
              </div>
            </div>
            {/* Scroll hint indicator - shown for both mobile and web when scrollable */}
            <ScrollHintIndicator categories={categories} />
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filterJain}
                onChange={(e) => handleFilterChange('jain', e.target.checked)}
                className="w-4 h-4 rounded border-accent/50 bg-primary text-accent focus:ring-accent focus:ring-offset-0"
                data-testid="filter-jain"
              />
              <span className="font-body text-sm text-secondary/80 group-hover:text-accent transition-colors">
                Jain Only
              </span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filterSpicy}
                onChange={(e) => handleFilterChange('spicy', e.target.checked)}
                className="w-4 h-4 rounded border-accent/50 bg-primary text-accent focus:ring-accent focus:ring-offset-0"
                data-testid="filter-spicy"
              />
              <span className="font-body text-sm text-secondary/80 group-hover:text-accent transition-colors">
                Spicy <Flame className="inline" size={14} />
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
            <div id="filters-section" className="space-y-16">
              {/* If "All Dishes" is selected, show all items together */}
              {selectedCategory === 'all' ? (
                <div data-testid="category-all">
                  {/* Category Header */}
                  <motion.div
                    id="category-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                  >
                    <h2  className="font-heading text-4xl lg:text-5xl text-accent mb-2">
                      All Dishes
                    </h2>
                    <div className="w-16 h-0.5 bg-accent/50" />
                  </motion.div>

                  {/* Items Grid */}
                  <div className="space-y-6">
                    {filteredItems.slice(0, visibleCountPerCategory['all'] || 8).map((item, index) => (
                      <MenuItem
                        key={item.id}
                        item={item}
                        index={index}
                        inView={inView}
                        onImageClick={() => setSelectedImage(item.image)}
                      />
                    ))}
                  </div>

                  {/* Load More Button */}
                  {filteredItems.length > (visibleCountPerCategory['all'] || 8) && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => loadMoreItems('all')}
                        className="px-8 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
                        data-testid="load-more-all"
                      >
                        Load More Items
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Group by category for specific category selection */
                categories
                  .filter((cat) => cat !== 'all')
                  .map((categoryName) => {
                    const categoryItems = filteredItems.filter(
                      (item) => item.category === categoryName
                    );
                    if (categoryItems.length === 0) return null;

                    const visibleCount = visibleCountPerCategory[categoryName] || 8;
                    const displayedItems = categoryItems.slice(0, visibleCount);
                    const hasMore = categoryItems.length > visibleCount;

                    return (
                      <div key={categoryName} data-testid={`category-${categoryName}`}>
                        {/* Category Header */}
                        <motion.div
                          id="category-header"
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
                          {displayedItems.map((item, index) => (
                            <MenuItem
                              key={item.id}
                              item={item}
                              index={index}
                              inView={inView}
                              onImageClick={() => setSelectedImage(item.image)}
                            />
                          ))}
                        </div>

                        {/* Load More Button */}
                        {hasMore && (
                          <div className="text-center mt-8">
                            <button
                              onClick={() => loadMoreItems(categoryName)}
                              className="px-8 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
                              data-testid={`load-more-${categoryName}`}
                            >
                              Load More Items
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })
              )}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

// Scroll Hint Indicator Component for Category Tabs
const ScrollHintIndicator = ({ categories }) => {
  const [showRightShadow, setShowRightShadow] = React.useState(true);
  
  React.useEffect(() => {
    const container = document.getElementById('category-tabs-container');
    if (!container) return;

    const handleScroll = () => {
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
      setShowRightShadow(!isAtEnd);
    };

    // Check initially
    handleScroll();

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [categories]);

  return (
    <>
      {showRightShadow && (
        <div className="absolute right-0 top-0 bottom-2 h-10 w-8 bg-gradient-to-l from-primary-dark to-transparent pointer-events-none" />
      )}
    </>
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
      <div className="flex flex-row">
        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center min-w-0">
          <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
            <h3 className="font-heading text-2xl lg:text-3xl text-secondary group-hover:text-accent transition-colors duration-300">
              {item.name}
            </h3>
            <div className="flex items-center space-x-2">
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

        {/* Image - Fixed size, always on right side */}
        <div
          className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 flex-shrink-0 cursor-pointer overflow-hidden"
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
