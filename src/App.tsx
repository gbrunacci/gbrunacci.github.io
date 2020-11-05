import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Experience from './scenes/Experience';
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
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
