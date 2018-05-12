import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicsActions } from "../Actions";
import "./AddTopicPanel.css";
import SimpleSchema from "simpl-schema";

class AddTopicPanelClass extends Component {
  render() {
    return (
      <form
        className="addTopicPanel"
        onSubmit={e => {
          e.preventDefault();
          this.props.add({
            name: this.props.topic,
            options: this.props.options.split(",")
          });
        }}
      >
        <label htmlFor="ideaItem" className="addTopicPanel-margins">
          Enter your idea
        </label>
        <input
          type="text"
          id="ideaItem"
          placeholder="Topic"
          ref="ideaName"
          className="form-control addTopicPanel-input"
          value={this.props.topic}
          onChange={e => {
            this.props.update(e.target.value, "newTopic");
          }}
        />
        <input
          type="text"
          id="ideaItem"
          placeholder="Options (Yes, No)"
          ref="ideaName"
          className="form-control addTopicPanel-input"
          value={this.props.options}
          onChange={e => {
            this.props.update(e.target.value, "options");
          }}
        />
        <button className="btn btn-primary addTopicPanel-margins" type="submit">
          Add idea
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    topic: state.Topics.newTopic,
    options: state.Topics.options
  };
}
const AddTopicPanel = connect(mapStateToProps, {
  update: TopicsActions.updateTopic,
  add: TopicsActions.add
})(AddTopicPanelClass);

export { AddTopicPanel };
