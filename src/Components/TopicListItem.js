import React, { Component } from "react";
import { connect } from "react-redux";
import { VotingPanel } from "./VotingPanel";
import { VotingActions } from "../Actions";
import "./TopicListItem.css";
class TopicListItemClass extends Component {
  render() {
    const isSelected =
      this.props.selectedTopic &&
      this.props.selectedTopic._id == this.props.topic._id;
    return (
      <div className="topicListItem">
        <div
          className="list-item topicListItem-item"
          onClick={() => {
            this.props.update(this.props.topic, "selectedTopic");
          }}
        >
          <i
            className={`fas fa-chevron-circle-${
              isSelected ? "right" : "down"
            } arrow`}
          />
          <li className="list-group-item list-group-item-info text-item">
            {this.props.topic.name}
          </li>
        </div>
        <div className="topicListItem-votingPanel">
          {isSelected ? <VotingPanel /> : <div />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedTopic: state.Voting.selectedTopic
  };
}
const TopicListItem = connect(mapStateToProps, {
  update: VotingActions.update
})(TopicListItemClass);

export { TopicListItem };
