import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';

import { theme } from './configs/theme';
import { Routes } from './pages';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Router>
);

export default App;
