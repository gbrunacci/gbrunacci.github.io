import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './scenes/Home';
import Footer from 'components/Footer';

const GlobalStyles = createGlobalStyle`
  html {
      box-sizing: border-box;
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }

  body {
      font-family: 'Spartan', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 16px;
      margin: 0;
      padding: 0;

  }
`;

function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyles />
      {/* Well, we don't have too many routes yes, don't we? */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
