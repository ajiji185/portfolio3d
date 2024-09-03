import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Server Administrator",
    company_name: "Avasiweb Sdn Bhd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developing and maintaining server infrastructure using Linux and related technologies.",
      "Ensuring system reliability and performance through regular monitoring and maintenance.",
      "Implementing security measures to safeguard data and applications.",
      "Collaborating with other IT professionals to enhance system functionalities.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Avasiweb Sdn Bhd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Building and maintaining backend systems using Flask and Python.",
      "Designing and implementing RESTful APIs for various applications.",
      "Optimizing application performance and ensuring high availability.",
      "Participating in code reviews and contributing to project planning.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Avasiweb Sdn Bhd",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developing responsive and interactive web interfaces using React.js.",
      "Integrating front-end components with backend services.",
      "Ensuring cross-browser compatibility and accessibility standards.",
      "Working closely with UX/UI designers to implement modern design trends.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Avasiweb Sdn Bhd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Building end-to-end solutions using both front-end and back-end technologies.",
      "Managing and deploying web applications across various environments.",
      "Collaborating with stakeholders to gather requirements and deliver high-quality solutions.",
      "Maintaining code quality through best practices and automated testing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A clever person solves a problem. A wise person avoids it.",
    name: "Albert Einstein",
    designation: " theoretical physicist",
    company: " theory relativity",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
  },
  {
    testimonial:
      "Talk is cheap. Show me the code.",
    name: "Linus Torvalds",
    designation: "founder",
    company: "Linux ",
    image: "https://www.datocms-assets.com/48294/1627309750-18-web-development-quotes.jpg?auto=format&dpr=0.67&w=1200",
  },
  {
    testimonial:
      "It's all talk until the code runs",
    name: "Ward Cunningham",
    designation: "co-author",
    company: "Manifesto for Agile Software Development",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ward_Cunningham_-_Commons-1.jpg/220px-Ward_Cunningham_-_Commons-1.jpg",
  },
];

const projects = [
  {
    name: "Sepilok Databased & Broadcast System",
    description:
      "Web-based platform that allows Customer to Scan QR to Fill in their details and admin can broadcast any promotions or event.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rumah Terbalik reception & Broadcast System",
    description:
      "Web-based platform that allows Customer to Scan QR to Fill in their details and admin can broadcast any promotions or event.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nasalis Inventory System",
    description:
      "An inventory system to record all the item and manage item in and out at Tanini Sepilok Store.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
