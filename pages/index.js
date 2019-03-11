import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/header/header';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Header className="" />
      <p>Hello Next</p>
    </div>
  </ThemeProvider>
);

export default App;
