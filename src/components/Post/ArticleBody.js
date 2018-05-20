import React from "react";
import marked from "marked";

import {convertToRaw, ContentState, EditorState, convertFromRaw} from "draft-js";

import draftToHtml from 'draftjs-to-html';
//to remove import { draftToMarkdown } from "markdown-draft-js";

var bodyStyle = {
    maxHeight: "inherit",
    maxWidth: "inherit",
    margin: "auto",
    padding: "0px 10px 0px 10px",
    textAlign: "justify",
    textJustify: "inter-word",
    wordWrap: "break-word",
};

export default class ArticleBody extends React.Component {

  render() {
   // const markup = { __html: marked(this.props.content, { sanitize: true }) };
    const markup = { __html:this.props.content,};

  /*  console.log(this.props.content);
    const html = this.props.content;
    const contentBlock = html;
    if (contentBlock) {
        //const contentState = ContentState.createFromBlockArray(contentBlock);
        const editorBodyState = EditorState.createWithContent(contentBlock);
        //this.state = {editorBodyState : editorBodyState};
    }*/
    return (
        <div style={bodyStyle}>
         <div dangerouslySetInnerHTML={markup}></div>
        </div>       
    );
  }
}

//  <div dangerouslySetInnerHTML={markup}></div>