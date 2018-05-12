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
          className="btn btn-primary addTopicPanel-margins"
        >
          {item}
        </Button>
      );
    });
    return (
      <div>
        <h2>Your voting options</h2>
        <div className="option">{buttons}</div>
      </div>
    );
  }
}

export { PollDetails };
