import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Toggle from './components/Toggle';
import { useThemeContext } from './context/themeContext';
import {
  HomePage,
  AboutPage,
  PortfolioPage,
  ContactPage,
  TimelinePage,
  SingleProjectPage,
  MySkillsPage,
  // ErrorPage,
} from './pages';
import { AnimatePresence } from 'framer-motion';
import { useLayoutEffect } from 'react';
import Language from './components/Language';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const { darkMode } = useThemeContext();
  const location = useLocation();

  return (
    <div
      style={{
        backgroundColor: darkMode && '#000',
        transition: darkMode ? 'all 1s ease' : 'all 1s ease',
        color: darkMode ? '#9CC4B2' : 'black',
      }}
    >
      <Navbar />
      <Language />
      <Toggle />

      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/myskills" element={<MySkillsPage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/projects" element={<PortfolioPage />} />
            <Route path="/projects/:id" element={<SingleProjectPage />} />
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </div>
  );
}

export default App;
