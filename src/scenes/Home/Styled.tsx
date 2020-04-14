import styled from 'styled-components';
import HeroImage from 'assets/hero.jpg';

export const Hero = styled.header`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${HeroImage});
  background-position: 50% 0;
  background-size: cover;
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);

  padding: 2rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 3rem;
    margin: 0;
    color: #fff;
    font-weight: 300;
  }

  h2 {
    font-size: 1rem;
    margin: 0;
    line-height: 1.5;
    color: #fff;
    font-weight: 300;
  }

  small {
    display: block;
  }
`;

export const AboutMeBlock = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;

  > div {
    flex: 1 1 0;
  }

  p {
    line-height: 1.5;
  }
`;

export const ImageContainer = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
  }
`;

export const LargeTag = styled.div`
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 8rem;
  letter-spacing: -1.5rem;
`;

export const BlockImage = styled.img`
  display: block;
  margin: 0 auto;
  height: 15rem;
  opacity: 0.6;
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const StackIcon = styled.img`
  height: 2rem;
  margin-left: 0.5rem;
`;
