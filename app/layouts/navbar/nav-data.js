import { config } from '~/config';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
  {
    label: 'Resume',
    pathname: 'https://ninjasfiles.s3.amazonaws.com/Jeevan_Resume.pdf_d5f41eacb6edf97d072bad9390dfc82b/Jeevan_Resume.pdf',
    onClick: () => newTab('')
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'figma',
  },
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'Instagram',
    url: `https://www.instgram.com/${config.instgram}`,
    icon: 'insta',
  },
];

function newTab(url) {
  window.open(url);
}