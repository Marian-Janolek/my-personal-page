import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ScrollDown from './ScrollDown';
import {} from 'framer-motion';
import { useThemeContext } from '../context/themeContext';
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setWidth([window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

const Hero = () => {
  const { darkMode } = useThemeContext();
  const [width] = useWindowWidth();

  const mainTitle1 = 'Hi,';
  const mainTitle2a = "I'm Majko,".replace(/ /g, '\xa0');
  const mainTitle2b = "I'm";
  const mainTitle2c = 'Majko,';
  const mainTitle3a = 'Web developer'.replace(/ /g, '\xa0');
  const mainTitle3b = 'Web';
  const mainTitle3c = 'Developer';

  return (
    <Wrapper darkMode={darkMode}>
      <ScrollDown top="40%" left="-5rem" />
      <ScrollDown top="40rem" right="-3.5rem" />
      <div className="hero">
        <h1 className="cascading-text-fold" data-animated="data-animated">
          {mainTitle1.split('').map((char, i) => (
            <span className="letter" key={i}>
              {char}
            </span>
          ))}
          <br />
          {width > 440 ? (
            mainTitle2a.split('').map((char, i) => (
              <span className="letter" key={i}>
                {char}
              </span>
            ))
          ) : (
            <>
              {mainTitle2b.split('').map((char, i) => (
                <span className="letter" key={i}>
                  {char}
                </span>
              ))}
              <br />
              {mainTitle2c.split('').map((char, i) => (
                <span className="letter" key={i}>
                  {char}
                </span>
              ))}
            </>
          )}
          <br />
          {width > 900 ? (
            mainTitle3a.split('').map((char, i) => (
              <span className="letter" key={i}>
                {char}
              </span>
            ))
          ) : (
            <>
              {mainTitle3b.split('').map((char, i) => (
                <span className="letter" key={i}>
                  {char}
                </span>
              ))}
              <br />
              {mainTitle3c.split('').map((char, i) => (
                <span className="letter" key={i}>
                  {char}
                </span>
              ))}
            </>
          )}
        </h1>
        <p>front end developer</p>
        <Link to="/contact" className="btn">
          contact me!
        </Link>
      </div>
    </Wrapper>
  );
};

function createAnimation() {
  let styles = '';
  let delay = 0.035;

  for (let i = 0; i < 30; i += 1) {
    styles += `
    .letter:nth-of-type(${i}) {
      animation-delay: ${(delay += 0.035)}s;
      -webkit-animation-delay:  ${(delay += 0.035)}s;
    }
    `;
  }
  return css`
    ${styles}
  `;
}

function createHover() {
  let styles = '';

  for (let i = 0; i < 30; i += 1) {
    styles += `
    .letter:nth-of-type(${i}):hover {
      -webkit-animation: jello-horizontal 0.9s both;
      animation: jello-horizontal 0.9s both;
    }
    `;
  }
  return css`
    ${styles}
  `;
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .hero {
    position: relative;
    h1 {
      font-size: 5rem;
      font-weight: var(--font-bold);
      line-height: 1.3;
      position: relative;
      margin-bottom: 1rem;
      color: var(--main-color);
    }

    p {
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      margin-bottom: 4rem;
      position: relative;
    }
    h1::before,
    h1::after {
      content: '<h1>';
      font-family: 'La Belle Aurore', cursive;
      font-size: 1rem;
      opacity: 1;
      font-weight: var(--font-light);
      position: absolute;
      margin-top: 0;
      left: -2rem;
      color: #515152;
    }
    h1::after {
      content: '</h1>';
      bottom: 0;
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
    .btn {
      color: ${(props) => (props.darkMode ? 'black' : 'white')};
    }
  }

  .cascading-text-fold[data-animated] .letter {
    -webkit-transform-origin: bottom;
    -ms-transform-origin: bottom;
    transform-origin: bottom;
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-animation-name: fold;
    animation-name: fold;
  }
  .letter {
    display: inline-block;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  ${createAnimation()}
  ${createHover()}

  @-webkit-keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @media (min-width: 768px) {
    .cascading-text {
      width: 100%;
      display: inline-block;
      float: left;
    }
  }
  @media (min-width: 992px) {
    .cascading-text {
      width: 100%;
    }
  }

  @-moz-keyframes fold {
    to {
      transform: rotateX(0);
    }
  }
  @-webkit-keyframes fold {
    to {
      transform: rotateX(0);
    }
  }
  @-o-keyframes fold {
    to {
      transform: rotateX(0);
    }
  }
  @keyframes fold {
    to {
      transform: rotateX(0);
    }
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 4rem;
    }
    .hero h1::before,
    .hero h1::after,
    .hero p::before,
    .hero p::after {
      left: -1.5rem;
    }
    .hero h1::after {
      bottom: -0.5rem;
    }
  }
  @media (max-width: 576px) {
    .hero h1 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 476px) {
    .hero h1 {
      font-size: 3.1rem;
    }
  }
  @media (max-width: 440px) {
    .hero h1 {
      font-size: 2.9rem;
    }
  }

  @media (max-width: 420px) {
    .hero h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 368px) {
    .hero h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 340px) {
    .hero h1 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 305px) {
    .hero h1 {
      font-size: 2.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 290px) {
    .hero h1 {
      font-size: 2.2rem;
    }
  }
`;

export default Hero;
