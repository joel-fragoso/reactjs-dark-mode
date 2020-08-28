import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';

import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const theme = localStorage.getItem('@DarkMode:theme');

    if (theme) {
      const { dark } = JSON.parse(theme);

      return !!dark;
    }

    return false;
  });

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Dashboard
          isDarkMode={isDarkMode}
          onDarkMode={() => {
            setIsDarkMode(!isDarkMode);
            localStorage.setItem(
              '@DarkMode:theme',
              JSON.stringify({ dark: !isDarkMode }),
            );
          }}
        />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
