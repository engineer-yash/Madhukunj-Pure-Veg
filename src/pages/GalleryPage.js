import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Upload, User, X } from 'lucide-react';

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

  // Placeholder guest photos
  const guestPhotos = [
    'https://res.cloudinary.com/dkinrfyq7/image/upload/v1770443381/madhukunj.pune-20260207-0003_gqylj6.jpg',
    'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/q8pj6rgu_madhukunj.pune-20260207-0001.jpg',
    'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/adw7trha_madhukunj.pune-20260207-0002.jpg',
    'https://customer-assets.emergentagent.com/job_55f08eed-9147-471d-a01e-4ab939a34e25/artifacts/9hwy4phx_madhukunj.pune-20260207-0004.jpg'
  ];

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
          {guestPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-sm shadow-lg"
              data-testid={`guest-photo-${index}`}
            >
              <img
                src={photo}
                alt={`Guest moment ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
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
                Profile Picture
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

export default GalleryPage;
