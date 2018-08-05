import React from "react";

import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import { Timeline } from 'react-twitter-widgets';
import ArticlePreview from "../Post/ArticlePreview";
import InfiniteScroll from 'react-infinite-scroll-component';
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
    console.log("Render");
    if(this.props.articles){
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-9">
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
            <div class="hidden-xs hidden-sm col-md-3">
              <Timeline dataSource={{
                          sourceType: 'profile',
                          screenName: 'FlorianBonniec'
                        }}
                        options={{
                          username: 'FlorianBonniec',
                          height: '500'
                        }}
                        onLoad={() => console.log('Timeline is loaded!')}/>
            </div>
        </div>
        <ScrollUpButton />
      </div>
    );
  }else{
    return (
      <span></span>
    );
  }
  console.log("Render end");
}
}

export default connect(mapStatetoProps,actionCreators)(ArticleList);