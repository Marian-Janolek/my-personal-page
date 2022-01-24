import styled from 'styled-components';
import { useThemeContext } from '../context/themeContext';
import { useState } from 'react';

const Toggle = () => {
  const { toggleTheme, darkMode } = useThemeContext();
  const [checked, setChecked] = useState(darkMode);

  return (
    <Wrapper>
      <input
        type="checkbox"
        id="toggle"
        name="toggle"
        value="is_on"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="toggle" className="toy-toggle" onClick={toggleTheme}>
        <span className="border1"></span>
        <span className="border2"></span>
        <span className="border3"></span>
        <span className="handle">
          <span className="handle-on"></span>
          <span className="handle-off"></span>
        </span>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 999;
  background: transparent;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  --on: #000000a0;
  --off: #f0f0f0;
  --transDur: 0.6s;

  input {
    position: fixed;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    display: none;
  }
  .toy-toggle {
    border-radius: 6rem;
    cursor: pointer;
    display: block;
    font-size: 12px;
    position: relative;
    margin: auto;
    width: 60px;
    height: 36px;
    -webkit-tap-highlight-color: transparent;
  }
  .toy-toggle span {
    display: block;
    position: absolute;
  }
  .toy-toggle > span {
    top: 50%;
    left: 50%;
  }
  .toy-toggle > span:not(.handle) {
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .border1 {
    background: var(--main-color);
    border-radius: 16px;
    width: 57px;
    height: 33px;
  }
  .border2 {
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(33%, #fff),
      color-stop(45%, #ccc)
    );
    background: -o-linear-gradient(bottom, #fff 33%, #ccc 45%);
    background: linear-gradient(0deg, #fff 33%, #ccc 45%);
    border-radius: 14px;
    -webkit-box-shadow: 0 0 1px 1px #f0f0f0 inset;
    box-shadow: 0 0 1px 1px #f0f0f0 inset;
    width: 49px;
    height: 28px;
  }
  .border3,
  .handle {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(50%, var(--on)),
      color-stop(0, var(--off))
    );
    background: -o-linear-gradient(left, var(--on) 50%, var(--off) 0);
    background: linear-gradient(90deg, var(--on) 50%, var(--off) 0);
  }
  .border3 {
    background-position: 75% 0;
    background-size: 200% 100%;
    border-radius: 12px;
    -webkit-box-shadow: 0 0 1px 1px var(--main-color) inset,
      0 4px 4px 3px #0004 inset, 0 0 0 12px #0002 inset;
    box-shadow: 0 0 1px 1px var(--main-color) inset, 0 4px 4px 3px #0004 inset,
      0 0 0 12px #0002 inset;
    width: 46px;
    height: 25px;
    -webkit-transition: background-position var(--transDur) ease-in-out;
    -o-transition: background-position var(--transDur) ease-in-out;
    transition: background-position var(--transDur) ease-in-out;
  }
  .handle {
    border-radius: 50%;
    -webkit-box-shadow: 0 0 2px 0 #0007;
    box-shadow: 0 0 2px 0 #0007;
    width: 25px;
    height: 25px;
    -webkit-transform: translate(-90%, -50%);
    -ms-transform: translate(-90%, -50%);
    transform: translate(-90%, -50%);
    -webkit-transition: -webkit-transform var(--transDur) ease-in-out;
    transition: -webkit-transform var(--transDur) ease-in-out;
    -o-transition: transform var(--transDur) ease-in-out;
    transition: transform var(--transDur) ease-in-out;
    transition: transform var(--transDur) ease-in-out,
      -webkit-transform var(--transDur) ease-in-out;
    z-index: 0;
  }
  .handle:before {
    background: -o-radial-gradient(50% 35%, 6px 4px, #fff6 15%, #fff0),
      -o-radial-gradient(75% 40%, 4px 6px, #fff6 15%, #fff0),
      -o-radial-gradient(50% 33%, 100% 100%, #0000 25%, #0003 50%);
    background: radial-gradient(6px 4px at 50% 35%, #fff6 15%, #fff0),
      radial-gradient(4px 6px at 75% 40%, #fff6 15%, #fff0),
      radial-gradient(100% 100% at 50% 33%, #0000 25%, #0003 50%);
    border-radius: 50%;
    -webkit-box-shadow: 0 0 1px 1px #0003 inset;
    box-shadow: 0 0 1px 1px #0003 inset;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .handle-off,
  .handle-on {
    width: 50%;
    height: 100%;
    -webkit-transition: -webkit-transform calc(var(--transDur) / 2);
    transition: -webkit-transform calc(var(--transDur) / 2);
    -o-transition: transform calc(var(--transDur) / 2);
    transition: transform calc(var(--transDur) / 2);
    transition: transform calc(var(--transDur) / 2),
      -webkit-transform calc(var(--transDur) / 2);
    z-index: 2;
  }
  .handle-off {
    background: var(--off);
    border-radius: 100% 0 0 100% / 50% 50% 50% 50%;
    right: 50%;
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition-delay: calc(var(--transDur) / 2);
    -o-transition-delay: calc(var(--transDur) / 2);
    transition-delay: calc(var(--transDur) / 2);
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .handle-on {
    background: var(--on);
    border-radius: 0 100% 100% 0 / 50% 50% 50% 50%;
    left: 50%;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    -ms-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  /* On */
  input:checked + .toy-toggle .border3 {
    background-position: 25% 0;
  }
  input:checked + .toy-toggle .handle {
    -webkit-transform: translate(-10%, -50%);
    -ms-transform: translate(-10%, -50%);
    transform: translate(-10%, -50%);
  }
  input:checked + .toy-toggle .handle-off {
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }
  input:checked + .toy-toggle .handle-on {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-delay: calc(var(--transDur) / 2);
    -o-transition-delay: calc(var(--transDur) / 2);
    transition-delay: calc(var(--transDur) / 2);
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  @media (max-width: 768px) {
    right: 2rem;
  }
  @media (max-width: 420px) {
    right: 1.5rem;
  }
  @media (max-width: 290px) {
    right: 1rem;
  }
`;

export default Toggle;
