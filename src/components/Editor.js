import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/table.css'
import 'braft-extensions/dist/code-highlighter.css'
import 'braft-extensions/dist/emoticon.css'
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'
import Markdown from 'braft-extensions/dist/markdown'
import Table from 'braft-extensions/dist/table'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`))
const options = {
  defaultColumns: 3, // 默认列数
  defaultRows: 3, // 默认行数
  syntaxs: [
    {
      name: 'JavaScript',
      syntax: 'javascript'
    }, {
      name: 'HTML',
      syntax: 'html'
    }, {
      name: 'CSS',
      syntax: 'css'
    }, {
      name: 'Java',
      syntax: 'java',
    }, {
      name: 'PHP',
      syntax: 'php'
    }
  ],
  emoticons: emoticons, // 指定可用表情图片列表，默认为空
  closeOnBlur: false, // 指定是否在点击表情选择器之外的地方时关闭表情选择器，默认false
  closeOnSelect: false, // 指定是否在选择表情后关闭表情选择器，默认false
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
}

BraftEditor.use(Table(options))
BraftEditor.use(Markdown(options))
BraftEditor.use(CodeHighlighter(options))
BraftEditor.use(Emoticon(options))

export default class Editor extends React.Component {

  state = {
      editorState: null
  }

  async componentDidMount () {
    // 假设此处从服务端获取html格式的编辑器内容
    const htmlContent = "";//await fetchEditorContent()
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent, { editorId: 'editor-1' })
    });
  }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const rawContent = this.state.editorState;
    const htmlContent = rawContent.toHTML();
    const result = await this.props.onSave(htmlContent, rawContent);
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState });
  }

  render () {
    const { editorState } = this.state;
    return (
      <div className="my-component">
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </div>
    );
  }
}
