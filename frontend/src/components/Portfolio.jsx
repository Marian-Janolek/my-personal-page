import styled from 'styled-components';
import Card from './Card';
import { motion } from 'framer-motion';
import { usePagesContext } from '../context/pagesContext';
import { useThemeContext } from '../context/themeContext';
import { portfolioAnimation } from '../utils/constants';
import ViewPortHeading from './Heading';

const Portfolio = () => {
  const { pages } = usePagesContext();
  const { languageSK } = useThemeContext();

  return (
    <Wrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <ViewPortHeading text="My Portfolio" />
      <div className="container">
        <p className="desc">
          {languageSK
            ? 'Galéria niekoľkých mojích projektov, ktoré som vytvoril s cieľom získania nového uplatanenia ako frontend developer.'
            : "    A gallery of recent projects chosen by me. I've done them to forge my new path as a frontend developer."}

          <br />
          {languageSK
            ? 'Tieto projekty sú veľmi dôležité pre mňa, pretože pomocou nich som sa dokázal naučiť nové technológie, nové postupy a najmä posunulo ma to ďalej ako človeka.'
            : 'These projects were important to me, because I learn new technologies, new practices and I was able to grown as a person.'}
        </p>
      </div>
      <motion.div
        className="projects"
        variants={portfolioAnimation}
        animate="show"
        exit="hide"
      >
        {pages.map((item) => (
          <Card
            key={item._id}
            url={item.mainImage}
            title={item.title}
            id={item._id}
          />
        ))}
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  margin-bottom: 4rem;
  .container {
    margin-bottom: 2rem;
  }

  p {
    max-width: 50vw;
    position: relative;
  }
  .desc::before,
  .desc::after {
    content: '<p>';
    font-family: 'La Belle Aurore', cursive;
    font-size: 1rem;
    opacity: 1;
    font-weight: var(--font-light);
    position: absolute;
    margin-top: -1rem;
    left: -2rem;
    text-transform: none;
    color: var(--gray-color);
  }
  .desc::after {
    content: '</p>';
    bottom: -1.3rem;
  }

  .projects {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 1rem;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    .projects {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
    .desc {
      max-width: 80vw;
      &:before,
      &:after {
        left: -1.5rem;
      }
    }
  }
  @media (max-width: 360px) {
    .desc::before,
    .desc::after {
      left: -1.25rem;
    }
  }
  @media (max-width: 290px) {
    .desc {
      &:before,
      &:after {
        left: -0.75rem;
      }
    }
  }
`;

export default Portfolio;
