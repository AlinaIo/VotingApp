import React, { Component } from "react";
import { connect } from "react-redux";
import { VotingActions } from "../Actions";
import "./VotingPanel.css";
import { PollDetails } from "./PollDetails"
class VotingPanelClass extends Component {
  render() {
    return (
      <form
        className="votingPanel"
        onSubmit={e => {
          e.preventDefault();
          console.log(this.props);
          this.props.add({
            name: this.props.topic,
            options: this.props.options.split(", "),
            endDate: this.props.endDate
          });
        }}
      >
        <PollDetails />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    cnp: state.Voting.cnp,
    selectedTopic: state.Voting.selectedTopic
  };
}
const VotingPanel = connect(mapStateToProps, {
  update: VotingActions.update
})(VotingPanelClass);

export { VotingPanel };
