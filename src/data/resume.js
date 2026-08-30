const resume = {
  title: "Frontend Developer & Web Specialist",

  summary:
    "Computer Science graduate with hands-on freelance experience developing responsive, accessible websites and web applications using React, JavaScript, HTML, and CSS. Experienced in building interfaces from scratch, modernizing existing web experiences, integrating APIs and third-party services, creating reusable components, and deploying production websites. Strong foundation in responsive design, accessibility, REST APIs, Git/GitHub, and user-focused development.",

  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],

    development: [
      "Component-Based Architecture",
      "State Management",
      "REST APIs",
      "API Integration",
      "DOM Manipulation",
      "Reusable Components",
    ],

    tools: [
      "Git",
      "GitHub",
      "Vercel",
      "Sanity CMS",
      "Resend",
      "EmailJS",
      "VS Code",
      "Figma",
    ],

    quality: [
      "Accessibility",
      "Responsive Design",
      "Manual Testing",
      "UI/UX Principles",
      "SEO",
      "Cross-Browser Testing",
    ],
  },

  experience: [
    {
      role: "Freelance Web Developer",
      company: "All Construction Services LLC",
      dates: "June 2026 – August 2026",

      bullets: [
        "Modernized a legacy construction website into a high-performance React application, translating complex client business requirements into a responsive interface.",
        "Architected reusable data files for core business services to decouple content from layout code and simplify future client maintenance.",
        "Engineered responsive layouts, semantic HTML, accessibility practices, and technical SEO improvements to support cross-device usability and search discoverability.",
        "Integrated serverless contact infrastructure using Resend and conducted manual user-flow testing to validate form functionality and error handling.",
        "Designed a refreshed corporate visual identity including a custom logo, strategic color palette, and consistent brand assets.",
        "Deployed the production build to Vercel and managed client-driven iterations through version-controlled development.",
      ],
    },

    {
      role: "Freelance Web Developer",
      company: "Second Run Logistics LLC",
      dates: "August 2023 – September 2025",

      bullets: [
        "Built a customized responsive logistics website from scratch, managing the end-to-end user experience from initial layout through release.",
        "Developed modular, reusable React components to support consistent interfaces across desktop and mobile browsers.",
        "Created a scalable UI system incorporating custom logo design and tailored corporate branding based on client requirements.",
        "Implemented automated email routing through the EmailJS API and performed manual integration testing to validate communication workflows.",
        "Collaborated directly with the business owner on post-launch updates, version control, deployments, and feature iterations.",
      ],
    },
  ],

  projects: [
    {
      name: "Pie-Zano's Pizza",
      type: "Website Modernization",
      technologies: "React · Sanity · Resend · Vercel",

      bullets: [
        "Redesigned a local restaurant website as a modern, mobile-first React application featuring a dark-themed interface.",
        "Integrated Sanity CMS to dynamically manage menu and promotional content without requiring code changes.",
        "Restructured dense information architecture to create clearer navigation for menu, location, hours, and other important restaurant information.",
        "Implemented contact functionality with Resend and deployed the application through Vercel.",
      ],
    },

    {
      name: "Bless Bunny Rabbitry",
      type: "Website Modernization",
      technologies: "React · Sanity",

      bullets: [
        "Overhauled a content-heavy business website with React, resolving mobile responsiveness issues and inconsistent layout spacing.",
        "Simplified information hierarchy to reduce visual clutter and transform dense business information into a more intuitive navigation experience.",
        "Designed a scalable architecture for planned Sanity CMS integration to support future owner-managed inventory and featured content.",
      ],
    },

    {
      name: "Nichole's Beauty Co.",
      type: "E-Commerce Web Application",
      technologies:
        "React · Redux Toolkit · React Router · JavaScript · Stripe",

      bullets: [
        "Built an e-commerce frontend featuring dynamic product browsing, URL-based category filtering, and persistent cart state.",
        "Implemented centralized state management with Redux Toolkit and localStorage persistence for a consistent shopping experience.",
        "Integrated a Stripe hosted checkout flow and structured the application using reusable React components and client-side routing.",
      ],
    },

    {
      name: "Movie Watchlist",
      type: "React Web Application",
      technologies: "React · JavaScript · REST API",

      bullets: [
        "Engineered a state-driven media catalog application using custom hooks, debounced search, and localStorage persistence.",
        "Developed filtering for ratings and watch status while managing loading, empty, and asynchronous error states.",
      ],
    },

    {
      name: "Crypto Price Tracker",
      type: "React Web Application",
      technologies: "React · JavaScript · REST API",

      bullets: [
        "Developed an interactive financial dashboard consuming the CoinGecko API with asynchronous data fetching.",
        "Built UI state handling for network loading states, currency filters, and dynamic data tables.",
      ],
    },
  ],

  education: {
    degree:
      "B.S. Computer Science — Web/Mobile Development & Software Engineering",
    institution: "University of North Carolina at Charlotte",
    details: "Dean's List • S-STEM Scholars Scholarship",
    date: "December 2024",
  },

  certifications: [
    "Responsive Web Design — freeCodeCamp",
    "JavaScript Algorithms and Data Structures — freeCodeCamp",
    "Frontend Development Libraries — freeCodeCamp",
    "Data Visualization — freeCodeCamp",
  ],
};

export default resume;
