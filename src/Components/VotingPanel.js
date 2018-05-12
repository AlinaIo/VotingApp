import React, { Component } from "react";
import { connect } from "react-redux";
import { VotingActions } from "../Actions";
import "./VotingPanel.css";
import { PollDetails } from "./PollDetails";
class VotingPanelClass extends Component {
  render() {
    return (
      <form
        className="votingPanel"
        onSubmit={e => {
          e.preventDefault();
          console.log(this.props);
          this.props.save(
            {
              topicId: this.props.selectedTopic._id,
              option: this.props.option
            },
            this.props.cnp
          );
        }}
      >
        <input
          type="text"
          placeholder="CNP"
          max="13"
          maxLength="13"
          min="13"
          required
          className="form-control"
          value={this.props.cnp}
          onChange={e => {
            this.props.update(e.target.value, "cnp");
          }}
        />
        <PollDetails topic={this.props.selectedTopic} />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    cnp: state.Voting.cnp,
    selectedTopic: state.Voting.selectedTopic,
    option: state.Voting.option
  };
}
const VotingPanel = connect(mapStateToProps, {
  update: VotingActions.update,
  save: VotingActions.send
})(VotingPanelClass);

export { VotingPanel };
