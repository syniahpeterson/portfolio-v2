import allConstructionDesktop from "../assets/projects/all-construction-services/desktop.webp";
import allConstructionMobile from "../assets/projects/all-construction-services/mobile.webp";

import allConstructionBeforeDesktop from "../assets/projects/all-construction-services/before-desktop.webp";
import allConstructionBeforeMobile from "../assets/projects/all-construction-services/before-mobile.webp";

import secondRunDesktop from "../assets/projects/second-run-logistics/desktop.webp";
import secondRunMobile from "../assets/projects/second-run-logistics/mobile.webp";

import pieZanosDesktop from "../assets/projects/pie-zanos-pizza/desktop.webp";
import pieZanosMobile from "../assets/projects/pie-zanos-pizza/mobile.webp";

import pieZanosBeforeDesktop from "../assets/projects/pie-zanos-pizza/before-desktop.webp";
import pieZanosBeforeMobile from "../assets/projects/pie-zanos-pizza/before-mobile.webp";

import blessBunnyDesktop from "../assets/projects/bless-bunny-rabbitry/desktop.webp";
import blessBunnyMobile from "../assets/projects/bless-bunny-rabbitry/mobile.webp";

import blessBunnyBeforeDesktop from "../assets/projects/bless-bunny-rabbitry/before-desktop.webp";
import blessBunnyBeforeMobile from "../assets/projects/bless-bunny-rabbitry/before-mobile.webp";

import movieWatchlistDesktop from "../assets/projects/movie-watchlist/desktop.webp";
import movieWatchlistMobile from "../assets/projects/movie-watchlist/mobile.webp";

import cryptoPriceTrackerDesktop from "../assets/projects/crypto-price-tracker/desktop.webp";
import cryptoPriceTrackerMobile from "../assets/projects/crypto-price-tracker/mobile.webp";

import nicholeBeautyDesktop from "../assets/projects/nichole-beauty-co/desktop.webp";
import nicholeBeautyMobile from "../assets/projects/nichole-beauty-co/mobile.webp";

const projects = [
  {
    id: "all-construction-services",
    slug: "all-construction-services",
    title: "All Construction Services",
    type: "Website Modernization",
    category: "business",
    status: "completed-client",
    featured: true,

    description:
      "Modernized an existing construction company website with a focus on usability, accessibility, SEO, responsive design, and lead generation.",

    role: "Freelance Web Developer",
    timeline: "June 2026 - August 2026",

    technologies: ["React", "Tailwind CSS", "Resend", "Vercel"],

    image: allConstructionDesktop,
    imageAlt:
      "Redesigned All Construction Services website displayed on a desktop screen",

    mobileImage: allConstructionMobile,
    mobileImageAlt:
      "Redesigned All Construction Services website displayed on a mobile screen",

    liveUrl: "https://www.allconstructionsvs.com/",
    githubUrl: "https://github.com/syniahpeterson/ACS",

    caseStudy: {
      overview:
        "All Construction Services needed a modern web presence that could better communicate its services, establish credibility, and make it easier for potential customers to request an estimate.",

      challenge:
        "The existing website needed improvements to its visual presentation, responsive experience, accessibility, SEO, and lead-generation experience.",

      approach:
        "I rebuilt the experience around a clearer information hierarchy, stronger calls to action, responsive layouts, accessible interactions, and a modern visual system.",

      solution:
        "The redesigned website provides a cleaner and more professional experience while making important information and contact actions easier to find.",

      responsibilities: [
        "Frontend development",
        "Responsive design",
        "Accessibility implementation",
        "SEO optimization",
        "Lead capture",
        "Deployment",
      ],

      outcome:
        "A modernized, responsive website designed to provide a stronger user experience and create a clearer path toward requesting an estimate.",

      before: {
        desktop: allConstructionBeforeDesktop,
        desktopAlt:
          "Original All Construction Services website displayed on desktop",

        mobile: allConstructionBeforeMobile,
        mobileAlt:
          "Original All Construction Services website displayed on mobile",
      },

      after: {
        desktop: allConstructionDesktop,
        desktopAlt:
          "Redesigned All Construction Services website displayed on desktop",

        mobile: allConstructionMobile,
        mobileAlt:
          "Redesigned All Construction Services website displayed on mobile",
      },

      gallery: [],
    },

    previousProject: null,
    nextProject: "second-run-logistics",
  },

  {
    id: "second-run-logistics",
    slug: "second-run-logistics",
    title: "Second Run Logistics",
    type: "Website Development From Scratch",
    category: "business",
    status: "completed-client",
    featured: true,

    description:
      "Built a logistics company website from scratch, including visual identity, responsive design, accessibility, SEO, contact functionality, and deployment.",

    role: "Freelance Web Developer",
    timeline: "August 2023 - September 2025",

    technologies: ["React", "EmailJS", "Vercel"],

    image: secondRunDesktop,
    imageAlt: "Second Run Logistics website displayed on a desktop screen",

    mobileImage: secondRunMobile,
    mobileImageAlt: "Second Run Logistics website displayed on a mobile screen",

    liveUrl: "https://secondrunlogistics.com/",
    githubUrl: "https://github.com/syniahpeterson/SecondRunLogistics",

    caseStudy: {
      overview:
        "Second Run Logistics needed a professional web presence that could clearly communicate its services and provide potential customers with an easy way to learn more and get in touch.",

      challenge:
        "The project required building the website from scratch while creating a responsive experience that clearly presented the company's services and information.",

      approach:
        "I developed the site from the ground up with a focus on clear content organization, responsive layouts, straightforward navigation, and accessible interactions.",

      solution:
        "The completed website provides Second Run Logistics with a dedicated online presence designed around its services, brand, and customer communication needs.",

      responsibilities: [
        "Frontend development",
        "Responsive design",
        "Website architecture",
        "Accessibility implementation",
        "Contact functionality",
        "Deployment",
      ],

      outcome:
        "A complete responsive business website built from scratch and deployed for client use.",

      before: null,
      after: null,

      gallery: [],
    },

    previousProject: "all-construction-services",
    nextProject: "pie-zanos-pizza",
  },

  {
    id: "pie-zanos-pizza",
    slug: "pie-zanos-pizza",
    title: "Pie-Zano's Pizza",
    type: "Website Modernization",
    category: "business",
    status: "concept",
    featured: true,

    description:
      "A website modernization concept for a local pizza restaurant using a modern dark design, React, Sanity CMS, and Resend.",

    role: "Web Developer",
    timeline: "July 2026 - August 2026",

    technologies: ["React", "Sanity", "Resend", "Vercel"],

    image: pieZanosDesktop,
    imageAlt:
      "Redesigned Pie-Zano's Pizza website concept displayed on a desktop screen",

    mobileImage: pieZanosMobile,
    mobileImageAlt:
      "Redesigned Pie-Zano's Pizza website concept displayed on a mobile screen",

    liveUrl: "https://pie-zanos-pizza.vercel.app/",
    githubUrl: "https://github.com/syniahpeterson/Pie-Zanos-Pizza",

    caseStudy: {
      overview:
        "Pie-Zano's Pizza provided an opportunity to explore how a local restaurant website could be modernized with a stronger visual identity, clearer content hierarchy, and a more engaging responsive experience.",

      challenge:
        "The existing experience provided an opportunity for improvement in visual presentation, content organization, responsiveness, and the overall customer experience.",

      approach:
        "I explored a modern dark visual direction with strong typography, clear content sections, responsive layouts, and a structure designed to support future content management.",

      solution:
        "The redesigned concept creates a more polished restaurant experience with a modern interface and clearer pathways to important restaurant information.",

      responsibilities: [
        "Frontend development",
        "Responsive design",
        "Visual design implementation",
        "Content architecture",
        "CMS integration",
        "Deployment",
      ],

      outcome:
        "A modern restaurant website concept demonstrating responsive frontend development and a scalable content structure.",

      before: {
        desktop: pieZanosBeforeDesktop,
        desktopAlt:
          "Original Pie-Zano's Pizza website displayed on a desktop screen",

        mobile: pieZanosBeforeMobile,
        mobileAlt:
          "Original Pie-Zano's Pizza website displayed on a mobile screen",
      },

      after: {
        desktop: pieZanosDesktop,
        desktopAlt:
          "Redesigned Pie-Zano's Pizza website displayed on a desktop screen",

        mobile: pieZanosMobile,
        mobileAlt:
          "Redesigned Pie-Zano's Pizza website displayed on a mobile screen",
      },

      gallery: [],
    },

    previousProject: "second-run-logistics",
    nextProject: "bless-bunny-rabbitry",
  },

  {
    id: "bless-bunny-rabbitry",
    slug: "bless-bunny-rabbitry",
    title: "Bless Bunny Rabbitry",
    type: "Website Modernization",
    category: "business",
    status: "in-progress",
    featured: false,

    description:
      "A modernization project focused on reducing visual clutter, improving content hierarchy, responsiveness, and usability.",

    role: "Web Developer",
    timeline: "June 2026",

    technologies: ["React", "Vercel"],

    image: blessBunnyDesktop,
    imageAlt:
      "Bless Bunny Rabbitry website modernization displayed on a desktop screen",

    mobileImage: blessBunnyMobile,
    mobileImageAlt:
      "Bless Bunny Rabbitry website modernization displayed on a mobile screen",

    liveUrl: "https://bless-bunny-rabbitry.vercel.app/",
    githubUrl: "https://github.com/syniahpeterson/Bless-Bunny-Rabbitry",

    caseStudy: {
      overview:
        "Bless Bunny Rabbitry provided an opportunity to modernize an existing website and create a cleaner experience for presenting the rabbitry's information.",

      challenge:
        "The existing website contained visual clutter and opportunities to improve content hierarchy, responsiveness, and usability.",

      approach:
        "I focused on simplifying the visual presentation, improving information hierarchy, creating more responsive layouts, and making the experience easier to navigate.",

      solution:
        "The modernization creates a cleaner interface with improved organization and a more responsive experience across screen sizes.",

      responsibilities: [
        "Frontend development",
        "Responsive design",
        "Content hierarchy",
        "UI modernization",
        "Usability improvements",
      ],

      outcome:
        "A cleaner and more structured website experience designed to make the rabbitry's information easier to navigate and understand.",

      before: {
        desktop: blessBunnyBeforeDesktop,
        desktopAlt:
          "Original Bless Bunny Rabbitry website displayed on desktop",

        mobile: blessBunnyBeforeMobile,
        mobileAlt: "Original Bless Bunny Rabbitry website displayed on mobile",
      },

      after: {
        desktop: blessBunnyDesktop,
        desktopAlt:
          "Modernized Bless Bunny Rabbitry website displayed on desktop",

        mobile: blessBunnyMobile,
        mobileAlt:
          "Modernized Bless Bunny Rabbitry website displayed on mobile",
      },

      gallery: [],
    },

    previousProject: "pie-zanos-pizza",
    nextProject: "movie-watchlist",
  },

  {
    id: "movie-watchlist",
    slug: "movie-watchlist",
    title: "Movie Watchlist",
    type: "Web Application",
    category: "application",
    status: "personal",
    featured: false,

    description:
      "A React application demonstrating API integration, search, debouncing, custom hooks, state management, filtering, ratings, watch status, and localStorage.",

    role: "Frontend Developer",
    timeline: "April 2026",

    technologies: ["React", "JavaScript", "OMDb API"],

    image: movieWatchlistDesktop,
    imageAlt: "Movie Watchlist web application displayed on a desktop screen",

    mobileImage: movieWatchlistMobile,
    mobileImageAlt:
      "Movie Watchlist web application displayed on a mobile screen",

    liveUrl: "https://movie-watchlist-app-opal-one.vercel.app/",
    githubUrl: "https://github.com/syniahpeterson/movie-watchlist-app",

    caseStudy: true,

    previousProject: "bless-bunny-rabbitry",
    nextProject: "crypto-price-tracker",
  },

  {
    id: "crypto-price-tracker",
    slug: "crypto-price-tracker",
    title: "Crypto Price Tracker",
    type: "Web Application",
    category: "application",
    status: "personal",
    featured: false,

    description:
      "A React application demonstrating API integration, reusable hooks, multi-step data fetching, filtering, and responsive interface states.",

    role: "Frontend Developer",
    timeline: "April 2026",

    technologies: ["React", "JavaScript", "CoinGecko API"],

    image: cryptoPriceTrackerDesktop,
    imageAlt:
      "Crypto Price Tracker web application displayed on a desktop screen",

    mobileImage: cryptoPriceTrackerMobile,
    mobileImageAlt:
      "Crypto Price Tracker web application displayed on a mobile screen",

    liveUrl: "https://crypto-price-tracker-kappa-rose.vercel.app/",
    githubUrl: "https://github.com/syniahpeterson/crypto-price-tracker",

    caseStudy: true,

    previousProject: "movie-watchlist",
    nextProject: "nichole-beauty-co",
  },

  {
    id: "nichole-beauty-co",
    slug: "nichole-beauty-co",
    title: "Nichole's Beauty Co.",
    type: "E-Commerce Web Application",
    category: "application",
    status: "personal",
    featured: false,

    description:
      "A full-featured e-commerce frontend built with React and Redux Toolkit featuring dynamic product browsing, URL-based category filtering, persistent cart state, and a Stripe hosted checkout flow.",

    role: "Frontend Developer",
    timeline: "April 2026",

    technologies: [
      "React",
      "Redux Toolkit",
      "React Router",
      "JavaScript",
      "CSS",
      "Stripe",
      "Vercel",
    ],

    image: nicholeBeautyDesktop,
    imageAlt:
      "Nichole's Beauty Co. e-commerce website displayed on a desktop screen",

    mobileImage: nicholeBeautyMobile,
    mobileImageAlt:
      "Nichole's Beauty Co. e-commerce website displayed on a mobile screen",

    liveUrl: "https://nichole-beauty-co.vercel.app",
    githubUrl: "https://github.com/syniahpeterson/Nichole-Beauty-Co",

    caseStudy: {
      overview:
        "Nichole's Beauty Co. is an e-commerce application built to demonstrate a complete frontend shopping experience using React and Redux Toolkit.",

      challenge:
        "The application needed to support product discovery, category filtering, persistent cart state, quantity management, and a checkout experience while maintaining a responsive interface.",

      approach:
        "I structured the application around reusable React components, centralized cart state with Redux Toolkit, URL-based filtering, persistent localStorage data, and a hosted Stripe checkout flow.",

      solution:
        "The resulting application provides a complete shopping workflow from browsing products through cart management and checkout.",

      responsibilities: [
        "Frontend development",
        "Component architecture",
        "State management",
        "Routing",
        "Product filtering",
        "Cart functionality",
        "Checkout integration",
        "Responsive design",
      ],

      outcome:
        "A functional e-commerce frontend demonstrating application architecture, state management, persistent client-side data, and third-party checkout integration.",

      before: null,
      after: null,

      gallery: [],
    },

    previousProject: "crypto-price-tracker",
    nextProject: null,
  },
];

export default projects;
