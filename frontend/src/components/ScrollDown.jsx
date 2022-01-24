import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

const ScrollDown = ({ top, right, left }) => {
  return (
    <Wrapper top={top} right={right} left={left}>
      <span>scroll down</span>
      <BsArrowRight id="icon" />{' '}
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
  position: absolute;
  gap: 1rem;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: var(--gray-color);
  font-family: 'La Belle Aurore', cursive;

  span {
    -webkit-animation: slide-bottom 1s linear infinite both;
    animation: slide-bottom 1s linear infinite both;
    font-size: 1.3rem;
  }

  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    50% {
      -webkit-transform: translateX(1rem);
      transform: translateX(1rem);
    }
    100% {
      -webkit-transform: translateX(0rem);
      transform: translateX(0rem);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    50% {
      -webkit-transform: translateX(1rem);
      transform: translateX(1rem);
    }
    100% {
      -webkit-transform: translateX(0rem);
      transform: translateX(0rem);
    }
  }
`;

export default ScrollDown;
