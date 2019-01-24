import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class Blogs extends React.Component {
  RawHTML({children, className = ""}){
    return <div className={className} dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />;
  }
  
  render() {
    return (
      <div>
        {this.RawHTML({children: "<h2>I am \nblogs\n</h2>"})}
      </div>
    );
  }
}

export default Blogs;
