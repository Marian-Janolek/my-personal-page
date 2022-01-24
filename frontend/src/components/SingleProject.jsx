import styled from 'styled-components';
import { pages_url, singlePageAnimation } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { usePagesContext } from '../context/pagesContext';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/themeContext';
import Loading from './Loading';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

const SingleProject = () => {
  const { id } = useParams();
  const {
    single_page,
    fetchSinglePage,
    single_page_loading: loading,
  } = usePagesContext();
  const { languageSK } = useThemeContext();

  useEffect(() => {
    fetchSinglePage(`${pages_url}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  const { images, desc, descSK, usedTech, title, status } = single_page;

  return (
    <Wrapper>
      <motion.h2 variants={singlePageAnimation} animate="show" exit="hide">
        {title}
      </motion.h2>

      <motion.div
        className="container"
        variants={singlePageAnimation}
        animate="show"
        exit="hide"
      >
        {status && <div className="status">{status}</div>}
        <div className="images-wrapper">
          <motion.img
            variants={singlePageAnimation}
            src={images?.imgMonitor}
            alt=""
          />
          <motion.img
            variants={singlePageAnimation}
            src={images?.imgTablet}
            alt=""
          />
          <motion.img
            variants={singlePageAnimation}
            src={images?.imgMobile}
            alt=""
          />
        </div>
        <div className="info">
          {languageSK ? <p>{descSK}</p> : <p>{desc}</p>}
          <br />
          <span>
            {languageSK ? 'Použité technológie:' : 'Used technologies:'}
          </span>
          <div className="tech-wrapper">
            {usedTech?.map((tech, i) => (
              <img key={i} src={tech} alt="" className="tech-img" />
            ))}
          </div>
        </div>
      </motion.div>
      <span className="external-links">
        {status ? (
          ''
        ) : (
          <a href={single_page.pageUrl} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt />
          </a>
        )}
        <a href={single_page.gitUrl} target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: var(--font-bold);
    text-transform: capitalize;
    margin-bottom: 1rem;
    position: relative;
    color: var(--main-color);
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #4b00b322;
    border-radius: calc(var(--radius) * 2);
    color: var(--main-color) !important;
    top: 40%;
    left: 21%;
    z-index: 10;
    font-size: 3.2rem;
    padding: 0 1rem;
  }
  .container {
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    .images-wrapper {
      height: 480px;
      position: relative;
      width: 100%;
      img:first-child {
        position: absolute;
        left: -0%;
        bottom: 0%;
        width: 92%;
        height: 100%;
      }
      img:nth-child(2) {
        position: absolute;
        width: 38%;
        height: 65%;
        left: -7%;
        bottom: 0%;
      }
      img:last-child {
        position: absolute;
        width: 20%;
        height: 60%;
        right: 2%;
        bottom: 0;
      }
    }
  }
  .info {
    display: flex;
    width: 50%;
    flex-direction: column;
    p {
      position: relative;
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
      left: -1rem;
      text-transform: none;
      color: var(--gray-color);
    }
    p::after {
      content: '</p>';
      bottom: -1rem;
    }
    .tech-wrapper {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 1rem;
    }
    .tech-img {
      width: 50px;
      transition: all 0.3s linear;
      cursor: pointer;
    }
    .tech-img:hover {
      transform: scale(1.1);
    }
  }
  .external-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: fixed;
    line-height: 1;
    bottom: 1rem;
    right: 2.5rem;
    font-size: 2rem;
    color: var(--main-color);
    a {
      -webkit-animation: jello-horizontal 4s infinite both;
      animation: jello-horizontal 4s infinite both;
      animation-delay: 0.5s;
      -webkit-animation-delay: 0.5s;
      svg {
        cursor: pointer;
      }
    }
  }

  @-webkit-keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    7% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    10% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    12% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    16% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    18% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    25% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    7% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    10% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    12% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    16% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    18% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    25% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @media (max-width: 1200px) {
    .container {
      flex-direction: column;
      gap: 2rem;
    }
    .status {
      top: 20%;
      left: 30%;
    }
    .info {
      width: 100%;
    }
  }
  @media (max-width: 950px) {
    .status {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }
    .status {
      top: 15%;
      font-size: 2rem;
    }
    .container {
      .images-wrapper {
        img:nth-child(2) {
          left: -5%;
        }
      }
      .info {
        p::after {
          bottom: -1.25rem;
        }
      }
    }
    .external-links {
      right: 2rem;
    }
  }
  @media (max-width: 700px) {
    .container {
      .status {
        left: 5%;
        top: 7%;
        font-weight: var(--font-bold);
      }
      .images-wrapper {
        img:first-child {
          display: none;
        }
        img:nth-child(2) {
          height: 100%;
          width: 85%;
          left: -2%;
        }
        img:nth-child(3) {
          height: 70%;
          width: 45%;
          right: -5%;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .container {
      .status {
        top: 5%;
        font-size: 1.5rem;
        padding: 0 0.5rem;
        font-weight: var(--font-medium);
      }
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 2.5rem;
    }
    .container {
      gap: 1rem;
      .status {
        left: 24%;
        top: 10%;
        padding: 0 0.4rem;
        font-size: 1.3rem;
      }
      .images-wrapper {
        height: 250px;
        img:nth-child(2) {
          display: none;
        }
        img:nth-child(3) {
          height: 100%;
          width: 50%;
          left: 20%;
        }
      }
    }
    .info {
      p {
        font-size: 0.85rem;
      }
      .tech-img {
        width: 40px;
      }
    }
    .external-links {
      right: 1.5rem;
    }
  }
  @media (max-width: 376px) {
    h2 {
      font-size: 2.2rem;
    }
    .container {
      .status {
        left: 15%;
        font-size: 1.1rem;
      }
      .images-wrapper {
        height: 220px;
        img:nth-child(3) {
          height: 100%;
          width: 60%;
          left: 10%;
        }
      }
    }
  }

  @media (max-width: 310px) {
    .container {
      .status {
        top: 7%;
        font-size: 1rem;
        padding: 0 0.25rem;
      }
    }
  }

  @media (max-width: 290px) {
    h2 {
      font-size: 1.8rem;
    }

    .external-links {
      right: 1rem;
    }
  }
`;

export default SingleProject;
