import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./PostDetail.css";
import { connect } from "react-redux";
import { VotingActions } from "../Actions";

class PollDetailsClass extends Component {
  selectOption(option) {
    this.props.update(option, "option");
  }
  renderButtons() {
    console.log('props====', this.props);
    return this.props.topic.options.map((item, i) => {
      console.log("test");
      return (
        <Button
          key={i}
          bsStyle="success"
          type="submit"
          className="btn btn-primary addTopicPanel-margins button-opt"
          onClick={this.selectOption.bind(this, item)}
        >
          {item}
        </Button>
      );
    });
  }
  render() {
    return (
      <div className="poll-div">
        <h2>You are voting for: {this.props.topic.name}</h2>
        <div className="option">{this.renderButtons()}</div>
      </div>
    );
  }
}

const PollDetails = connect(null, {
  update: VotingActions.update
})(PollDetailsClass);

export { PollDetails };
