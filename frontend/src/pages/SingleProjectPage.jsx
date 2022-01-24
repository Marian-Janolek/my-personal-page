import SingleProject from '../components/SingleProject';
import styled from 'styled-components';

const SingleProjectPage = () => {
  return (
    <Wrapper className="wrapper-p">
      <SingleProject />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  &:after {
    margin-top: 1rem;
  }
`;

export default SingleProjectPage;
