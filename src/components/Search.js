import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Card} from 'styled-icons/boxicons-regular';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border: solid 1px red;
`;

const Toggle = styled.button`
  flex: 1 0
  text-align: right;
  background: none;
  max-width: 60px;
`;

const Input = styled.input`
  flex: 1 0
  height: 24px;
  padding: 0.5em;
  margin: 0.5em;
  margin-right: 20px;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  max-width: 100px;
`;

const Search = ({onChange, onClick}) => {
  return <Wrapper>
          <Toggle onClick={onClick}><Card size="45px"/></Toggle><Input type="text" placeholder="Search" onChange={onChange} />
        </Wrapper>
};

export default Search;
