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
      "All Construction Services website redesigned and displayed on a desktop screen",

    mobileImage: allConstructionMobile,
    mobileImageAlt:
      "All Construction Services website redesigned and displayed on a mobile screen",

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

    liveUrl: "https://www.allconstructionsvs.com/",
    githubUrl: "https://github.com/syniahpeterson/ACS",

    caseStudy: true,
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

    technologies: ["React", "EmailJS", "GitHub Pages"],

    image: secondRunDesktop,
    imageAlt: "Second Run Logistics website displayed on a desktop screen",

    mobileImage: secondRunMobile,
    mobileImageAlt: "Second Run Logistics website displayed on a mobile screen",

    liveUrl: "https://secondrunlogistics.com/",
    githubUrl: "https://github.com/syniahpeterson/SecondRunLogistics",

    caseStudy: true,
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

    liveUrl: "https://pie-zanos-pizza.vercel.app/",
    githubUrl: "https://github.com/syniahpeterson/Pie-Zanos-Pizza",

    caseStudy: true,
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

    technologies: ["React"],

    image: blessBunnyDesktop,
    imageAlt:
      "Bless Bunny Rabbitry website modernization displayed on a desktop screen",

    mobileImage: blessBunnyMobile,
    mobileImageAlt:
      "Bless Bunny Rabbitry website modernization displayed on a mobile screen",

    before: {
      desktop: blessBunnyBeforeDesktop,
      desktopAlt: "Original Bless Bunny Rabbitry website displayed on desktop",

      mobile: blessBunnyBeforeMobile,
      mobileAlt: "Original Bless Bunny Rabbitry website displayed on mobile",
    },

    after: {
      desktop: blessBunnyDesktop,
      desktopAlt:
        "Modernized Bless Bunny Rabbitry website displayed on desktop",

      mobile: blessBunnyMobile,
      mobileAlt: "Modernized Bless Bunny Rabbitry website displayed on mobile",
    },

    liveUrl: "https://bless-bunny-rabbitry.vercel.app/",
    githubUrl: "https://github.com/syniahpeterson/Bless-Bunny-Rabbitry",

    caseStudy: true,
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

    caseStudy: false,
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

    caseStudy: false,
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
    ],

    image: nicholeBeautyDesktop,
    imageAlt:
      "Nichole's Beauty Co. e-commerce website displayed on a desktop screen",

    mobileImage: nicholeBeautyMobile,
    mobileImageAlt:
      "Nichole's Beauty Co. e-commerce website displayed on a mobile screen",

    liveUrl: "https://nichole-beauty-co.vercel.app",
    githubUrl: "https://github.com/syniahpeterson/Nichole-Beauty-Co",

    caseStudy: true,
  },
];

export default projects;
