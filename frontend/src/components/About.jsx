import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/themeContext';
import Cloud from './Cloud';
import ViewPortHeading from './Heading';

const About = () => {
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
      <ViewPortHeading text={'About Me'} />
      <div className="container">
        <div className="info">
          <p>
            {languageSK
              ? 'Posledné 4 roky som pracoval ako frézar na viacerých CNC strojoch (najmä 3 a 5 osé stroje). Popri mojej práci som sa rozhodol pre štúdium na Univerzite Mateja Bela v Banskej Bystrici.'
              : 'The last 4 years, I was working as a milling operator on multiple CNC machines (mostly 3 and 5 axis). In addition to my work , I decided to study at Matej Bel University in Banska Bystrica.'}
            <br />
            <br />
            {languageSK
              ? 'Aktuálne som v poslednom ročníku na fakulte Prírodných vied štúdijného programu Aplikovaná Informatika. Počas štúdia som sa stretol s viacerými technologiámi a najviac sa mi zapáčil web development.'
              : "Right now, I'm in last semester at Faculty of Natural Sciences, study program Applied Informatics. During my study I have encountered severed technologies but the one I really enjoyed was web development."}
            <br />
            <br />
            {languageSK
              ? 'Web development ma vtiahol natoľko, že som sa rozhodol pre ukončenie svojej doterajšej práce a postupne začatia novej ako Frontend Developer.'
              : ' Web development attracted me so much , that I decided to end my previous job and gradually start new one as Frontend Developer.'}
          </p>
        </div>
        <div className="skills">
          <Cloud />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;

    p {
      max-width: 100%;
      position: relative;
    }
    p::before,
    p::after {
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
    p::after {
      content: '</p>';
      bottom: -1rem;
    }
  }
  .skills {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 400px;
    width: 500px;
  }

  @media (max-width: 1100px) {
    .skills {
      width: 400px;
    }
  }
  @media (max-width: 1000px) {
    .skills {
      width: 350px;
    }
  }

  @media (max-width: 900px) {
    .container {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
    .skills {
      width: 350px;
    }
  }
  @media (max-width: 768px) {
    .info p::before,
    .info p::after {
      left: -1.5rem;
    }
    .info p::after {
      bottom: -1.5rem;
    }
  }
  @media (max-width: 576px) {
    .skills {
      width: 300px;
      height: 200px;
    }
  }
  @media (max-width: 480px) {
    .skills {
      width: 250px;
    }
  }
  @media (max-width: 380px) {
    .skills {
      width: 150px;
    }
  }
  @media (max-width: 360px) {
    .info p::before,
    .info p::after {
      left: -1.25rem;
    }
  }
  @media (max-width: 290px) {
    .info p::before,
    .info p::after {
      left: -0.75rem;
    }
  }
`;

export default About;
