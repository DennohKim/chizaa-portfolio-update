import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import postgreSql from '/public/asset/icons/postgreSql.png';
import bootstrap from '/public/asset/icons/bootstrap.png';
import docker from '/public/asset/icons/docker.png';
import express from '/public/asset/icons/express.png';
import mongoDB from '/public/asset/icons/mongoDB.png';
import neoVim from '/public/asset/icons/neoVim.png';
import next from '/public/asset/icons/next.png';
import node from '/public/asset/icons/node.png';
import react from '/public/asset/icons/react.png';
import redux from '/public/asset/icons/redux.png';
import sass from '/public/asset/icons/sass.png';
import tailwind from '/public/asset/icons/tailwind.png';
import typescript from '/public/asset/icons/typescript.png';
import vite from '/public/asset/icons/vite.png';

import fawflix from '/public/asset/projects/fawflix.webp';
import gbdc from '/public/asset/projects/gbdc.webp';
import LovelyMusic from '/public/asset/projects/lovelyMusic.webp';
import lovelytube from '/public/asset/projects/lovelytube.webp';
import lranslate from '/public/asset/projects/lranslate.webp';
import sumz from '/public/asset/projects/sumz.webp';
import fiverr from '/public/asset/fiverr.png';
import freelancer from '/public/asset/freelancer.jpeg';
import upwork from '/public/asset/upwork.png';

export {
  LovelyMusic,
  bootstrap,
  docker,
  express,
  fawflix,
  gbdc,
  lovelytube,
  lranslate,
  mongoDB,
  next,
  postgreSql,
  node,
  react,
  redux,
  sass,
  sumz,
  tailwind,
  typescript,
  vite,
};

export const mySkills = [
  {
    name: 'Next.js',
    icon: next,
  },
  {
    name: 'React.js',
    icon: react,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node.js',
    icon: node,
  },
  {
    name: 'Express.js',
    icon: express,
  },
  {
    name: 'MongoDB',
    icon: mongoDB,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Vite',
    icon: vite,
  },
  {
    name: 'PostgreSQL',
    icon: postgreSql,
  },

  {
    name: 'Docker',
    icon: docker,
  },
];

export const myExperiences = [
  {
    year: 'Aug 2022 - Present',
    work: [
      {
        name: 'Front-End Software Engineer',
        company: 'Silvi Protocol',
        desc: 'Silvi is a trailblazing company committed to fostering global reForestation, I play a pivotal role in building an intuitive user friendly app that creates opportunities for tree stewards worldwide.',
      },
    ],
  },
  {
    year: 'Apr 2017 - July 2022',
    work: [
      {
        name: 'Freelance UI/UX Consultant and Web Developer',
        company: 'Chizaalabs',
        desc: 'Developing user personas, building user flows, affinity diagramming, building layouts and reusable components, creating UI animations. Building websites and web apps.',
      },
    ],
  },
];

export const sliderNavigation = [
  {
    name: 'Dashboard',

    icon: HomeIcon,
    current: true,
  },
  {
    name: 'Review',

    icon: UsersIcon,
    current: false,
  },
  {
    name: 'Projects',

    icon: FolderIcon,

    current: false,
  },
  {
    name: 'Skills',
    icon: CalendarIcon,

    current: false,
  },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];

export const projects = [
  {
    title: 'Nafter',
    imgUrl: fawflix,
    projectLink: 'https://nft-marketplace-dof7f3erp-dennohkim.vercel.app/',
    codeLink: 'https://fawflix.vercel.app/',
    description:
      'A marketplace platform for users to buy and sell Non-Fungible-Tokens',
    tags: ['React', 'Next.js', 'Web3'],
  },
  {
    title: 'TumainiDAO',
    imgUrl: gbdc,
    projectLink: 'https://tumainid-a-o.vercel.app/',
    codeLink: 'https://github.com/AariyanApu/gbdc',
    description:
      'TumainiDAO is a non-profit Decentralised Application Organization that looks to empower the African Girl Child ',
    tags: ['Next.js', 'React', 'Web3'],
  },
  {
    title: 'Portfolio Site',
    imgUrl: lovelytube,
    projectLink: 'https://www.denniskimathi.dev/',
    codeLink: 'https://lovelytube.vercel.app/',
    description: 'My personal website and blog. Built with Next.js and MDX',
    tags: ['Next.js', 'React', 'Landing Page'],
  },
  {
    title: 'JuakaliKE',
    imgUrl: lranslate,
    projectLink: 'https://juakali-marketplace-d-app-react-app.vercel.app/',
    codeLink: 'https://lranslate.vercel.app/',
    description: 'A marketplace dapp built on celo blockchain',
    tags: ['React', 'Next.js', 'Web3'],
  },
  {
    title: 'CarbonHero',
    imgUrl: LovelyMusic,
    projectLink: 'https://toucan-protocol-sdk-react-app.vercel.app/',
    codeLink: 'https://github.com/DennohKim/toucan-protocol-sdk',
    description: 'Retiring carbon credit on celo blockchain',
    tags: ['React', 'Next.js', 'Web3'],
  },
  {
    title: 'CeloDev Stream',
    imgUrl: sumz,
    projectLink: 'https://codejam-streaming-rewards-react-app.vercel.app/',
    codeLink: 'https://github.com/DennohKim/codejam-streaming-rewards',
    description:
      'Token streaming dapp built with superfluid that rewards developers in celo ecosystem',
    tags: ['React', 'Next.js', 'Web3'],
  },
  {
    title: 'LumenPay',
    imgUrl: sumz,
    projectLink: 'https://lumenpay-website.vercel.app/',
    codeLink: 'https://lumenpay-website.vercel.app/',
    description:
      'A Crypto Payroll Platform to help employers to manage their payroll and pay their employees with crypto ',
    tags: ['React', 'LandingPage', 'UI/UX'],
  },
  {
    title: 'Web3Guardian',
    imgUrl: sumz,
    projectLink: 'https://t.me/web3guardian_utu_bot',
    codeLink: 'https://github.com/Web3Guardian/web3guardian--utu-bot',
    description:
      'A telegram bot that leverages the UTU Web3 Protocol to provide reputation checks on telegram users',
    tags: ['Typescript', 'Web3', 'Telegram Bot'],
  },
];
export const navigation = [
  { name: 'ABOUT ME', href: '/about-me' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'BLOG', href: '/blog' },
  { name: 'RESUME', href: '/resume' },
];

export { fiverr, freelancer, upwork };

export const reviews = [
  {
    title: 'It really works.',
    body: ' It was really amazing working with  Aariyan. We look forward to working with her again on future projects.',
    author: 'MAGDA DU',
    imgSrc: fiverr,
  },
  {
    title: 'You need this app.',
    body: 'I enjoyed working on this project and hope to have the opportunity to work with him again.',
    author: 'Jarred Samuel B.',
    imgSrc: freelancer,
  },
  {
    title: 'On Landing Page.',
    body: 'Thanks for the experience..',
    author: ' Franklin U. ',

    imgSrc: freelancer,
  },
  {
    title: 'Help to fix bug.',
    body: '"Very grateful for the help. Professional content all around, very happy to work , thank you!"',
    author: 'Chris D. ',
    imgSrc: upwork,
  },
  {
    title: 'Figma Web Designer for Shopify/e-commerce',
    body: 'Aariyan was all round excellent to work with. From the work he did for my company,',
    author: 'Stanislav D. ',
    imgSrc: freelancer,
  },
  {
    title: 'Landing Page.',
    body: 'I enjoyed working on this project and hope to have the opportunity to work with him again.',
    author: 'Jarred Samuel B.',
    imgSrc: freelancer,
  },
  {
    title: 'On Landing Page.',
    body: 'Thanks for the experience..',
    author: ' Franklin U. ',

    imgSrc: freelancer,
  },
  {
    title: 'Help to fix bug.',
    body: '"Very grateful for the help. Professional content all around, very happy to work , thank you!"',
    author: 'Chris D. ',
    imgSrc: fiverr,
  },
  {
    title: 'Figma Web Designer for Shopify/e-commerce',
    body: 'Aariyan was all round excellent to work with. From the work he did for my company,',
    author: 'Stanislav D. ',
    imgSrc: fiverr,
  },
];

export const blogPosts = [
  {
    id: '1',
    title: 'How to use React Context API',
    imgUrl: '/asset/react.jpg',
    createdAt: '2023-11-12',
    slug: 'how-to-use-react-context-api',
    desc: 'React Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on.',
  },
  {
    id: '2',
    title: 'How to use React Context API',
    imgUrl: '/asset/react.jpg',
    createdAt: '2023-11-12',
    slug: 'how-to-use-react-context-api',
    desc: 'React Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on.',
  },
  {
    id: '3',
    title: 'How to use React Context API',
    imgUrl: '/asset/react.jpg',
    createdAt: '2023-11-12',
    slug: 'how-to-use-react-context-api',
    desc: 'React Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on.',
  },
];
