import React from 'react';
import { Wrapper } from './Styled';
import GitHubLogo from 'assets/github.svg';
import LinkedInLogo from 'assets/linkedin.svg';

function Footer(): JSX.Element {
  return (
    <Wrapper>
      <p>Gabriel Brunacci &copy; {new Date().getFullYear()}</p>
      <p>
        <a href="https://github.com/gbrunacci/gbrunacci.github.io" target="_blank" rel="noopener noreferrer">
          <img src={GitHubLogo} alt="This Repo" />
        </a>
        <a href="https://www.linkedin.com/in/gabrielbrunacci/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="My LinkedIn" />
        </a>
      </p>
      <p>
        <small>Or drop me a line at gbrunacci @ (gmail account)</small>
      </p>
    </Wrapper>
  );
}

export default Footer;
