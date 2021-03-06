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
    title: ['starting new adventure', 'za????nam nov?? dobrodru??stvo'],
    desc: "New Year, New Me! I'm starting to apply for a new job as a frontend developer.",
    descSK:
      'Nov?? rok, Nov?? ja! Moj??m nov??m predsavzat??m je, zamestna?? sa ako frontend developer.',
  },
  {
    id: 2,
    year: ['2021', 'Oct'],
    title: ['Quiting job', 'Odch??dzam z pr??ce'],
    desc: "This date has significant meaning for me. I just left my previous job where I spent more than 4 years and met amazing people. Main reason was that, I couldn't learn something new , because I already knew everything with my job.",
    descSK:
      'Tento d??tum je pre m??a ve??mi d??le??it??. Pr??ve som ukon??il svoju pr??cu v ktorej som str??vil viac ako 4 roky. Hlavn??m d??vodom odchodu z pr??ce je, ??e som sa nemohol ??alej pracovne rozv??ja??, preto??e u?? som vedel v??etko.  ',
  },

  {
    id: 3,
    year: ['2021', 'Aug'],
    title: ['Learning web development', 'Za????nam s tvorbou webov??ch aplik??ci??'],
    desc: 'I started to forge my new path as a frontend web developer. Learning new techonolies: html, CSS, Javascript, React, NodeJS, ExpressJS and mongoDB. ',
    descSK:
      'Za????nam sa vybera?? novou cestou ako frontend developer. Sna????m sa pochopi?? nov??m technol??gi??m ako s?? " html, CSS, Javascript, React, NodeJS, ExpressJS a mongoDB.',
  },
  {
    id: 4,
    year: ['2018', 'Nov'],
    title: ['Milling CNC Operator', 'Fr??zar CNC strojov'],
    desc: 'My previous job no longer satisfied me, so I asked for transfer to another department. I end up as a milling CNC operator which was basicilly totally new for me.',
    descSK:
      'Moja predch??dzaj??ca pr??ca ma u?? prestala uspokojova??, tak??e som po??iadal o prelo??enie na in?? oddelenie. Nakoniec som skon??il ako fr??zat CNC strojov, ??o bola pre m??a ??plne nov?? sk??senos??.',
  },
  {
    id: 5,
    year: ['2018', 'Sept'],
    title: ['Back to college', 'Vraciam sa nasp???? na v????ku'],
    desc: 'I decided to try college but this time as a distance student.',
    descSK:
      'Rozhodol som sa sk??si?? vysok?? ??kolu, no tento ako extern?? ??tudent.',
  },
  {
    id: 6,
    year: ['2017', 'Apr'],
    title: ['Production operator', 'Oper??tor v??roby'],
    desc: 'After I was excluded from college, I took first job just for paying my bills and hobbies.',
    descSK:
      'Potom ??o som bol vyl????en?? z vysokej ??koly, som zobral prv?? pr??cu aby som dok??zal zaplati?? svoje ????ty a kon????ky.',
  },
  {
    id: 7,
    year: ['2016', 'Sep'],
    title: ['Failed the college', 'Vyl????en?? z vysokej ??koly'],
    desc: 'After 3 years at college I failed the last year. Unfortunelly, I was not able to complete one subject and got fired.',
    descSK:
      'Po troch rokoch ??tudovania na vysokej ??kole som nedokon??il posledn?? rok. Bohu??ia?? nepodarilo sa splni?? jeden predmet a bol som vyl????en??.',
  },
  {
    id: 8,
    year: ['2013', 'Sep'],
    title: ['College', 'Vysok?? ??kola'],
    desc: 'It was tough decision but I decided to go to college. I was enchanted by University of Zilina. They have really nice campus and Its one of the biggest universities in our country.',
    descSK:
      'Stoj??m pred ??a??k??m rozhodnut??m no nakoniec som sa rozhodol ??s?? na vysok?? ??kolu. Bol som o??aren?? ??ilinskou Univerzitou v ??iline. Maj?? neskuto??ne kr??sny are??l a je to najv??????ia univerzita v na??ej krajine.',
  },
];

export const skillsBar = [
  { id: 1, title: ['Communication', 'Komunik??cia'], percentage: 85 },
  { id: 2, title: ['Teamwork', 'Pr??ca v t??me'], percentage: 90 },
  { id: 3, title: ['Creativity', 'Kreativita'], percentage: 70 },
  { id: 4, title: ['Perseverance', 'Vytrvalos??'], percentage: 90 },
];

export const skillsBar2 = [
  { id: 1, title: 'CSS', percentage: '100%' },
  { id: 2, title: 'Html', percentage: '100%' },
  { id: 3, title: 'Javascript', percentage: '60%' },
  { id: 4, title: 'React', percentage: '70%' },
  { id: 5, title: 'Styled components', percentage: '100%' },
  { id: 6, title: 'NodeJS', percentage: '50%' },
];
