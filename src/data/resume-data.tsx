import ConsultlyLogo from '/public/images/logos/consultly.svg';
import AmbitLogo from '/public/images/logos/ambit.png';
import BarepapersLogo from '/public/images/logos/barepapers.svg';
import BimLogo from '/public/images/logos/bim.png';
import CDGOLogo from '/public/images/logos/cdgo.png';
import ClevertechLogo from '/public/images/logos/clevertech.png';
import EvercastLogo from '/public/images/logos/evercast.svg';
import Howdy from '/public/images/logos/howdy.png';
import JarockiMeLogo from '/public/images/logos/jarocki.svg';
import JojoMobileLogo from '/public/images/logos/jojomobile.png';
import MonitoLogo from '/public/images/logos/monito.svg';
import MobileVikingsLogo from '/public/images/logos/mv.png';
import NSNLogo from '/public/images/logos/nsn.svg';
import ParabolLogo from '/public/images/logos/parabol.svg';
import TastyCloudLogo from '/public/images/logos/tastycloud.png';
import YearProgressLogo from '/public/images/logos/yearprogress.svg';
import Minimal from '/public/images/logos/minimal.svg';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { XIcon } from '@/components/icons/XIcon';

export const RESUME_DATA = {
  name: 'Dennis Kimathi',
  initials: 'DK',
  location: 'Nairobi, Kenya, KEN',
  locationLink: 'https://www.google.com/maps/place/Nairobi',
  about:
    'Full Stack and blockchain Engineer with a passion for building products that not only address user problems but also align seamlessly with business needs.',
  summary:
    'I am a highly-motivated, creative and pro-active designer and web developer able to research, design and develop user experiences for various digital products including mobile applications, websites and web applications. I use my broad range of skills to execute designs that are clean, simple and effective.',
  avatarUrl:
    'https://www.denniskimathi.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1p71u5pj%2Fproduction%2Fc99fba0287111e176f3fa1c653d3f8b446978aef-1080x1080.jpg&w=256&q=75',
  personalWebsiteUrl: 'https://denniskimathi.dev',
  contact: {
    email: 'kimathidennis38@gmail.com',
    tel: '+254 743312265',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/DennohKim',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dennis-kimathi-46326711b/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/mbiebuz',
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'Moringa School',
      degree: 'Software Engineering',
      start: 'April 2022',
      end: 'Nov 2022',
    },
    {
      school: 'Jomo Kenyatta University of Agriculture and Technology',
      degree: "Bachelor's Degree in Real Estate",
      start: '2015',
      end: '2019',
    },
  ],
  work: [
    {
      company: 'Silvi',
      link: 'https://www.silvi.earth/',
      badges: ['Remote'],
      title: 'Senior Frontend Developer',
      logo: ParabolLogo,
      start: 'August 2023',
      end: 'Present',
      description:
        'Focusing on developing user interfaces and enhancing user experiences. Collaborating with cross-functional teams to deliver efficient and responsive web applications. Utilizing technologies such as NextJS(React), TypeScript, and ensuring optimal integration with backend systems. ',
    },
    {
      company: 'Chizaalabs',
      link: 'https://portfolio-amber-gamma.vercel.app/',
      badges: ['Remote'],
      title: 'UI/UX Consultant → Full Stack Developer',
      logo: ClevertechLogo,
      start: 'Apr 2017',
      end: 'July 2022',
      description:
        'Designed and built web apps for clients across the globe. Built a (decentralized finance)defi social trading app for Loibon from scratch. Technologies: NextJS, React, TypeScript, GraphQL, Solidity, Firebase, The Graph, ',
    },
    {
      company: 'Ryden International',
      link: 'https://ryden.co.ke/',
      badges: [],
      title: 'Digital Marketer',
      logo: JojoMobileLogo,
      start: 'Jan 2020',
      end: 'Apr 2022',
      description:
        'Successfully executed and optimized digital marketing campaigns. Crafted and implemented strategies that led to a 30% increase in brand visibility and a 25% growth in user engagement. Utilized a mix of SEO, SEM, and social media marketing to achieve targeted goals. Implemented data-driven approaches, resulting in a 20% improvement in campaign performance.',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React/Next.js/Remix',
    'Node.js',
    'GraphQL',
    'Go',
    'Solidity',
    'Firebase/Supabase/AppWrite',
    'Tailwind CSS',
    'React Testing Library',
    'Cypress',
    'Git',
    'Docker',
    'Linux',
    'AWS',
    'GCP',
    'Heroku',
    'Vercel',
    'DigitalOcean',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'The Graph',
    'IPFS',
    'OpenZeppelin',
    'Uniswap',
    'Chainlink',
  ],
  projects: [
    {
      title: 'Nafter',
      techStack: [
        'Side Project',
        'TypeScript',
        'Next.js',
        'React',
        'Solidity',
        'Celo',
      ],
      description:
        'A marketplace platform for users to buy and sell Non-Fungible-Tokens',
      logo: ConsultlyLogo,
      link: {
        label: 'Nafter',
        href: 'https://nft-marketplace-dof7f3erp-dennohkim.vercel.app/',
      },
    },
    {
      title: 'TumainiDAO',
      techStack: ['Hackathon', 'JavaScript', 'React', 'Solidity', 'EthersJS'],
      description:
        'TumainiDAO is a non-profit Decentralised Application Organization that looks to empower the African Girl Child ',
      logo: MonitoLogo,
      link: {
        label: 'TumainiDAO',
        href: 'https://tumainid-a-o.vercel.app/',
      },
    },
    {
      title: 'denniskimathi.dev',
      techStack: ['Side Project', 'Next.js', 'MDX'],
      description: 'My personal website and blog. Built with Next.js and MDX',
      logo: JarockiMeLogo,
      link: {
        label: 'denniskimathi.dev',
        href: 'https://www.denniskimathi.dev/',
      },
    },
    {
      title: 'juakalike',
      techStack: ['Side Project', 'Next.js', 'Solidity', 'celo', 'wagmi hooks'],
      description: 'a marketplace dapp built on celo blockchain',
      logo: Minimal,
      link: {
        label: 'juakalike',
        href: 'https://juakali-marketplace-d-app-react-app.vercel.app/',
      },
    },
    {
      title: 'CarbonHero',
      techStack: [
        'Hackathon',
        'Next.js',
        'ToucanSDK',
        'Celo',
        'Graphql',
        'Graph Protocol',
      ],
      description: 'a marketplace dapp built on celo blockchain',
      logo: Minimal,
      link: {
        label: 'carbonhero',
        href: 'https://toucan-protocol-sdk-react-app.vercel.app/',
      },
    },
    {
      title: 'CeloDev Stream',
      techStack: [
        'Hackathon',
        'Next.js',
        'SuperfluidSDK',
        'Celo',
        'Hardhat',
        'Solidity',
      ],
      description:
        'Token streaming dapp built with superfluid that rewards developers in celo ecosystem',
      logo: Minimal,
      link: {
        label: 'CeloDevStream',
        href: 'https://codejam-streaming-rewards-react-app.vercel.app/',
      },
    },
  ],
} as const;
