import styled from 'styled-components';
import error from '../assets/not-found.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper className="wrapper-p">
      <img src={error} alt="error" />
      <h3>page not found</h3>
      <p>We can't seem to find a page you are looking for.</p>
      <Link to="/">
        <button className="btn">Go Back</button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  img {
    width: 500px;
    height: 500px;
  }
  h3 {
    text-transform: capitalize;
  }
  p {
    margin-bottom: 1rem;
  }
  .btn {
    border: none;
  }
`;

export default ErrorPage;
