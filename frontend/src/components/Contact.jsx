import { useRef, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import { motion } from 'framer-motion';
import { letter } from '../utils/constants';
import ViewPortHeading from './Heading';
import emailjs from '@emailjs/browser';
import { useThemeContext } from '../context/themeContext';
import Alert from './Alert';

const formSentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const { darkMode, languageSK } = useThemeContext();
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const style = {
    backgroundColor: darkMode ? '#2b2b2b' : 'white',
    color: darkMode ? '#8d8d8d' : 'var(--main-color)',
    transition: darkMode ? 'all 1s ease' : 'all 1s ease',
  };

  const style2 = {
    color: darkMode ? 'black' : 'white',
    transition: darkMode ? 'all 1s ease' : 'all 1s ease',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAIL_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  setTimeout(() => {
    setDone(false);
  }, 3000);

  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <div className="container">
        <ViewPortHeading text="Contact Me" />
        <p>
          {languageSK
            ? 'V prípade, že ťa zaujal niektorí z mojích projektov, pokojne ma môžeš kontaktovať nižšie.'
            : 'If you liked any of my projects, you can contact me in following form.'}
        </p>
        <motion.div
          className="form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={formSentence}
        >
          <form onSubmit={handleSubmit} ref={formRef}>
            <motion.div
              variants={letter}
              transition={{ duration: 0.2 }}
              className="credentials"
            >
              <div className="input-name">
                <input
                  type="text"
                  placeholder="name"
                  style={style}
                  name="user_name"
                  required
                />
                <span className="underline-animation"></span>
              </div>
              <div className="input-email">
                <input
                  type="email"
                  placeholder="email"
                  style={style}
                  name="user_email"
                  required
                />
                <span className="underline-animation"></span>
              </div>
            </motion.div>
            <motion.div variants={letter} className="subject">
              <div className="input-subject">
                <input
                  type="text"
                  placeholder="subject"
                  style={style}
                  name="user_subject"
                  required
                />{' '}
                <span className="underline-animation"></span>
              </div>
            </motion.div>
            <div className="textarea">
              <motion.textarea
                variants={letter}
                placeholder="message"
                style={style}
                name="message"
                required
              ></motion.textarea>
              <span className="textarea-animation"></span>
            </div>
            <motion.button variants={letter} className="btn" style={style2}>
              send message
            </motion.button>
            {done && <Alert text="Email successfully send!" />}
          </form>
        </motion.div>
      </div>
      <div className="map">
        <Map />
        <div className="overlay" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 3rem;

  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
    width: 100%;
    position: relative;
    p {
      margin-bottom: 1rem;
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
      left: -2rem;
      text-transform: none;
      color: #515152;
    }
    p::after {
      content: '</p>';
      bottom: -1rem;
    }
    form {
      margin-top: 2rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 4rem;

      .credentials {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 1rem;
      }
      .subject {
        display: block;
      }
    }
    .btn {
      position: absolute;
      right: 0rem;
      bottom: 0;
      padding: 0.6rem 1rem;
    }

    form::before,
    form::after {
      content: '<form>';
      font-family: 'La Belle Aurore', cursive;
      font-size: 1rem;
      opacity: 1;
      font-weight: var(--font-light);
      position: absolute;
      margin-top: -1.5rem;
      left: -2rem;
      text-transform: none;
      color: var(--gray-color);
    }
    form::after {
      content: '</form>';
      bottom: -1.5rem;
    }
    input {
      padding: 1rem;
      width: 100%;
      border: none;
      background-color: #2b2b2b;
      position: relative;
      outline: none;
      font-weight: var(--font-bold);
      letter-spacing: var(--spacing);
    }

    .input-name,
    .input-email,
    .input-subject,
    .textarea {
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    .underline-animation,
    .textarea-animation {
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      display: inline-block;
      bottom: 0.5%;
      left: -100%;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--main-color);
    }
    .textarea-animation {
      bottom: 4%;
    }
    .input-name > input[type='text']:focus + .underline-animation {
      left: 0;
    }
    .input-email > input[type='email']:focus + .underline-animation {
      left: 0;
    }
    .input-subject > input[type='text']:focus + .underline-animation {
      left: 0;
    }
    .textarea > textarea:focus + .textarea-animation {
      left: 0;
    }

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      text-transform: capitalize;
      color: #8d8d8d;
      letter-spacing: var(--spacing);
      font-weight: var(--font-bold);
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      text-transform: capitalize;
      color: #8d8d8d;
      letter-spacing: var(--spacing);
      font-weight: var(--font-bold);
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      text-transform: capitalize;
      color: #8d8d8d;
      letter-spacing: var(--spacing);
      font-weight: var(--font-bold);
    }

    input::-ms-input-placeholder,
    textarea::-ms-input-placeholder {
      text-transform: capitalize;
      color: #8d8d8d;
      letter-spacing: var(--spacing);
      font-weight: var(--font-bold);
    }

    input::placeholder,
    textarea::placeholder {
      text-transform: capitalize;
      color: #8d8d8d;
      letter-spacing: var(--spacing);
      font-weight: var(--font-bold);
    }

    textarea {
      padding: 1rem;
      min-height: 10rem;
      resize: none;
      overflow: auto;
      border: none;
      background-color: #2b2b2b;
      outline: none;
      width: 100%;
    }
    button {
      border: none;
    }
  }

  .map {
    -webkit-box-flex: 3;
    -ms-flex: 3;
    flex: 3;
    width: 100%;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main-color);
    opacity: 0.2;
  }
  @media (max-width: 1024px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    .map {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    .container {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }
  @media (max-width: 768px) {
    .container {
      p::before,
      p::after,
      form::before,
      form::after {
        left: -1.5rem;
      }
      p::after {
        bottom: -1.5rem;
      }
    }
  }
  @media (max-width: 360px) {
    .container {
      p::before,
      p::after,
      form::before,
      form::after {
        left: -1.25rem;
      }
    }
  }
  @media (max-width: 290px) {
    .container {
      p::before,
      p::after,
      form::before,
      form::after {
        left: -0.75rem;
      }
    }
  }
`;
export default Contact;
