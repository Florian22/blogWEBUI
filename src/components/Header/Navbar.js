import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import {connect} from "react-redux";
import * as actionCreators from "../../actions/index";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const mapStatetoProps = (state) => {
    return state;
  }

const LoggedOutView = props => {
    return (
      <Nav pullRight>
      <NavItem eventKey={1} href="/">
          Feed
      </NavItem>
      <NavItem eventKey={2} href="/signin">
          Login
      </NavItem>
      }
    </Nav>
    );
};

const LoggedInView = props => {
    return (
      <Nav pullRight > 
      <NavItem eventKey={1} href="/new/article">
          New
      </NavItem>
      <NavItem eventKey={2} href="/logout">
          Logout
      </NavItem>
    </Nav>
    );
};

var style = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-25%)",
  textDecoration : "none",
};

var brandStyle = {
  paddingTop: "50px!important",
}

class NavBar extends React.Component {
  render() {
    console.log(this.props);
    if(this.props.currentuser){
      return(
        <Navbar inverse collapseOnSelect style={{background:"rgba(0, 0, 0, 0.2)", border: "0", marginBottom: "0", zIndex: "1030"}}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/" style = {{color: "white"}}>Florian Bonniec</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav  style= {{float: "right"}}>
        <LoggedInView/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      );
    }else{
      return(
        <Navbar inverse collapseOnSelect fixed-top style={{background:"rgba(0, 0, 0, 0.2)", border: "0", marginBottom: "0", zIndex: "1030"}}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"  style = {{color: "white"}}>Florian Bonniec</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav  style= {{float: "right"}}>
      {/*  <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>*/}
      <LoggedOutView/>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
      );
    }
  }
}
// <span className ="navbar-brand" style={style}><Link to="/" style={{ textDecoration : 'none' }}>Florian Bonniec</Link></span> 

//export default NavBar;
export default connect(mapStatetoProps,actionCreators)(NavBar);
// {/* FBthis.props.appName.toLowerCase()*/}