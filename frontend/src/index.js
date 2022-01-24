import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import { PagesProvider } from './context/pagesContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <PagesProvider>
        <Router>
          <App />
        </Router>
      </PagesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
