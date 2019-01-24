import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border: solid 1px red;
`;

const Input = styled.input`
  height: 24px;
  padding: 0.5em;
  margin: 0.5em;
  margin-right: 20px;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Search = ({onChange}) => {
  return <Wrapper><Input type="text" placeholder="Search" onChange={onChange} /></Wrapper>
};

export default Search;
