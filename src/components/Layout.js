import React from "react";
//import { Route, Switch } from 'react-router-dom';

import Footer from "./Footer/Footer";
import NavBar from "./Header/Navbar";
import Home from "./Pages/Home";
import ArticlePreview from "./Post/ArticlePreview";
import ArticleList from "./Pages/ArticleList";
import Header from "./Header/Header";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      /*<div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Switch>
            <Route exact path="/" component={this}/>
        </Switch>
        <Footer />
      </div>*/
      /*<Router history = {browserHistory}>
        <Route path = {""}/>
      </Router>*/
      <div>
        <NavBar style= {{display: "inline-block"}}></NavBar>
      <Header></Header>
      {this.props.children}
      </div>
    );
  }
}