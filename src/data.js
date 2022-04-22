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
  // resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/yehya-hallousse-33644316a",
    github: "https://github.com",
    twitter: "https://twitter.com/Ba_Lder_As",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: "Tesla Clone",
    description: "Description here",
    stack: ["React", "Styled Components", "Redux/Toolkit"],
    sourceCode: "https://github.com",
    livePreview: "https://balderasba.github.io/teslaclone/",
    backgroundImg: "https://i.ibb.co/10SvmTH/tesla.jpg",
  },
  {
    name: "LinkedIn Clone",
    description: "Description here",
    stack: ["React", "Styled Components", "Redux"],
    livePreview: "https://balderasba.github.io/linkedinclone/",
    backgroundImg: "https://i.ibb.co/s6BwCdT/linkedin1.jpg",
  },
  {
    name: "Ecommerce",
    description: "Description here",
    stack: ["React", "Styled Components", "Redux/Toolkit"],
    livePreview: "https://balderasba.github.io/full-react-ecommerce/",
    backgroundImg: "https://i.ibb.co/s3kBJsb/eshop.jpg",
  },
  {
    name: "Admin Dashboard",
    description: "Description here",
    stack: ["React", "Styled Components", "Redux/Toolkit"],
    livePreview: "https://balderasba.github.io/admin_panel/",
    backgroundImg: "https://i.ibb.co/jgJ4KF6/admindashboard.jpg",
  },
  {
    name: "JS Ecommerce",
    description: "Description here",
    stack: ["JavaScript", "SASS"],
    livePreview: "https://balderasba.github.io/JSecommerce/",
    backgroundImg: "https://i.ibb.co/fDcWzsM/jsecommerce.jpg",
  },
  {
    name: "Ystore",
    description: "Description here",
    stack: ["WordPress", "WooComerce"],
    sourceCode: "https://github.com",
    livePreview: "https://dev-yehyaecommerce.pantheonsite.io/",
    backgroundImg: "https://i.ibb.co/RTzGprL/ystore.jpg",
  },
  {
    name: "Portfolio",
    description: "Description here",
    stack: ["SCSS", "HTML5"],
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
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    livePreview: "https://balderasba.github.io/YSound/",
    backgroundImg: "https://i.ibb.co/QKVXQvR/ysounds.jpg",
  },
  {
    name: "Template 2",
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    livePreview: "https://balderasba.github.io/template2/",
    backgroundImg: "https://i.ibb.co/8c2kj2p/template2.jpg",
  },
  {
    name: "Metabook",
    description: "Description here",
    stack: ["HTML5", "CSS3", "JS"],
    livePreview: "https://balderasba.github.io/YSound",
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
    description: "Description here",
    stack: ["JavaScript", "CSS3", "HTML5"],
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
  "CI/CD",
  "Adobe Ai",
  "Adobe Ps",
  "WordPress",
  "Elementor",
  "WooComerce",
  "العربية",
  "English",
  "Français",
  "Problem Solving",
  "DOM Manipulation",
  "Clean Code",
  "DeadLine Respect",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "mailto:hallousse.yehya@gmail.com",
  messenger: "https://m.me/100008144798570",
  whatsapp: "https://api.whatsapp.com/?phone=+213776920565 ",
};

export { header, about, projects, skills, contact };
