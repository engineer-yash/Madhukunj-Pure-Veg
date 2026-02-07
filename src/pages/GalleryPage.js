import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Upload, User, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  return (
    <div className="bg-primary-dark min-h-screen pt-24 pb-16" data-testid="gallery-page">
      <HeroSection />
      <RestaurantGallery />
      <GuestMomentsSection />
      <GuestUploadForm />
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
          Gallery
        </h1>
        <p className="font-body text-lg text-secondary/80 max-w-2xl mx-auto">
          Moments captured in time, memories created at Madhukunj
        </p>
        <div className="w-24 h-1 bg-accent mx-auto mt-8" />
      </motion.div>
    </section>
  );
};

const RestaurantGallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const galleryImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/zxucu0pq_Madhukunj.png',
      title: 'Interior Ambiance'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/q8pj6rgu_madhukunj.pune-20260207-0001.jpg',
      title: 'Culinary Art'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/adw7trha_madhukunj.pune-20260207-0002.jpg',
      title: 'World Cuisine'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/2f88x19l_madhukunj.pune-20260207-0003.jpg',
      title: 'French Toast'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/9hwy4phx_madhukunj.pune-20260207-0004.jpg',
      title: 'Taste of Perfection'
    },
    {
      url: 'https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg',
      title: 'Signature Dish'
    }
  ];

  return (
    <section ref={ref} className="py-16 px-4" data-testid="restaurant-gallery">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-secondary mb-4">
            Restaurant Gallery
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-sm"
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="font-heading text-2xl text-secondary">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GuestMomentsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Mock guest photos with user data (ready for backend integration)
  const allGuestPhotos = [
    {
      url: 'https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg',
      userName: 'Priya Sharma',
      userAvatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/q8pj6rgu_madhukunj.pune-20260207-0001.jpg',
      userName: 'Rajesh Kumar',
      userAvatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/adw7trha_madhukunj.pune-20260207-0002.jpg',
      userName: 'Anita Desai',
      userAvatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/9hwy4phx_madhukunj.pune-20260207-0004.jpg',
      userName: 'Vikram Patel',
      userAvatar: 'https://i.pravatar.cc/150?img=13'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/2f88x19l_madhukunj.pune-20260207-0003.jpg',
      userName: 'Sneha Reddy',
      userAvatar: 'https://i.pravatar.cc/150?img=9'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/zxucu0pq_Madhukunj.png',
      userName: 'Amit Joshi',
      userAvatar: 'https://i.pravatar.cc/150?img=8'
    },
    {
      url: 'https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg',
      userName: 'Kavita Singh',
      userAvatar: 'https://i.pravatar.cc/150?img=10'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/q8pj6rgu_madhukunj.pune-20260207-0001.jpg',
      userName: 'Rohan Mehta',
      userAvatar: 'https://i.pravatar.cc/150?img=11'
    },
    // Additional photos for "Load More"
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/adw7trha_madhukunj.pune-20260207-0002.jpg',
      userName: 'Deepa Nair',
      userAvatar: 'https://i.pravatar.cc/150?img=16'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/9hwy4phx_madhukunj.pune-20260207-0004.jpg',
      userName: 'Sanjay Gupta',
      userAvatar: 'https://i.pravatar.cc/150?img=14'
    },
    {
      url: 'https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg',
      userName: 'Meera Iyer',
      userAvatar: 'https://i.pravatar.cc/150?img=20'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/2f88x19l_madhukunj.pune-20260207-0003.jpg',
      userName: 'Arjun Kapoor',
      userAvatar: 'https://i.pravatar.cc/150?img=15'
    }
  ];

  const displayedPhotos = showAll ? allGuestPhotos : allGuestPhotos.slice(0, 8);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : allGuestPhotos.length - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev < allGuestPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section ref={ref} className="py-16 px-4 bg-primary" data-testid="guest-moments">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-secondary mb-4">
            Guest Moments
          </h2>
          <p className="font-body text-secondary/80 mb-6">
            Captured by our beloved guests
          </p>
          <div className="w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayedPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
              data-testid={`guest-photo-${index}`}
            >
              <div className="aspect-square overflow-hidden rounded-sm shadow-lg">
                <img
                  src={photo.url}
                  alt={`Guest moment by ${photo.userName}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* User Info - Always Visible Below Image */}
              <div className="mt-2 flex items-center space-x-2">
                <img
                  src={photo.userAvatar}
                  alt={photo.userName}
                  className="w-8 h-8 rounded-full border-2 border-accent"
                />
                <span className="font-body text-sm text-secondary">
                  {photo.userName}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && allGuestPhotos.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
              data-testid="load-more-btn"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        photos={allGuestPhotos}
        selectedIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </section>
  );
};

const GuestUploadForm = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    profilePicture: null,
    images: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ready for backend integration
    console.log('Form submitted:', formData);
    alert('Thank you for sharing your moment! Your submission will be reviewed.');
    setFormData({ name: '', profilePicture: null, images: [] });
  };

  return (
    <section ref={ref} className="py-16 px-4" data-testid="guest-upload-form">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-primary/40 backdrop-blur-sm p-8 lg:p-12 rounded-sm border border-accent/20"
        >
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <Upload className="text-accent" size={40} />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-secondary mb-3">
              Share Your Experience
            </h2>
            <p className="font-body text-secondary/80">
              Upload your favorite moments from Madhukunj
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Enter your name"
                data-testid="guest-name-input"
              />
            </div>

            <div>
              <label className="block font-body text-secondary mb-2">
                Profile Picture <span className="text-secondary/60 text-sm">(Optional)</span>
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-20 h-20 bg-primary-dark rounded-full border-2 border-accent/30 flex items-center justify-center overflow-hidden">
                  {formData.profilePicture ? (
                    <img
                      src={URL.createObjectURL(formData.profilePicture)}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="text-accent/50" size={32} />
                  )}
                </div>
                <label className="cursor-pointer">
                  <span className="inline-block px-6 py-2 bg-accent/20 hover:bg-accent/30 text-accent border border-accent/40 rounded-sm font-body transition-colors">
                    Choose Photo
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setFormData({ ...formData, profilePicture: e.target.files[0] })
                    }
                    className="hidden"
                    data-testid="profile-picture-input"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block font-body text-secondary mb-2">
                Upload Photos (up to 4)
              </label>
              <label className="block cursor-pointer">
                <div className="border-2 border-dashed border-accent/30 hover:border-accent/60 rounded-sm p-8 text-center transition-colors">
                  <Upload className="mx-auto text-accent mb-3" size={32} />
                  <p className="font-body text-secondary/80">
                    Click to upload or drag and drop
                  </p>
                  <p className="font-body text-sm text-secondary/60 mt-2">
                    PNG, JPG up to 10MB each
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files).slice(0, 4);
                    setFormData({ ...formData, images: files });
                  }}
                  className="hidden"
                  data-testid="images-upload-input"
                />
              </label>
              {formData.images.length > 0 && (
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {formData.images.map((img, index) => (
                    <div key={index} className="relative aspect-square">
                      <img
                        src={URL.createObjectURL(img)}
                        alt={`Upload preview ${index + 1}`}
                        className="w-full h-full object-cover rounded-sm"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newImages = formData.images.filter((_, i) => i !== index);
                          setFormData({ ...formData, images: newImages });
                        }}
                        className="absolute -top-2 -right-2 bg-accent text-primary-dark rounded-full p-1 hover:bg-accent-dark transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-body font-medium text-lg rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
              data-testid="submit-guest-upload-btn"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Gallery Modal Component with Navigation
const GalleryModal = ({ photos, selectedIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, onClose, onPrev, onNext]);

  if (selectedIndex === null) return null;

  const currentPhoto = photos[selectedIndex];

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          data-testid="gallery-modal"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-secondary hover:text-accent transition-colors p-2 z-10"
              data-testid="close-gallery-btn"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-dark/80 hover:bg-accent text-secondary hover:text-primary-dark p-3 rounded-full transition-all duration-300 z-10"
              data-testid="prev-image-btn"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-dark/80 hover:bg-accent text-secondary hover:text-primary-dark p-3 rounded-full transition-all duration-300 z-10"
              data-testid="next-image-btn"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={currentPhoto.url}
                alt={`Photo by ${currentPhoto.userName}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-sm shadow-2xl"
              />
              
              {/* User Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark via-primary-dark/90 to-transparent p-6 rounded-b-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={currentPhoto.userAvatar}
                      alt={currentPhoto.userName}
                      className="w-12 h-12 rounded-full border-2 border-accent"
                    />
                    <div>
                      <p className="font-body text-secondary font-medium">
                        {currentPhoto.userName}
                      </p>
                      <p className="font-body text-secondary/70 text-sm">
                        Guest at Madhukunj
                      </p>
                    </div>
                  </div>
                  
                  {/* Image Counter */}
                  <div className="font-body text-secondary/80 text-sm">
                    {selectedIndex + 1} of {photos.length}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryPage;
