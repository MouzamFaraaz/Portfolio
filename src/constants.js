// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/ssc.jpeg';
import bsaLogo from './assets/education_logo/jntuh.jpeg';
import vpsLogo from './assets/education_logo/tsbie.jpeg';

// Project Section Logo's
import book from './assets/work_logo/bookstore.png';
import movie from './assets/work_logo/movie.png';
import netflix from './assets/work_logo/netflix.png';
import portfolio from './assets/work_logo/portfolio.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bsaLogo,
    school: 'JNTUH Hyderabad',
    date: 'Aug 2022 - July 2026',
    grade: '8.4 CGPA',
    desc: "I am pursuing my Bachelor's degree in Computer Science & Engineering from Sree Chaitana College of Engineering, affiliated to JNTUH, Karimnagar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: 'Bachelor of Technology - B.Tech (Computer Science & Engineering)',
  },
  {
    id: 1,
    img: vpsLogo,
    school: 'Trinity Junior College, Karimnagar',
    date: 'June 2020 - April 2022',
    grade: '96.5%',
    desc: 'I completed my Intermediate education from Trinity Junior College, Karimnagar, under the Telangana Board of Intermediate Education, where I studied Physics, Chemistry, and Mathematics (PCM).',
    degree: 'TGBIE(Intermediate) - PCM ',
  },
  {
    id: 2,
    img: glaLogo,
    school: 'Golden Era High School, Karimnagar',
    date: 'Apr 2019 - March 2020',
    grade: '10 CGPA',
    desc: 'I completed my class 10 education from Golden Era High School, Karimnagar, under the Board of Secondary Education, Telangana (SSC) board. I achieved a CGPA of 10, which reflects my dedication and hard work during my school years.',
    degree: 'SSC(X)',
  },
];

export const projects = [
  {
    id: 0,
    title: 'Book Store App',
    description:
      'A full-stack web application for managing and purchasing books. Users can browse, search, and add books to their cart, with features like user authentication, and a responsive design. Built using React, Node.js, Express, and MongoDB.',
    image: book,
    tags: ['React JS', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    github: 'https://github.com/MouzamFaraaz/BookStoreAppV2',
    webapp: 'https://book-store-app-v2-dxbq-git-main-mouzam-faraazs-projects.vercel.app/',
  },
  {
    id: 1,
    title: 'Movie Search App',
    description:
      'A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.',
    image: movie,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/MouzamFaraaz/MoviesSearch',
  },
  {
    id: 2,
    title: 'Netflix Clone',
    description:
      'A static web page inspired by Netflix, built using only HTML and CSS for practice. It features a sleek and responsive design, showcasing the homepage layout of Netflix.',
    image: netflix,
    tags: ['HTML', 'CSS', 'Responsive Design'],
    github: 'https://github.com/MouzamFaraaz/projects/tree/master/Netflix%20Clone',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing my skills, projects, and achievements. Built using React.js and Tailwind CSS, it features a responsive design, smooth navigation, and interactive elements to provide an engaging user experience.',
    image: portfolio,
    tags: ['React JS', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/MouzamFaraaz/Portfolio',
  },
];