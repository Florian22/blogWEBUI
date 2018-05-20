import React from "react";

import ArticlePreview from "../Post/ArticlePreview";
//import agent from "../../services/agent";
import {connect} from "react-redux";
import * as actionCreators from "../../actions/index";

const mapStatetoProps = (state) => {
  return state;
}

class ArticleList extends React.Component {
  
  
  componentWillMount() {
    //const articlesPromise = agent.Articles.all();
    this.props.loadArticles();
  }

  componentWillUnmount() {
  //  this.props.onUnload();
  }

  render() {
    if(this.props.articles){
    return (
      <div class="container">
        <div class="row">
          {
            this.props.articles.map(article => {
              return (
                <div key = {article._id} class="col-4">
                  <ArticlePreview post={article} key={article._id} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }else{
    return (
      <span></span>
    );
  }
}
}

export default connect(mapStatetoProps,actionCreators)(ArticleList);