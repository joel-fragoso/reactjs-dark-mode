import React from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';

import lightTheme from './styles/themes/light';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Dashboard />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
