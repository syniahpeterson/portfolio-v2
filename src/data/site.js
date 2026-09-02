import { siteIdentity } from "./seo";

const site = {
  ...siteIdentity,

  // Configure VITE_SITE_URL in the Vercel Production environment.
  url: import.meta.env.VITE_SITE_URL?.replace(/\/$/, ""),

  email: "syniahpeterson@gmail.com",

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/syniahpeterson",
    github: "https://github.com/syniahpeterson",
  },

  resumeUrl: "",
};

export default site;
