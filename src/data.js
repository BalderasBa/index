const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/index",
  title: "HY.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Hallousse Yehya",
  role: "Frontend Dev & Graphic designer",
  description:
    "Meticulous web developer with over 4 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. W3C certified. Implemented new responsive website approach which increased mobile traffic.",
  // resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/yehya-hallousse-33644316a",
    github: "https://github.com/BalderasBa",
    twitter: "https://twitter.com/Ba_Lder_As",
    youtube: "https://youtube.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: "Tesla Clone",
    description: "Tesla clone App using ReactJs, Styled Components and Redux/Toolkit",
    stack: ["React", "Styled Components", "Redux/Toolkit"],
    // sourceCode: "https://github.com",
    livePreview: "https://balderasba.github.io/teslaclone/",
    backgroundImg: "https://i.ibb.co/10SvmTH/tesla.jpg",
  },
  {
    name: "LinkedIn Clone",
    description: "LinkedIn clone React App using Styled Components and Redux",
    stack: ["React", "Styled Components", "Redux"],
    livePreview: "https://balderasba.github.io/linkedinclone/",
    backgroundImg: "https://i.ibb.co/s6BwCdT/linkedin1.jpg",
  },
  {
    name: "Ecommerce",
    description: "This is an E-commerce UI using React.js",
    stack: ["React", "Styled Components"],
    livePreview: "https://balderasba.github.io/react-ecommerce/",
    backgroundImg: "https://i.ibb.co/s3kBJsb/eshop.jpg",
  },
  {
    name: "Admin Dashboard",
    description: "This is an E-commerce Admin panel UI using React.js",
    stack: ["React", "Styled Components"],
    livePreview: "https://balderasba.github.io/admin_panel/",
    backgroundImg: "https://i.ibb.co/CwBTp7X/react-admin-panel.jpg",
  },
  {
    name: "JS Ecommerce",
    description:
      "by using just vanella javaScript I did this small-e-commerce website, data base on localstorage",
    stack: ["JavaScript", "SASS"],
    livePreview: "https://balderasba.github.io/JSecommerce/src/signup.html",
    backgroundImg: "https://i.ibb.co/fDcWzsM/jsecommerce.jpg",
  },
  {
    name: "Ystore",
    description: "Bilingual website template (English, Arabic)",
    stack: ["WordPress", "WooComerce", "Elememtor", "Yoast SEO", "..."],
    // sourceCode: "https://github.com",
    livePreview: "https://dev-yehyaecommerce.pantheonsite.io/",
    backgroundImg: "https://i.ibb.co/RTzGprL/ystore.jpg",
  },
  {
    name: "Multivendor E-commerce",
    description:
      "SPMV is a full multivendor E-commerce website built with Elementor, WooCommerce, Dokan, Stripe and more other plugins and addons on WordPress CMS",
    stack: ["WordPress", "WooComerce", "Elememtor", "Dokan", "..."],
    // sourceCode: "https://github.com",
    livePreview: "https://dev-yh-multivendor.pantheonsite.io/",
    backgroundImg: "https://i.ibb.co/VCwVStt/SPMV-home-products.jpg",
  },
  {
    name: "Portfolio",
    description: "5 pages using the CSS preprocessor Sass",
    stack: ["Sass", "HTML5"],
    livePreview: "https://balderasba.github.io/scss-portfolio/",
    backgroundImg: "https://i.ibb.co/QnRxyg3/portfolio.jpg",
  },
  {
    name: "Movies",
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    livePreview: "https://balderasba.github.io/Movies/",
    backgroundImg: "https://i.ibb.co/KrVFDw0/movies.jpg",
  },
  {
    name: "YSound",
    description: "Cloning for soundsnap.com (home page)",
    stack: ["HTML5", "CSS3", "JS"],
    livePreview: "https://balderasba.github.io/Ysound/",
    backgroundImg: "https://i.ibb.co/QKVXQvR/ysounds.jpg",
  },
  {
    name: "Template 2",
    description: "PDS To HTML One Page website",
    stack: ["HTML5", "CSS3", "JS"],
    livePreview: "https://balderasba.github.io/template2/",
    backgroundImg: "https://i.ibb.co/8c2kj2p/template2.jpg",
  },
  {
    name: "Metabook",
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    livePreview: "https://balderasba.github.io/metabook/",
    backgroundImg: "https://i.ibb.co/pR1DVWb/metabook.jpg",
  },
  {
    name: "Memory Card Game",
    description: "Description here",
    stack: ["React", "Context"],
    livePreview: "https://balderasba.github.io/memory-game/",
    backgroundImg: "https://i.ibb.co/jrNpgFX/momorygame.jpg",
  },
  {
    name: "Quiz Game OOP",
    description: "Quiz Game using JavaScript oriented object programming",
    stack: ["OOP", "JavaScript", "CSS3", "HTML5"],
    // sourceCode: "https://github.com",
    livePreview: "https://balderasba.github.io/quizgameoop/",
    backgroundImg: "https://i.ibb.co/DCFwdNR/quizoop.jpg",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML5",
  "CSS3",
  "BootStrap5",
  "Json",
  "AJAX",
  "JavaScript",
  "ES6",
  "React",
  "Redux",
  "SASS",
  "Git & GitHub",
  "Rest API",
  "CI/CD",
  "Adobe Ai",
  "Adobe Ps",
  "WordPress",
  "Elementor",
  "WooComerce",
  "Dokan",
  "العربية",
  "English",
  "Français",
  "Problem Solving",
  "DOM Manipulation",
  "Clean Code",
  "DeadLine Respect",
  "Serious, Rigorous, Autonomous & Cooperative",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "mailto:hallousse.yehya@gmail.com",
  messenger: "https://m.me/100008144798570",
  whatsapp: "https://api.whatsapp.com/?phone=+213776920565 ",
};

export { header, about, projects, skills, contact };
