import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Editor from './Editor';


class Blogs extends React.Component {
  RawHTML({children, className = ""}){
    return <div className={className} dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />;
  }
  
  render() {
    return (
      "a"
    );
  }
}

export default Blogs;
