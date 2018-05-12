import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./PostDetail.css";

class PollDetails extends Component {
  render() {
    const buttons = this.props.topic.options.map(function(item, i) {
      console.log("test");
      return (
        <Button
          key={i}
          bsStyle="success"
          className="btn btn-primary addTopicPanel-margins button-opt"
        >
          {item}
        </Button>
      );
    });
    return (
      <div className="poll-div">
        <h2>You are voting for: {this.props.topic.name}</h2>
        <div className="option">{buttons}</div>
      </div>
    );
  }
}

export { PollDetails };
