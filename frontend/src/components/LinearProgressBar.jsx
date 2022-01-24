import styled from 'styled-components';
import { useThemeContext } from '../context/themeContext';

const LinearProgressBar = ({ title, percentage }) => {
  const { darkMode } = useThemeContext();
  return (
    <Wrapper percentage={percentage}>
      <span className="title">{title}</span>
      <div
        className="progress"
        style={{
          backgroundColor: darkMode && '#8d8d8d',
          transition: darkMode ? 'all 1s ease' : 'all 1s ease',
        }}
      >
        <span
          className="progress-bar"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 1rem 0rem;

  .progress {
    width: 100%;
    height: 6px;
    background-color: #e1e4e8;
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-bar {
    display: block;
    height: 100%;
    background: var(--main-color);
    background-size: 300% 100%;
    -webkit-animation: progressBar 2s ease-in-out;
    animation: progressBar 2s ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes progressBar {
    0% {
      width: 0;
    }
    100% {
      width: 100%auto;
    }
  }
  @keyframes progressBar {
    0% {
      width: 0;
    }
    100% {
      width: 100%auto;
    }
  }
`;
export default LinearProgressBar;
