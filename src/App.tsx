import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';

import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Dashboard
          isDarkMode={isDarkMode}
          onDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
