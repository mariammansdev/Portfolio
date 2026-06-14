import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaGit, FaDatabase } from 'react-icons/fa';
import { SiSencha, SiPlaywright, SiPostman, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import jsImage from './assets/js.png'
import extjsImage from './assets/extjs_logo.png'
import reactImage from './assets/react.png'
import nextImage from './assets/nextjs.png'
import playwrightImage from './assets/playwright.png'
import postmanImage from './assets/postman.png'
import tailwindImage from './assets/tailwind.png'
import sqlImage from './assets/sql.png'
import htmlCssImage from './assets/htmlCss.png'
import gitImage from './assets/git.png'

import apodImg from './assets/apodProj.png'
import mojito from './assets/mojito.png'
import havennhome from './assets/havennhome.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGit className='h-16 w-16 text-customPurple' />,
    text: 'Strong experience with Git, used daily in a collaborative environment for version control, code management, and deployment workflows.',
    image: gitImage
  },
  {
    id: nanoid(),
    title: 'Ext JS',
    icon: <SiSencha  className='h-16 w-16 text-customPurple' />,
    text: 'Highly skilled in Sencha ExtJS, building performant and user-friendly interfaces for company-owned tourism websites',
    image: extjsImage
  },
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-customPurple' />,
    text: 'Solid experience in HTML & CSS, with continuous practice since undergraduate studies and applied in professional projects to build and style responsive web interfaces.',
    image: htmlCssImage
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-customPurple' />,
    text: 'Proficient in JavaScript, with hands-on experience using Node.js and daily development with ExtJS, applying it consistently to build dynamic, data-driven web applications.',
    image: jsImage
  },
    {
    id: nanoid(),
    title: 'SQL',
    icon: <FaDatabase className='h-16 w-16 text-customPurple' />,
    text: 'Working knowledge of Oracle SQL, applying it in real projects to support backend services, including writing queries, and validating data types and constraints.',
    image: sqlImage
  },
    {
    id: nanoid(),
    title: 'Playwright',
    icon: <SiPlaywright className='h-16 w-16 text-customPurple' />,
    text: 'Experience with Playwright, creating and maintaining usability and end-to-end tests for company projects to ensure application reliability.',
    image: playwrightImage
  },
  {
    id: nanoid(),
    title: 'Postman',
    icon: <SiPostman className='h-16 w-16 text-customPurple' />,
    text: 'Experience with Postman, used for API testing, request validation, and collection management in real project workflows.',
    image: postmanImage
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-customPurple' />,
    text: 'Working knowledge of React, with structured learning and consistent hands-on practice through courses and self-driven projects.',
    image: reactImage
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className='h-16 w-16 text-customPurple' />,
    text: 'Basic knowledge of Next.js, recently started learning with hands-on practice and exploration of core concepts.',
    image: nextImage
  },
  {
    id: nanoid(),
    title: 'Tailwind',
    icon: <SiTailwindcss className='h-16 w-16 text-customPurple' />,
    text: 'Tailwind CSS, with solid understanding gained through structured learning and hands-on practice in personal projects.',
    image: tailwindImage
  },
];

export const projects = [
  {
    id: nanoid(),
    img: mojito,
    url: 'https://stunncocktail.netlify.app/',
    // github: 'https://github.com/john-smilga',
    title: 'MoJito',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: apodImg,
    url: 'https://apod4u.netlify.app/',
    // github: 'https://github.com/john-smilga',
    title: 'APOD',
    text: 'We bring you NASA\'s Astronomy Picture of the Day (APOD) in a way that\'s easy, fun, and totally approachable.',
  },
  {
    id: nanoid(),
    img: havennhome,
    url: 'https://havennhome.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Haven&Home',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
