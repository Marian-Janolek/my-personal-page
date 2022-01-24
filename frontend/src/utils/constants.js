import { FiLinkedin } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills, GiSandsOfTime } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen, AiOutlineMail } from 'react-icons/ai';

export const pages_url = `/api/v1/pages`;

export const links = [
  {
    id: 1,
    icon: <SiAboutdotme />,
    title: 'about',
    url: '/about',
  },
  {
    id: 2,
    icon: <GiSkills />,
    title: 'my skills',
    url: '/myskills',
  },
  {
    id: 3,
    icon: <AiOutlineFundProjectionScreen />,
    title: 'projects',
    url: '/projects',
  },
  {
    id: 4,
    icon: <GiSandsOfTime />,
    title: 'timeline',
    url: '/timeline',
  },
  {
    id: 5,
    icon: <AiOutlineMail />,
    title: 'contact',
    url: '/contact',
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/marian-janolek-3b75b7200/',
  },
  { id: 2, icon: <AiFillGithub />, url: 'https://github.com/Marian-Janolek' },
  {
    id: 3,
    icon: <FaFacebookF />,
    url: 'https://www.facebook.com/majko.janolek/',
  },
];

export const sentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export const letter = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const portfolioAnimation = {
  show: { transition: { staggerChildren: 0.1 } },
  hide: { transition: { staggerChildren: 0.1 }, staggerDirection: -1 },
};
export const pageAnimation = {
  show: { y: [200, 0], opacity: [0, 1], scale: [0.95, 1] },
  hide: { y: [0, 200], opacity: [1, 0], scale: [1, 0.95] },
};

export const singlePageAnimation = {
  show: { x: [200, 0], opacity: [0, 1], transition: { staggerChildren: 0.15 } },
  hide: { x: [0, 200], opacity: [1, 0], transition: { staggerChildren: 0.15 } },
};

export const timeline = [
  {
    id: 1,
    year: ['2022'],
    title: ['starting new adventure', 'začínam nové dobrodružstvo'],
    desc: "New Year, New Me! I'm starting to apply for a new job as a frontend developer.",
    descSK:
      'Nový rok, Nový ja! Mojím novým predsavzatím je, zamestnať sa ako frontend developer.',
  },
  {
    id: 2,
    year: ['2021', 'Oct'],
    title: ['Quiting job', 'Odchádzam z práce'],
    desc: "This date has significant meaning for me. I just left my previous job where I spent more than 4 years and met amazing people. Main reason was that, I couldn't learn something new , because I already knew everything with my job.",
    descSK:
      'Tento dátum je pre mňa veľmi dôležitý. Práve som ukončil svoju prícu v ktorej som strávil viac ako 4 roky. Hlavným dôvodom odchodu z práce je, že som sa nemohol ďalej pracovne rozvíjať, pretože už som vedel všetko.  ',
  },

  {
    id: 3,
    year: ['2021', 'Aug'],
    title: ['Learning web development', 'Začínam s tvorbou webových aplikícií'],
    desc: 'I started to forge my new path as a frontend web developer. Learning new techonolies: html, CSS, Javascript, React, NodeJS, ExpressJS and mongoDB. ',
    descSK:
      'Začínam sa vyberať novou cestou ako frontend developer. Snažím sa pochopiť novým technológiám ako sú " html, CSS, Javascript, React, NodeJS, ExpressJS a mongoDB.',
  },
  {
    id: 4,
    year: ['2018', 'Nov'],
    title: ['Milling CNC Operator', 'Frézar CNC strojov'],
    desc: 'My previous job no longer satisfied me, so I asked for transfer to another department. I end up as a milling CNC operator which was basicilly totally new for me.',
    descSK:
      'Moja predchádzajúca práca ma už prestala uspokojovať, takže som požiadal o preloženie na iné oddelenie. Nakoniec som skončil ako frézat CNC strojov, čo bola pre mňa úplne nová skúsenosť.',
  },
  {
    id: 5,
    year: ['2018', 'Sept'],
    title: ['Back to college', 'Vraciam sa naspäť na výšku'],
    desc: 'I decided to try college but this time as a distance student.',
    descSK:
      'Rozhodol som sa skúsiť vysokú školu, no tento ako externý študent.',
  },
  {
    id: 6,
    year: ['2017', 'Apr'],
    title: ['Production operator', 'Operátor výroby'],
    desc: 'After I was excluded from college, I took first job just for paying my bills and hobbies.',
    descSK:
      'Potom čo som bol vylúčený z vysokej školy, som zobral prvú prácu aby som dokázal zaplatiť svoje účty a koníčky.',
  },
  {
    id: 7,
    year: ['2016', 'Sep'],
    title: ['Failed the college', 'Vylúčený z vysokej školy'],
    desc: 'After 3 years at college I failed the last year. Unfortunelly, I was not able to complete one subject and got fired.',
    descSK:
      'Po troch rokoch študovania na vysokej škole som nedokončil posledný rok. Bohužiaľ nepodarilo sa splniť jeden predmet a bol som vylúčený.',
  },
  {
    id: 8,
    year: ['2013', 'Sep'],
    title: ['College', 'Vysoká škola'],
    desc: 'It was tough decision but I decided to go to college. I was enchanted by University of Zilina. They have really nice campus and Its one of the biggest universities in our country.',
    descSK:
      'Stojím pred ťažkým rozhodnutím no nakoniec som sa rozhodol ísť na vysokú školu. Bol som očarený Žilinskou Univerzitou v Žiline. Majú neskutočne krásny areál a je to najväčšia univerzita v našej krajine.',
  },
];

export const skillsBar = [
  { id: 1, title: ['Communication', 'Komunikácia'], percentage: 85 },
  { id: 2, title: ['Teamwork', 'Práca v tíme'], percentage: 90 },
  { id: 3, title: ['Creativity', 'Kreativita'], percentage: 70 },
  { id: 4, title: ['Perseverance', 'Vytrvalosť'], percentage: 90 },
];

export const skillsBar2 = [
  { id: 1, title: 'CSS', percentage: '100%' },
  { id: 2, title: 'Html', percentage: '100%' },
  { id: 3, title: 'Javascript', percentage: '60%' },
  { id: 4, title: 'React', percentage: '70%' },
  { id: 5, title: 'Styled components', percentage: '100%' },
  { id: 6, title: 'NodeJS', percentage: '50%' },
];
