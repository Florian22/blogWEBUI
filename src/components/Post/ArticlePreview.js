import React from "react";

import { Link } from 'react-router-dom';
import PostOverview from "./ArticleOverview";
import PostBody from "./ArticleBody";
import PostMetaData from "./ArticleMetaData";
import constant from "../../config/constants";

const divStyle = {
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,.04)",
    border: "1px solid rgba(0,0,0,.09)",
    borderRadius: "3px",
    cursor: "pointer",
    maxWidth: "740px",
    maxHeight: "700px",
    minWidth: "740px",
    margin: "0 auto",
    marginBottom: "40px",
    };


class ArticlePreview extends React.Component {
 
  render() {
    return (
        <div style={divStyle}>
            <PostOverview url = {this.props.post.imgURL}/>
            <PostMetaData post = {this.props.post}/>
            <PostBody content = {this.props.post.body.substring(0,constant.articleProperties.bodyPreviewLenght)}/>
            <Link to={`/article/${this.props.post._id}`}><span>Read more...</span></Link><br></br>
        </div>
    );
 
}
}
//             <Link to={`/article/${this.props.post.slug}`}><span>Read more...</span></Link>
export default ArticlePreview;