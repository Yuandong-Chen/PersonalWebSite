import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Tabs from './Tabs'

let tabConfigs = [
  "Blogs",
  "Projects",
  "Portfolio",
  "About me"
];

class Home extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabs={tabConfigs}/>
      </div>
    );
  }
}

export default Home;
