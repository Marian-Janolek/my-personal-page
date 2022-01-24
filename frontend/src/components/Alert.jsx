import styled from 'styled-components';
import { useThemeContext } from '../context/themeContext';

const Alert = ({ text }) => {
  const { darkMode } = useThemeContext();

  return (
    <Wrapper
      style={{
        background: darkMode && 'var(--main-color)',
        transition: darkMode ? 'all 1s ease' : 'all 1s ease',
      }}
    >
      <span
        style={{
          color: darkMode && 'var(--secondary-color)',
        }}
      >
        {text}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  background-color: #4b00b322;
  border-radius: calc(var(--radius) * 2);
  border-left: 4px solid var(--main-color);
  color: var(--main-color) !important;
  position: absolute;
  bottom: 0;

  @media (max-width: 576px) {
    bottom: 5rem;
    left: 5%;
  }
  @media (max-width: 290px) {
    left: 0%;
  }
`;

export default Alert;
