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
      ><br/>
        <input
          type="text"
          placeholder="CNP"
          max="13"
          maxLength="13"
          min="13"
          required
          className="form-control cnpInput"
          value={this.props.cnp}
          onChange={e => {
            this.props.update(e.target.value, "cnp");
          }}
        /><br/>
        {this.props.error ? <h1 className="errorMessage">Your CNP is invalid or you've already voted for this poll!</h1> : ""}
        <PollDetails topic={this.props.selectedTopic} />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    cnp: state.Voting.cnp,
    selectedTopic: state.Voting.selectedTopic,
    option: state.Voting.option,
    error: state.Voting.error,
    submitted: state.Voting.submitted
  };
}
const VotingPanel = connect(mapStateToProps, {
  update: VotingActions.update,
  save: VotingActions.send,
  select: VotingActions.select
})(VotingPanelClass);

export { VotingPanel };
