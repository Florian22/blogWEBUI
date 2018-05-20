import React from "react";

import Title from "./Title";
import NavBar from "./Navbar";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
        <NavBar ></NavBar>
    );
  }
}