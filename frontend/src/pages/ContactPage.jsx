import Contact from '../components/Contact';
import styled from 'styled-components';

const ContactPage = () => {
  return (
    <Wrapper className="wrapper-p">
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  &:after {
    margin-top: 1.2rem;
  }
`;

export default ContactPage;
