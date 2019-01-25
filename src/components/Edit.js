import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Editor from './Editor'

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {html: "", raw: ""};
  }

  saveChange = (s, r) => {
    this.setState({html: s, raw: r});
  }

  render() {
    return (
      <div>
      {this.state.html}
      <Editor onSave={this.saveChange}/>
      </div>
    );
  }
}

export default Edit;
