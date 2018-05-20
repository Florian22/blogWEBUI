import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import {connect} from "react-redux";
import * as actionCreators from "../../actions/index";


const mapStatetoProps = (state) => {
    return state;
  }

const LoggedOutView = props => {
  //if (!props.currentUser) {
      if (true) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        
        <li className="nav-item">
          <Link to="/">
            Feed
          </Link>
        </li>
       

        <li className="nav-item">
          <Link to="/signin">
              Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="home">
            Sign up
            </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  //if (!props.currentUser) {
      if (true) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        
        <li className="nav-item">
          <Link to="/article/new">
            New
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/logout">
            LogOut
            </Link>
        </li>

      </ul>
    );
  }
  return null;
};

var style = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-25%)",
  textDecoration : "none",
};

class NavBar extends React.Component {
  render() {
    console.log(this.props)
    if(this.props.currentuser){
      return (
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded collapse">
          <Link to="/" className ="navbar-brand" style={style}>Florian Bonniec</Link>
              <div class="collapse navbar-collapse" id="navbarNav">  
                <LoggedInView /*currentUser={this.props.currentUser}*/ />
                </div>
          </nav>
      );
    }else{
      return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded collapse">
        <Link to="/" className ="navbar-brand" style={style}>Florian Bonniec</Link>
            <div class="collapse navbar-collapse" id="navbarNav">  
              <LoggedOutView /*currentUser={this.props.currentUser}*/ />
              </div>
        </nav>
    );
    }
  }
}
// <span className ="navbar-brand" style={style}><Link to="/" style={{ textDecoration : 'none' }}>Florian Bonniec</Link></span> 

//export default NavBar;
export default connect(mapStatetoProps,actionCreators)(NavBar);
// {/* FBthis.props.appName.toLowerCase()*/}