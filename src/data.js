const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/index",
  title: "HY.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Hallousse Yehya",
  role: "Front End Developper",
  description: "& Graphic designer with over 4 years of experience.",
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/yehya-hallousse-33644316a",
    github: "https://github.com",
    twitter: "https://twitter.com/Ba_Lder_As",
    behance: "https://www.behance.net/hallousseyb648",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "LinkedIn Clone",
    description: "Description here",
    stack: ["React", "Styled Components", "Redux"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "",
  },
  {
    name: "Tesla Clone",
    description: "Description here",
    stack: ["React", "Styled Components", "Redux/Toolkit"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://i.ibb.co/10SvmTH/tesla.jpg",
  },
  {
    name: "Memory Card",
    description: "Description here",
    stack: ["React", "Context"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "",
  },
  {
    name: "Ecommerce",
    description: "Description here",
    stack: ["React", "Styled Components", "Redux/Toolkit"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://i.ibb.co/10SvmTH/tesla.jpg",
  },
  {
    name: "Admin Dashboard",
    description: "Description here",
    stack: ["React", "Styled Components", "Redux/Toolkit"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "",
  },
  {
    name: "JS Ecommerce",
    description: "Description here",
    stack: ["JavaScript", "SASS"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://i.ibb.co/fDcWzsM/jsecommerce.jpg",
  },
  {
    name: "Quiz Game",
    description: "Description here",
    stack: ["JavaScript", "CSS3", "HTML5"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "",
  },
  {
    name: "Portfolio",
    description: "Description here",
    stack: ["SCSS", "HTML5"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://i.ibb.co/QnRxyg3/portfolio.jpg",
  },
  {
    name: "Movies",
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://i.ibb.co/KrVFDw0/movies.jpg",
  },
  {
    name: "YSound",
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://i.ibb.co/QKVXQvR/ysounds.jpg",
  },
  {
    name: "Rym Gym",
    description: "Description here",
    stack: ["HTML5", "BootStrap 5"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://ibb.co/R4R5321",
  },
  {
    name: "Template 2",
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    sourceCode: "https://github.com/BalderasBa/template2",
    livePreview: "https://balderasba.github.io/template2/",
    backgroundImg: "https://i.ibb.co/8c2kj2p/template2.jpg",
  },
  {
    name: "Ystore",
    description: "Description here",
    stack: ["WordPress", "WooComerce"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://i.ibb.co/RTzGprL/ystore.jpg",
  },
  {
    name: "Metabook",
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "https://i.ibb.co/pR1DVWb/metabook.jpg",
  },
  {
    name: "Ystore Multivendor",
    description: "Comming soon",
    stack: ["WordPress", "WooComerce"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "",
  },
  {
    name: "Chat Site",
    description: "Comming soon",
    stack: ["Reactjs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
    backgroundImg: "",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML5",
  "CSS3",
  "BootStrap5",
  "JavaScript",
  "React",
  "Redux",
  "SASS",
  "Git & GitHub",
  "CI/CD",
  "Adobe Ai",
  "Adobe Ps",
  "Visual Basic",
  "WordPress",
  "Elementor",
  "WooComerce",
  "العربية",
  "English",
  "Français",
  "Problem Solving",
  "Problem Solving",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "hallousse.yehya@gmail.com",
};

export { header, about, projects, skills, contact };
