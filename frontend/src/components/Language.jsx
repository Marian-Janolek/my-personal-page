import styled from 'styled-components';
import sk from '../assets/sk.svg';
import uk from '../assets/uk.svg';
import { useThemeContext } from '../context/themeContext';
import { useState } from 'react';

const Language = () => {
  const { toggleLanguage, languageSK } = useThemeContext();
  const [checked, setChecked] = useState(languageSK);

  return (
    <Wrapper onClick={toggleLanguage}>
      <div className="container">
        <div className="toggle">
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="toggleBtn">
            <img src={uk} alt="uk" className="icon en" />
            <img src={sk} alt="sk" className="icon sk" />
          </label>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 12rem;
  top: 1rem;
  z-index: 999;

  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .toggle {
    width: 72px;
    height: 30px;
    border: 0.1px solid #ffffff;
    border-radius: 100px;
    background-color: #f0edf1;
    -webkit-box-shadow: inset 10px 10px 15px #a7aaaf,
      inset -10px -10px 15px #ffffff;
    box-shadow: inset 10px 10px 15px #a7aaaf, inset -10px -10px 15px #ffffff;
    position: relative;
  }

  .toggle .icon {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    -webkit-box-shadow: 0px 0px 0px 3px #f0edf1, 4px 4px 7px #a7aaaf,
      -4px -4px 7px #ffffff;
    box-shadow: 0px 0px 0px 3px #f0edf1, 4px 4px 7px #a7aaaf,
      -4px -4px 7px #ffffff;

    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }
  .toggle::before {
    content: 'SK ENG';
    color: #222;
    position: absolute;
    top: 10%;
    left: 10%;
    word-spacing: 5px;
  }
  .toggle .sk {
    opacity: 0;
  }
  .toggle input {
    opacity: 0;
    width: 100px;
    height: 30px;
    cursor: pointer;
  }

  .toggle input:checked + label .sk {
    opacity: 1;
  }
  .toggle input:checked + label .en {
    opacity: 0;
  }

  .toggle input:checked + label .icon {
    -webkit-transform: translateX(40px) rotate(360deg);
    -ms-transform: translateX(40px) rotate(360deg);
    transform: translateX(40px) rotate(360deg);
  }

  @media (max-width: 576px) {
    left: 9rem;
  }

  @media (max-width: 420px) {
    left: 4rem;
  }
  @media (max-width: 290px) {
    left: 3.5rem;
  }
`;

export default Language;
