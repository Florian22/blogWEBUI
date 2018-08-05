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
        <div class="hidden-xs" style={{marginBottom: "20px",  bottom: "50px",background: "no-repeat center center",  backgroundAttachment: "scroll",  position: "relative",backgroundImage: "url('./../../images/headerBackground.jpg')"}}>
        <div style={{position: "absolute", top: "0",  left: "0",  height: "100%",  width: "100%",  opacity: "0.5"}}></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto ">
              <div style = {{ padding: "200px 0 150px",  color: "white"}}>
                <h1></h1>
                <span style = {{fontSize: "22px",  fontWeight: "320",  lineHeight: "1.1",  display: "block",  margin: "10px 0 0"}}></span>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}