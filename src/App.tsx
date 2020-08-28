import React from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from './styles/themes/light';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <h1>Olá mundo!</h1>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
