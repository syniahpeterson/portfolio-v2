export const siteIdentity = {
  name: "Syniah Peterson",
  title: "Frontend Developer & Web Specialist",
  description:
    "I build, modernize, and improve responsive websites and web applications with a focus on usability, accessibility, and clean, maintainable code.",
};

export const pageMetadata = {
  "/": {
    description: siteIdentity.description,
  },
  "/work": {
    title: "Work",
    description:
      "Explore web development projects by Syniah Peterson, including client website modernizations, web applications, and frontend concepts.",
  },
  "/about": {
    title: "About",
    description:
      "Learn about Syniah Peterson, a Frontend Developer and Web Specialist focused on responsive, accessible, and maintainable web experiences.",
  },
  "/resume": {
    title: "Resume",
    description:
      "Review Syniah Peterson's resume, including frontend development skills, project work, professional experience, education, and certifications.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Contact Syniah Peterson about frontend development opportunities, website projects, and web modernization work.",
  },
};

export const notFoundMetadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
  noIndex: true,
};

export function getPageTitle(title) {
  return title
    ? `${title} | ${siteIdentity.name}`
    : `${siteIdentity.name} | ${siteIdentity.title}`;
}
