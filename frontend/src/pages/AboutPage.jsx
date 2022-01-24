import About from '../components/About';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <Wrapper>
      <section className="wrapper-p">
        <About />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (max-width: 1240px) {
    section::after {
      margin-top: 1rem;
    }
  }
  @media (max-width: 420px) {
    section::after {
      margin-top: -0.5rem;
    }
  }
`;

export default AboutPage;
