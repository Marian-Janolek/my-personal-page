import { THEME_TOGGLE, LANGUAGE_TOGGLE } from '../actions';
import reducer from '../reducer/themeReducer';
import { createContext, useContext, useReducer, useEffect } from 'react';

const darkMode = JSON.parse(localStorage.getItem('M-darkmode'));
const languageSK = JSON.parse(localStorage.getItem('M-language'));

const initialState = {
  darkMode: darkMode || false,
  languageSK: languageSK || false,
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('M-darkmode', state.darkMode);
    localStorage.setItem('M-language', state.languageSK);
  }, [state.darkMode, state.languageSK]);

  const toggleTheme = () => {
    dispatch({ type: THEME_TOGGLE });
  };
  const toggleLanguage = () => {
    dispatch({ type: LANGUAGE_TOGGLE });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { useThemeContext, ThemeProvider };
