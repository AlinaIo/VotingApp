import React, { Component } from "react";
import { connect } from "react-redux";
import { VotingPanel } from "./VotingPanel";
import { VotingActions } from "../Actions";
import "./TopicListItem.css";
import { ListGroupItem } from "react-bootstrap";
import { VotingCounter } from "./VotingCounter";

class TopicListItemClass extends Component {
  render() {
    console.log(this.props)
    const t = Date.parse(new Date(this.props.topic.endDate)) - Date.parse(new Date());
    const expired = t <= 0;
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
        {isSelected ? (<div>
          {expired ? (<div className="topicListItem-votingPanel">
            <VotingPanel />
          </div>) : <div />}
          <div className="topicListItem-votingPanel">
            <VotingCounter endDate={this.props.topic.endDate} />
          </div>
        </div>
        ) : <div />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('dada')
  return {
    selectedTopic: state.Voting.selectedTopic,
    finished: VotingActions.finished
  };
}
const TopicListItem = connect(mapStateToProps, {
  update: VotingActions.update,
})(TopicListItemClass);

export { TopicListItem };
