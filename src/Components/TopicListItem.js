import React, { Component } from "react";
import { connect } from "react-redux";
import { VotingPanel } from "./VotingPanel";
import { VotingActions } from "../Actions";
import "./TopicListItem.css";
import { ListGroupItem } from "react-bootstrap";
import { VotingCounter } from "./VotingCounter";

class TopicListItemClass extends Component {
  render() {
    const isSelected =
      this.props.selectedTopic &&
      this.props.selectedTopic._id == this.props.topic._id;
    return (
      <div>
        <ListGroupItem
          className="topicListItem"
          onClick={() => {
            if (isSelected) {
              this.props.update(undefined, "selectedTopic");
            } else {
              this.props.update(this.props.topic, "selectedTopic");
            }
          }}
        >
          <i
            className={`fas fa-chevron-circle-${
              isSelected ? "down" : "right"
            } arrow`}
          />
          <div className="topicListItem-side">{this.props.topic.name}</div>
        </ListGroupItem>
        <div className="topicListItem-votingPanel">
          {isSelected ? <VotingPanel /> : <div />}
        </div>
        <div className="topicListItem-votingPanel">
          {isSelected ? (
            <VotingCounter endDate={this.props.topic.endDate} />
          ) : (
            <div />
          )}
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
