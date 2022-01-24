import React from 'react';
import TagCloud from 'react3dtagcloud';
import styled from 'styled-components';

class Cloud extends React.Component {
  render() {
    const tagName = [
      'html',
      'css',
      'javascript',
      'es6',
      'react',
      'axios',
      'context API',
      'emailjs',
      'scss',
      'sass',
      'nodejs',
      'expressjs',
      'cookies',
      'JWT',
      'mongoDB',
      'mongoose',
    ];

    return (
      <Wrapper>
        <TagCloud tagName={tagName} radius={200}></TagCloud>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  .wrapper {
    top: 200px !important;
  }

  a {
    color: var(--main-color) !important;
  }
  @media (max-width: 1100px) {
    -webkit-transform: scale(0.85);
    -ms-transform: scale(0.85);
    transform: scale(0.85);
    .wrapper {
      left: 30% !important;
    }
  }

  @media (max-width: 1000px) {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    .wrapper {
      left: 25% !important;
    }
  }
  @media (max-width: 900px) {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  @media (max-width: 720px) {
    -webkit-transform: scale(0.75);
    -ms-transform: scale(0.75);
    transform: scale(0.75);
    .wrapper {
      left: 20% !important;
    }
  }
  @media (max-width: 576px) {
    .wrapper {
      left: 15% !important;
    }
  }
  @media (max-width: 480px) {
    -webkit-transform: scale(0.65);
    -ms-transform: scale(0.65);
    transform: scale(0.65);
    .wrapper {
      left: 5% !important;
    }
  }
  @media (max-width: 380px) {
    -webkit-transform: scale(0.6);
    -ms-transform: scale(0.6);
    transform: scale(0.6);
    .wrapper {
      left: -16% !important;
    }
  }
  @media (max-width: 340px) {
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    .wrapper {
      left: -30% !important;
    }
  }
  @media (max-width: 300px) {
    -webkit-transform: scale(0.45);
    -ms-transform: scale(0.45);
    transform: scale(0.45);
    .wrapper {
      left: -35% !important;
    }
  }
`;

export default Cloud;
