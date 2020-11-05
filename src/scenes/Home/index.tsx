import React from 'react';
import Bold from 'components/Bold';
import LaravelLogo from 'assets/laravel.svg';
import ReactLogo from 'assets/react.svg';
import AWSLogo from 'assets/amazonaws.svg';
import RocketImage from 'assets/rocket.svg';
import BrainImage from 'assets/brain.svg';
import { Hero, Title, AboutMeBlock, ImageContainer, LargeTag, BlockImage, Stack, StackIcon } from './styled';

function Home(): JSX.Element {
  return (
    <>
      <Hero>
        <Title>
          <h1>Hi, I am Gabriel.</h1>
          <h2>I do code and other techy things.</h2>
        </Title>
      </Hero>
      <AboutMeBlock>
        <ImageContainer>
          <LargeTag>&lt;/&gt;</LargeTag>
        </ImageContainer>
        <div>
          <h2>A decade and a half of code.</h2>
          <p>I started my professional carrer back in 2005, dug into web development in 2007 and went through a lot of buzzwords.</p>
          <p>
            Currently, my latest skillset includes <Bold>React, React Native, Laravel, and AWS</Bold>. Industry usually considers that a combination of <Bold>Fullstack and DevOps</Bold>.
          </p>
          <Stack>
            <StackIcon src={LaravelLogo} alt="Laravel" />
            <StackIcon src={ReactLogo} alt="React" />
            <StackIcon src={AWSLogo} alt="AWS" />
          </Stack>
        </div>
      </AboutMeBlock>
      <AboutMeBlock>
        <div>
          <h2>A tech-minded entepreneur.</h2>
          <p>Or the way I like seeing it: I found nice people along the way to work with and build interesting stuff, doing what we love.</p>
          <p>As part this journey had the luck to work with and for people all around the world since 2010. We learned, failed and succeeded in many ways. And most important, enjoying it.</p>
        </div>
        <ImageContainer>
          <BlockImage src={RocketImage} alt="Rocket" />
        </ImageContainer>
      </AboutMeBlock>
      <AboutMeBlock>
        <ImageContainer>
          <BlockImage src={BrainImage} alt="Brain" />
        </ImageContainer>
        <div>
          <h2>A learner and a lecturer.</h2>
          <p>We would not achieve anything just by ourselves, we grow only when people around us do it was well.</p>
          <p>
            For over six years I have been teaching Databases I in schools, and a bit more coaching trainees and juniors in working environments. I like thinking I got a great deal of soft skills
            through that.
          </p>
        </div>
      </AboutMeBlock>
    </>
  );
}

export default Home;
