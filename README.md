# Madhukunj – Pure Veg

> **Where Taste Meets Tradition | Pure Vegetarian Dining**

A premium, responsive restaurant website for **Madhukunj – Pure Veg**, a vegetarian dining destination in Gultekadi, Pune, Maharashtra. The website showcases the restaurant's culinary identity, diverse menu, dining philosophy, gallery, and customer contact experience.

**Project:** Madhukunj – Pure Veg  
**Project Type:** Freelance Website Development  
**Developed by:** [YG Web Studio](https://ygwebstudio.vercel.app/) – Yash Gohel  
**Repository:** [Madhukunj-Pure-Veg](https://github.com/engineer-yash/Madhukunj-Pure-Veg)  
**Deployment:** Vercel

---

## About Madhukunj – Pure Veg

Madhukunj is a pure vegetarian restaurant built around the philosophy of combining traditional Indian food values with international culinary experiences.

The restaurant's website introduces its identity through the tagline **"Where Taste Meets Tradition"**, presenting a dining experience inspired by purity, heritage, thoughtful cooking, and global flavours.

The name Madhukunj represents a garden of sweetness, inspired by the sacred gardens of Vrindavan and the cultural association with Lord Krishna.

The restaurant's brand philosophy highlights:

- Pure vegetarian cuisine inspired by Indian and international culinary traditions.
- Jain-friendly food preparations and no-onion/no-garlic options.
- Thoughtfully selected ingredients and mindful cooking.
- A welcoming dining atmosphere that combines tradition with modern presentation.
- A diverse menu designed to offer something for different food preferences.

### Restaurant Information

| Detail | Information |
|---|---|
| Name | Madhukunj – Pure Veg |
| Business Category | Restaurant / Hospitality |
| Location | Gultekadi, Pune, Maharashtra |
| PIN Code | 411037 |
| Address | Shivneri Path, Below Hotel Nandanvan, Adarsh Nagar Society, Parsanees Colony, Gultekadi, Pune |
| Restaurant Contact | +91 9890004945 |
| Online Orders | +91 9890004946 |
| Instagram | [@madhukunj.pune](https://www.instagram.com/madhukunj.pune) |

**About the owner:** The repository and published brand-story content do not identify an individual owner or founder by name. Therefore, this documentation intentionally avoids assigning ownership to an unverified individual.

---

## Project Overview

This project was developed as a freelance engagement under **YG Web Studio**.

The objective was to establish a premium digital identity for Madhukunj and create a visually engaging restaurant website where visitors can explore the restaurant, discover dishes, understand its food philosophy, view photography, and find contact and location information.

Rather than building a basic static restaurant website, I developed an interactive React application with reusable components, client-side routing, dynamic menu filtering, animated sections, image galleries, and responsive navigation.

---

## Website Features

### 1. Home Page

The homepage introduces the restaurant through a cinematic hero section and multiple interactive content sections.

Implemented features:

- Full-screen hero section with a premium restaurant visual identity.
- Animated introduction using Framer Motion.
- Dedicated desktop and mobile hero presentations.
- Background video playback on mobile, followed by a static hero image.
- Today's Special section with responsive layouts.
- Horizontal scrolling food cards on desktop.
- Explore Our Flavors section.
- Kitchen philosophy and restaurant story.
- Jain and Conscious Dining section.
- Signature Ingredients showcase.
- Signature Creations section.
- Madhukunj dining experience section.
- Instagram and social media highlights.
- Call-to-action sections directing visitors towards the menu and contact pages.

### 2. Menu Page

Developed an interactive restaurant menu with structured JavaScript data.

The menu includes **9 food categories and 45 menu entries** in the current repository data.

Food categories include:

- South Indian
- Indian Main Course
- World Cuisine
- Oriental
- Starters – Continental
- Rice
- Breads
- Desserts
- Beverages

Interactive features:

- Category-based menu filtering.
- Jain-only food filter.
- Spicy food filter.
- Spice-level indicators using icons.
- Jain dish indicators.
- Dish descriptions and pricing.
- Individual food images.
- Image preview modal.
- Load More functionality.
- Responsive horizontal category navigation.
- Scroll-position preservation when switching between previously visited categories.

All menu entries are maintained in a dedicated data file, making it easier to update dishes, descriptions, prices, images, and dietary attributes without restructuring the entire UI.

### 3. Gallery Page

Built a dedicated visual experience showcasing restaurant interiors, food photography, and guest moments.

Features:

- Restaurant photography gallery.
- Guest Moments section.
- Interactive image modal.
- Previous and next image navigation.
- Keyboard-based gallery navigation.
- Guest profile pictures and names.
- Image counters.
- Load More functionality.
- Guest photo submission interface.
- Profile picture preview.
- Multiple image selection interface.

The guest gallery currently uses predefined demonstration data. The photo-submission interface is frontend-only and is prepared for future backend integration.

### 4. About Page

Created a dedicated brand-story experience to communicate the restaurant's identity and philosophy.

Sections include:

- Restaurant introduction.
- Brand story.
- Madhukunj's meaning and inspiration.
- Connection with Lord Krishna and Vrindavan.
- Purity and nature.
- Love and compassion.
- Joy and celebration.
- Kitchen philosophy.
- Restaurant values and conscious dining.

### 5. Contact Page

Developed a contact experience that makes restaurant information easily accessible.

Features:

- Restaurant contact details.
- Click-to-call phone numbers.
- Separate online-order contact number.
- Instagram profile integration.
- Opening-hours information.
- Restaurant address.
- Google Maps embedded location preview.
- Google Maps directions.
- Contact enquiry form.
- Form validation through native HTML required fields.
- Submission confirmation interface.

**Integration note:** The contact form currently handles input through React state and displays a frontend confirmation. The form submission is logged in the browser console and is not yet connected to an email service, backend API, or database.

---

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend Library | React 19 |
| Build Framework | Create React App |
| Build Customisation | CRACO |
| Programming Language | JavaScript (ES6+) |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 3 |
| Custom Styling | CSS3 |
| Animation | Framer Motion 12 |
| Scroll Detection | React Intersection Observer |
| Icons | Lucide React |
| UI Components | Radix UI |
| Component Utilities | Class Variance Authority, clsx |
| CSS Utilities | Tailwind Merge |
| Notifications | Sonner / Toast UI utilities |
| Media Hosting | Cloudinary |
| Maps | Google Maps Embed |
| Analytics | PostHog client integration |
| Package Management | Yarn |
| Deployment Configuration | Vercel |

---

## What I Developed – Technical Implementation

As the developer behind YG Web Studio, I worked on the frontend architecture, reusable components, application navigation, interactive functionality, visual presentation, and external integrations.

### 1. Component-Based React Architecture

I structured the application using reusable React components to maintain consistency and simplify development.

Important components include:

| Component | Responsibility |
|---|---|
| `Navbar.js` | Responsive navigation and mobile menu |
| `Footer.js` | Restaurant information, links, contact details, and maps |
| `Layout.js` | Shared application layout and page-level behaviour |
| `HomePage.js` | Homepage and its individual sections |
| `MenuPage.js` | Menu rendering, filters, and image previews |
| `GalleryPage.js` | Restaurant gallery and guest moments |
| `AboutPage.js` | Restaurant story and philosophy |
| `ContactPage.js` | Contact details, map, and enquiry form |

I also worked with the reusable UI component collection under `src/components/ui/`.

It contains Radix-based components and reusable interface primitives such as:

- Accordion
- Alert Dialog
- Avatar
- Badge
- Button
- Calendar
- Card
- Carousel
- Checkbox
- Dialog
- Dropdown Menu
- Form
- Input
- Navigation Menu
- Popover
- Select
- Tabs
- Toast
- Tooltip

This component-oriented structure helped me understand how to build maintainable interfaces rather than repeatedly writing similar UI markup.

### 2. React Hooks and State Management

One of the important learning outcomes of this project was gaining practical experience with React hooks and component-level state management.

**React hooks used in the implementation:**

**`useState`**
- Maintains mobile menu visibility.
- Tracks menu category selection.
- Manages Jain and spicy food filters.
- Controls Load More functionality.
- Manages selected gallery images.
- Stores contact form values.
- Handles image upload selections.
- Controls responsive hero video state.

**`useEffect`**
- Detects browser scroll events.
- Handles window resize events.
- Manages event listeners and cleanup.
- Detects video completion.
- Resets UI state when routes change.
- Restores application behaviour when the active route changes.

**`useRef`**
- References the hero video element.
- Tracks horizontal scrolling containers.
- Accesses DOM elements for scroll-based behaviour.

**`useInView` – React Intersection Observer**
- Detects when sections enter the viewport.
- Triggers animations when users scroll to specific sections.
- Helps avoid animating every section immediately on page load.

**`useLocation` – React Router**
- Tracks the current route.
- Highlights the active navigation link.
- Closes the mobile navigation menu after route changes.

Working with these patterns improved my understanding of:

- Component lifecycle and rendering.
- State-driven UI updates.
- Controlled form inputs.
- Event handling and cleanup.
- Browser DOM interactions.
- Reusable component logic.
- Client-side navigation.
- Managing interactive components without unnecessary global state.

**Redux clarification:** Redux is not included in this implementation. The current application uses React's local state management through hooks rather than Redux.

### 3. React Router and Application Navigation

Implemented client-side navigation using React Router DOM.

The application is organised around five primary routes:

| Route | Page |
|---|---|
| `/` | Home |
| `/menu` | Menu |
| `/gallery` | Gallery |
| `/about` | About |
| `/contact` | Contact |

Implemented functionality includes:

- `BrowserRouter` for client-side routing.
- `Routes` and `Route` for page mapping.
- `Link` for navigation without full-page reloads.
- `useLocation` for active navigation states.
- Shared layouts across different pages.
- Scroll-to-top behaviour when navigating between routes.

This helped me gain practical knowledge of SPA architecture and client-side routing.

### 4. Framer Motion and Animation Development

I used Framer Motion to bring the website's interface to life.

Animation implementations include:

- Hero-section entrance animations.
- Text and image transitions.
- Scroll-triggered reveal animations.
- Staggered card animations.
- Hover effects on menu and gallery images.
- Animated mobile navigation.
- Modal opening and closing transitions.
- Smooth image scaling.
- Floating visual elements.
- Responsive animation behaviour.

Combining Framer Motion with React Intersection Observer allowed me to build more controlled, performance-conscious visual interactions.

### 5. Dynamic Menu Rendering and Data Management

The menu is maintained separately from the page components inside:

`src/data/menuData.js`

The data structure contains individual food categories and their associated items.

Each menu item can contain:

- Unique ID.
- Dish name.
- Description.
- Price.
- Jain availability flag.
- Spice level.
- Image URL.

I implemented a helper function:

```javascript
getAllMenuItems()
```

This function combines the category-specific menu items into a single collection, making it easier to perform filtering and rendering operations.

The resulting implementation supports:

- Dynamic category generation.
- Filtering based on category.
- Jain food selection.
- Spice-level filtering.
- Incremental loading.
- Individual menu item rendering.

This strengthened my understanding of JavaScript array methods, object structures, filtering, mapping, state-driven rendering, and reusable data models.

### 6. Advanced Interactive UI Behaviour

Beyond regular page rendering, I implemented several interaction patterns.

**Menu interactions**
- Horizontal category scrolling.
- Category-specific item rendering.
- Saved scroll positions.
- Dynamic item loading.
- Filter combinations.
- Image preview modal.

**Gallery interactions**
- Image selection.
- Previous and next navigation.
- Keyboard event handling.
- Image modal state management.
- Profile image previews.
- Multiple image selection controls.

**Navigation interactions**
- Scroll-aware navbar styling.
- Active route detection.
- Mobile navigation overlay.
- Animated navigation transitions.

These features gave me practical exposure to handling complex UI behaviour through component state and browser events.

### 7. Responsive UI and Design System

I used Tailwind CSS alongside custom CSS to establish the restaurant's visual identity.

The design follows a premium dining aesthetic using:

- Deep green and emerald backgrounds.
- Warm gold accent colours.
- Cormorant Garamond typography.
- Inter body typography.
- Responsive grids.
- Image-focused sections.
- Consistent spacing.
- Interactive hover states.
- Mobile-friendly navigation.

I also implemented separate desktop and mobile layouts where the experience required different presentation behaviour.

The website was designed to support:

- Desktop browsers.
- Tablets.
- Android devices.
- Mobile browsers.

### 8. Third-Party Integrations and Media Management

The project uses several external services to support its presentation.

**Cloudinary**
- Restaurant logo and branding assets.
- Food photography.
- Interior images.
- Hero background images.
- Mobile hero video.
- Other visual assets.

**Google Maps**
- Embedded restaurant location.
- External directions link.

**Instagram**
- Official restaurant social profile.
- Social links in the footer.

**PostHog**
- Client-side analytics script configured in the main HTML document.

These integrations provided practical experience working with external media URLs, embedded content, third-party scripts, and external navigation.

---

## Project Architecture

```text
Madhukunj-Pure-Veg/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   │
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   │
│   │   └── ui/
│   │       ├── accordion.jsx
│   │       ├── alert-dialog.jsx
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── carousel.jsx
│   │       ├── dialog.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── form.jsx
│   │       ├── input.jsx
│   │       ├── select.jsx
│   │       ├── tabs.jsx
│   │       ├── toast.jsx
│   │       └── ...
│   │
│   ├── data/
│   │   └── menuData.js
│   │
│   ├── hooks/
│   │   └── use-toast.js
│   │
│   ├── lib/
│   │   └── utils.js
│   │
│   └── pages/
│       ├── HomePage.js
│       ├── MenuPage.js
│       ├── GalleryPage.js
│       ├── AboutPage.js
│       └── ContactPage.js
│
├── craco.config.js
├── tailwind.config.js
├── postcss.config.js
├── components.json
├── vercel.json
├── package.json
└── yarn.lock
```

---

## Getting Started

### Prerequisites

- Node.js
- Yarn package manager (1.22.22 as specified in the project)
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/engineer-yash/Madhukunj-Pure-Veg.git
```

Navigate into the project:

```bash
cd Madhukunj-Pure-Veg
```

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn start
```

Open the application:

```text
http://localhost:3000
```

### Available Scripts

| Command | Description |
|---|---|
| `yarn start` | Starts the development server through CRACO |
| `yarn build` | Creates the optimised production build |
| `yarn test` | Runs the configured Create React App test runner |

### Deployment

The repository includes a `vercel.json` configuration for static deployment.

The production build output directory is:

```text
build/
```

The project is configured to use Vercel's static-build deployment process.

---

## Current Implementation Notes

A few capabilities are currently frontend prototypes rather than complete backend integrations.

| Feature | Current implementation |
|---|---|
| Menu | Static JavaScript data with interactive filtering |
| Contact form | React state and browser-side confirmation |
| Guest photo upload | Frontend upload interface, no persistent upload |
| Guest moments | Predefined demonstration data |
| Restaurant images | Cloudinary-hosted media |
| Navigation | React Router client-side navigation |
| Analytics | PostHog client script configured |

Potential future enhancements include:

- Backend API for contact enquiries.
- Email notifications for restaurant enquiries.
- Cloudinary or another storage integration for guest photo uploads.
- Admin panel for menu and pricing management.
- Dynamic menu management through a database.
- Restaurant reservation and table-booking functionality.
- Customer review and testimonial management.

---

## My Development Experience – YG Web Studio

This freelance project gave me practical experience developing a complete customer-facing React application for a real business.

Throughout the development process, I strengthened my understanding of:

1. **React Development:** Building reusable components, handling state, managing props, and implementing interactive behaviour.
2. **React Hooks:** Working with `useState`, `useEffect`, `useRef`, and custom/external hooks.
3. **React Router:** Implementing a multi-page single-page application.
4. **JavaScript:** Working with arrays, objects, filtering, mapping, event handling, and dynamic rendering.
5. **Framer Motion:** Creating smooth transitions, scroll-triggered animations, and interactive UI experiences.
6. **Tailwind CSS:** Building responsive layouts and consistent design systems.
7. **Third-Party Integrations:** Working with Cloudinary, Google Maps, Instagram, and PostHog.
8. **UI Architecture:** Organising reusable components and separating presentation from structured data.
9. **Client Requirements:** Translating a restaurant's branding, food philosophy, and content into an actual digital product.

Most importantly, this project helped me understand how frontend technologies work together in a real-world freelance development environment, beyond isolated tutorials and practice applications.

---

## Developer Credits

**Designed & Developed by YG Web Studio**

**Developer:** Yash Gohel  
**Studio:** YG Web Studio

Portfolio: [YG Web Studio](https://ygwebstudio.vercel.app/)

GitHub Repository: [Madhukunj-Pure-Veg](https://github.com/engineer-yash/Madhukunj-Pure-Veg)

---

## Acknowledgements

The restaurant's brand identity, menu information, photography, content, and business details are presented for Madhukunj – Pure Veg.

All restaurant trademarks, branding, images, and business content belong to their respective owners.

**© Madhukunj – Pure Veg. All rights reserved.**
