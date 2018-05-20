import React from "react";
import ReactDOM from "react-dom";

//BrowserRouter import {Router, Route, IndexRoute, hashHistory} from "react-router";
import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'

import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Logout from "./components/Pages/Logout";
import ArticleList from "./components/Pages/ArticleList";
import ArticleView from "./components/Post/ArticleView";
import ArticleEditor from "./components/Post/Editor";

//import history from './config/history';
import createBrowserHistory from 'history/createBrowserHistory';
//import { signOut } from "./actions/index";
const history = createBrowserHistory();

let store = createStore(reducers, applyMiddleware(thunk));
  
const app = document.getElementById('app');
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter /*history = {history}*/>
            <Layout>
                <Route exact path = "/" component = {ArticleList}>    </Route>
                <Route path="/article/:id" component={ArticleView} />
                <Route path = "/home" component = {Home}></Route>
                <Route path = "/signin" component = {Login}></Route>
                <Route path = "/logout" component = {Logout}></Route>
                <Route path = "/editor/:id" component = {ArticleEditor}/>
                <Route path = "/article/new" component = {ArticleEditor}/>
            </Layout>
        </BrowserRouter>
    </Provider>, app);

//<ArticleList articles = {postEx}/>
//<Route path = "home" component = {Home}></Route>
//        <Route path = "/articles" component = {ArticleList}></Route>