import React from "react";
import { Link } from 'react-router-dom';

import PostOverview from "./ArticleOverview";
//import PostBody from "./ArticleEditBody";
import PostBody from "./ArticleBody";
import PostMetaData from "./ArticleMetaData";

import {connect} from "react-redux";
import * as actionCreators from "../../actions/index";

const divStyle = {
    background: "#fff",
    //boxShadow: "0 1px 4px rgba(0,0,0,.04)",
    //border: "1px solid rgba(0,0,0,.09)",
    //borderRadius: "3px",
    //cursor: "pointer",
    maxWidth: "740px",
    maxHeight: "700px",
    margin: "0 auto",
    //marginBottom: "40px",
    marginBottom: "5px",
    };

const mapStatetoProps = (state) => {
      return state;
    }

class ArticleView extends React.Component {
 
componentWillMount() {
   // console.log("1");
    this.props.loadArticle(this.props.match.params.id);
   // console.log("2");
    }

    componentWillUnmount() {
        this.props.onUnloadArticle();
    }

  render() {
    //console.log(this.props);  
    if(this.props.article){
        if((this.props.currentuser) && (this.props.currentuser.username == this.props.article.user.username)){
        return (
            <div class ="container">
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-9"> 
                    <h2 style={divStyle}>{this.props.article.title}</h2>
                        <div style={divStyle}>
                            <PostOverview url = {this.props.article.imgURL} style={{boxShadow: "0 1px 4px rgba(0,0,0,.04)"}}/>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-9">
                        <div class="mb-100"> 
                            <div style={divStyle}>
                                <PostBody content = {this.props.article.body}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-0 col-md-3">
                            <PostMetaData post = {this.props.article}/>
                            <div style={{align: "right", display:"inline"}}>
                                <Link to={`/editor/${this.props.article._id}`} class="btn btn-primary"><span>Edit...</span></Link>
                            </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div class ="container">
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-9"> 
                    <h2 style={divStyle}>{this.props.article.title}</h2>
                        <div style={divStyle}>
                            <PostOverview url = {this.props.article.imgURL} style={{boxShadow: "0 1px 4px rgba(0,0,0,.04)"}}/>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-9">
                        <div class="mb-100"> 
                            <div style={divStyle}>
                                <PostBody content = {this.props.article.body}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-0 col-md-3">
                            <PostMetaData post = {this.props.article}/>
                    </div>
                </div>
            </div>
        );
        }
  }else{return(null)}
}
}

export default connect(mapStatetoProps,actionCreators)(ArticleView);