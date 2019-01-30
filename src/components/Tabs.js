import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components';
import Blogs from './Blogs';
import Projects from './Projects';
import Edit from './Edit';
import AboutMe from './AboutMe';

const Menu = styled.div`
  display: inline-block;
  font-family: 'Monoton', cursive;
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  color: #444444;
  text-decoration: none;
  &:hover {
    color: lightgray;
    font-weight: light;
    cursor: pointer;
  }
  user-drag: none;
`.withComponent(Link);

const MenuContainer = styled.div`
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Panel = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border-top: solid 0.5px black;
`;

const Tabs = ({tabs}) => {
  return (
    <div>
      <Router>
          <div>
            <MenuContainer>
              {tabs.map((name) => <Menu key={name} to={'/' + name}>{name}</Menu>)}
            </MenuContainer>
            <Panel>
              <Switch>
                <Route path='/Blogs' component={Blogs} />
                <Route path='/Projects' component={Projects} />
                <Route path='/About me' component={AboutMe} />
                <Route path='/Edit' component={Edit} />
                <Route path='/' component={AboutMe} />
              </Switch>
            </Panel>
          </div>
      </Router>
    </div>
  );
}

export default Tabs;
