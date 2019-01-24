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
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';

const Menu = styled.div`
  display: inline-block;
  font-family: cursive;
  font-size: 24px;
  margin-left: 10px;
  color: gray;
  text-decoration: none;
  &:hover {
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`.withComponent(Link);

const MenuContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Panel = styled.div`
  display: block;
  width: 100%;
  margin-top: 50px;
  border: solid 1px red;
`;

class Tabs extends React.Component {
  render() {
    return (
      <div>
        <Router>
            <div>
              <MenuContainer>
                {this.props.tabs.map((name) => <Menu to={'/' + name}>{name}</Menu>)}
              </MenuContainer>
              <Panel>
                <Switch>
                  <Route path='/Blogs' component={Blogs} />
                  <Route path='/Projects' component={Projects} />
                  <Route path='/Portfolio' component={Portfolio} />
                  <Route path='/About me' component={AboutMe} />
                </Switch>
              </Panel>
            </div>
        </Router>
      </div>
    );
  }
}

export default Tabs;
