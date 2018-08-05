import React from "react";
import moment from "moment";

var divStyle = {
        padding: "20px 10px 20px 10px",
    };

var imgProfileStyle = {
    float: "left",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "36px",
    height: "36px",
    borderRadius: "100px",
    marginRight: "10px",
    backgroundImage: "url(https://plus.google.com/+FlorianBonniec)",
};

var authorStyle = {
    padding: "10px",
};

export default class ArticleMetaData extends React.Component {
 

  render() {
    const article_date = (moment(this.props.post.createdAt).format("DD MMMM YYYY HH:mm","fr")).toString();
    return (
        <div style={divStyle}>
          {/* A JSX comment   <h2>{this.props.post.title}</h2> */}
            <div>
                <div style={{...imgProfileStyle, backgroundImage: `url(${this.props.post.user.picture})`}}></div>
                <div style={{...authorStyle}}> {article_date} by {this.props.post.user.username}</div>
            </div>
        </div>
    );
  }
}