import styled, { css } from 'styled-components';
import handleViewport from 'react-in-viewport';

const Heading = (props) => {
  const { inViewport, forwardedRef, enterCount, text } = props;
  if (inViewport && enterCount === 1) {
    return (
      <Wrapper>
        <h2
          ref={forwardedRef}
          className="cascading-text-fold"
          data-animated="data-animated"
        >
          {text
            .replace(/ /g, '\xa0')
            .split('')
            .map((char, i) => (
              <span key={i} className="letter">
                {char}
              </span>
            ))}
        </h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 ref={forwardedRef}>
        {text.split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </h2>
    </Wrapper>
  );
};

const ViewPortHeading = handleViewport(Heading);

function createAnimation() {
  let styles = '';
  let delay = 0.04;

  for (let i = 0; i < 15; i += 1) {
    styles += `
    .letter:nth-of-type(${i}) {
      animation-delay: ${(delay += 0.04)}s;
      -webkit-animation-delay:  ${(delay += 0.04)}s;
    }
    `;
  }
  return css`
    ${styles}
  `;
}

function createHover() {
  let styles = '';

  for (let i = 0; i < 15; i += 1) {
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
  h2 {
    font-size: 4rem;
    font-weight: var(--font-bold);
    margin-bottom: 1rem;
    position: relative;
    color: var(--main-color);
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

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 360px) {
    h2 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 330px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 300px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export default ViewPortHeading;
