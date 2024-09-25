// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "PRADO Alan";
export const SITE_TITLE = "PRADO Alan";
export const SITE_DESCRIPTION = "My cybersecurity page";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "iShayne";
export const USER_SITE = "https://prado-alan.netlify.app"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://prado-alan.netlify.app";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "Rootme",
        text: "Rootme WriteUp",
        href: "/blog/categories/rootme",
        svg: "cube",
        target: "_self",
      }, // rootme category
      {
        id: "HackTheBox",
        text: "HackThebox WriteUp",
        href: "/blog/categories/hackthebox",
        svg: "heart",
        target: "_self",
      }, // hactthebox category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "Project",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "contact",
    text: "Contact",
    href: "pradoalan.pro@gmail.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://www.linkedin.com/in/alan-prado-9907611b9/",
    ariaLabel: "Linkedin",
    title: "Linkedin",
    svg: "Linkedin",
  },
  {
    href: "https://github.com/alanprd",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
];
