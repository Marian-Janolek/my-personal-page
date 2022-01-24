import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation } from '../utils/constants';
import { useThemeContext } from '../context/themeContext';

const Card = ({ url, title, id }) => {
  const { darkMode } = useThemeContext();

  return (
    <motion.div variants={pageAnimation}>
      <Wrapper darkMode={darkMode}>
        <Link to={`/projects/${id}`}>
          <div className="img">
            <img src={url} alt={title} />
          </div>
        </Link>
      </Wrapper>
    </motion.div>
  );
};
const Wrapper = styled.div`
  width: 16rem;
  overflow: hidden;
  height: 50vh;
  margin: 20px 10px;
  box-shadow: ${(props) =>
    props.darkMode
      ? `none`
      : `12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3)`};
  -webkit-box-shadow: ${(props) =>
    props.darkMode
      ? `none`
      : `12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3)`};
  border-radius: 40px;
  position: relative;
  cursor: pointer;

  .img {
    width: 100%;
    -webkit-transition: all 6s ease;
    -o-transition: all 6s ease;
    transition: all 6s ease;
    z-index: 0;
  }

  .img:hover {
    -webkit-transform: translateY(-45%);
    -ms-transform: translateY(-45%);
    transform: translateY(-45%);
  }
  @media (max-width: 768px) {
    width: 15rem;
  }
  @media (max-width: 576px) {
    width: 14rem;
  }
  @media (max-width: 420px) {
    width: 15rem;
  }
  @media (max-width: 290px) {
    width: 12.5rem;
    height: 40vh;
  }
`;
export default Card;
