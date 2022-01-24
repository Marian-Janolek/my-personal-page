import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { links, socialIcons } from '../utils/constants';
import { useThemeContext } from '../context/themeContext';

const Navbar = () => {
  const { darkMode } = useThemeContext();
  return (
    <Wrapper darkMode={darkMode}>
      <div className="navbar">
        <div className="header">
          <Link to="/">
            <h1>M</h1>
          </Link>
          <h2>Majko</h2>
          <p>Web developer</p>
        </div>
        <div className="links">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.url}
              className={({ isActive }) =>
                isActive ? 'active btn-links' : 'btn-links'
              }
            >
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-title">{link.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="social">
          {socialIcons.map((icon) => (
            <a
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              key={icon.id}
              className="icon"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: auto;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100vh;
  width: 10rem;
  background-color: var(--main-color);
  color: white;
  z-index: var(--z-fixed);
  -webkit-box-shadow: 3px -2px 15px 6px rgba(0, 0, 0, 0.61);
  box-shadow: 3px -2px 15px 6px rgba(0, 0, 0, 0.384);

  .header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    h1 {
      font-size: 4rem;
      line-height: 1.3;
      color: ${(props) => (props.darkMode ? 'black' : 'white')};
      -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
    }
    p {
      font-size: 0.8rem;
      color: ${(props) => (props.darkMode ? 'black' : 'var(--seconday-color)')};
      -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
    }
    h2 {
      color: ${(props) => (props.darkMode ? 'black' : 'white')};
      -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
    }
    h2::after,
    h2::before {
      content: '';
    }
  }
  .links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 1.75rem;
    margin-bottom: 1rem;
  }
  .btn-links {
    color: ${(props) => (props.darkMode ? 'black' : 'white')};
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  .nav-icon {
    display: none;
  }
  .social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
  }
  .icon {
    font-size: 1.2rem;
    color: ${(props) => (props.darkMode ? 'black' : 'white')};
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  .active {
    -webkit-transform: scale(1.25);
    -ms-transform: scale(1.25);
    transform: scale(1.25);
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    font-weight: var(--font-semi-bold);
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }

  @media (max-width: 576px) {
    width: 7rem;
  }

  @media (max-width: 420px) {
    width: 3.5rem;
    .header h1 {
      font-size: 3rem;
    }
    .header h2,
    p {
      display: none;
    }
    .nav-title {
      display: none;
    }
    .nav-icon {
      display: block;
    }
    svg {
      font-size: 2rem;
    }

    .social {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 1rem;
    }
  }
  @media (max-width: 290px) {
    width: 3rem;
    .header h1 {
      font-size: 2.75rem;
    }
  }
  svg {
    font-size: 1.5rem;
  }
`;

export default Navbar;
