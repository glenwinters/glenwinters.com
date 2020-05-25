import React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import portrait from './portrait.jpg';

const githubURL = 'https://github.com/glenwinters';
const linkedinURL = 'https://www.linkedin.com/in/glenwinters/';

const Container = styled.div`
  display: flex;
  background-color: #31313a;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: cursive;
  border: 30px #78cc6d solid;
`;

const Portrait = styled.img`
  clip-path: circle(100px at center);
  width: 200px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  font-family: 'Amatic SC', cursive;
  color: #f0f0f0;
  margin: 0rem;
`;

const Subtitle = styled.h2`
  font-size: 3.5rem;
  font-family: 'Amatic SC';
  color: #a2a2a6;
  margin: 0.5rem 0rem;
`;

const IconRow = styled.div``;

const GitHubIcon = styled(AiFillGithub)`
  color: #f0f0f0;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`;

const LinkedInIcon = styled(AiFillLinkedin)`
  color: #f0f0f0;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`;

const Home = () => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          max-width: 100vw;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />

    <Container>
      <Portrait alt="Photo of Glen" src={portrait} />
      <Title>Hello, I'm Glen Winters.</Title>
      <Subtitle>Platform Engineer</Subtitle>
      <IconRow>
        <a href={githubURL} target="_blank" rel="noreferrer">
          <GitHubIcon size="2.5em" />
        </a>
        <a href={linkedinURL} target="_blank" rel="noreferrer">
          <LinkedInIcon size="2.5em" />
        </a>
      </IconRow>
    </Container>
  </>
);

export default Home;
