import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Editor from './Editor';

const Wrapper = styled.div`
  border-bottom: solid 1px black;
`;

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
      <Wrapper>{this.state.html}</Wrapper>
      <Editor onSave={this.saveChange}/>
      </div>
    );
  }
}

export default Edit;
