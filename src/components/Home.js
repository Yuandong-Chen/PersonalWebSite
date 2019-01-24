import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import Tabs from './Tabs'

let tabConfigs = [
  "Blogs",
  "Projects",
  "Portfolio",
  "About me"
];

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const AnimeWrapper = styled.div`
  animation: 1s ${fadeIn} ease-out;
  animation-fill-mode: forwards;
`;

const Home = ({tabsConfigs, articles}) => {
  return (
    <AnimeWrapper>
      <Tabs tabs={tabConfigs} articles={articles}/>
    </AnimeWrapper>
  );
};

export default Home;
