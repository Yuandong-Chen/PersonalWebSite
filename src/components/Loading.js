import React from 'react';
import ReactDOM from 'react-dom';
import { TrinityRingsSpinner } from 'react-epic-spinners'
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const Spinner = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
`.withComponent(TrinityRingsSpinner)

const Header = styled.h1`
  margin-top: 25%;
  font-family: 'Monoton', cursive;
  text-align: center;
  color: black;
`;

const Loading = () => {
  return(
    <div>
      <Header>Happy Coding Everyday</Header>
      <LoadingContainer>
        <Spinner color="black" />
      </LoadingContainer>
    </div>
  );
};

export default Loading;
