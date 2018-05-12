import React, { Component } from "react";
import { connect } from "react-redux";
import { VotingActions } from "../Actions";
import "./VotingPanel.css";

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
            options: this.props.options.split(","),
            endDate: this.props.endDate
          });
        }}
      >
        <label htmlFor="ideaItem" className="addTopicPanel-margins">
          Enter your idea
        </label>
        <input
          type="text"
          placeholder="Topic"
          max="100"
          min="5"
          required
          className="form-control addTopicPanel-input"
          value={this.props.topic}
          onChange={e => {
            this.props.update(e.target.value, "newTopic");
          }}
        />
        <input
          type="text"
          placeholder="Options (Yes, No)"
          max="100"
          min="5"
          required
          className="form-control addTopicPanel-input"
          value={this.props.options}
          onChange={e => {
            this.props.update(e.target.value, "options");
          }}
        />
        <input
          type="datetime-local"
          className="form-control addTopicPanel-input"
          required
          value={this.props.endDate}
          onChange={e => {
            this.props.update(e.target.value, "endDate");
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
    cnp: state.Voting.cnp,
    selectedTopic: state.Voting.selectedTopic
  };
}
const VotingPanel = connect(mapStateToProps, {
  update: VotingActions.update
})(VotingPanelClass);

export { VotingPanel };
