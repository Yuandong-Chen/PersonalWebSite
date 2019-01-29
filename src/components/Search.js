import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {AlignJustify as Card} from 'styled-icons/boxicons-regular/AlignJustify';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Toggle = styled.button`
  flex: 1 0
  text-align: right;
  background: none;
  max-width: 60px;
  border: none;
`;

const Input = styled.input`
  flex: 1 0
  height: 24px;
  padding: 0.5em;
  margin: 0.5em;
  margin-right: 20px;
  color: black
  background: white;
  border: solid 0.5px black;
  border-radius: 3px;
  max-width: 100px;
`;

const Search = ({onChange, onClick}) => {
  return <Wrapper>
          <Toggle onClick={onClick}><Card size="45px"/></Toggle><Input type="text" placeholder="Search" onChange={onChange} />
        </Wrapper>
};

export default Search;
