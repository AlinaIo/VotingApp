import React, { Component } from "react";
import { TopicsList } from "./TopicsList";
import { connect } from "react-redux";
import { LoginActions, TopicsActions } from "../Actions";
import { AddTopicPanel } from "./AddTopicPanel";
import { VotingPanel } from "./VotingPanel";
import "./TopicsPage.css";
class TopicsPageClass extends Component {
  checks() {}
  componentWillMount() {
    this.checks();
    this.props.get();
  }
  renderExtra() {}
  render() {
    return (
      <div className="topicsPage">
        <div className="container">
          <div className="row">
            <article className="col-md-12">
              <h1 className="text-center">Voting list</h1>
              <input
                type="text"
                placeholder="Search topics"
                max="100"
                maxLength="100"
                min="0"
                required
                className="form-control"
                value={this.props.topicFilter}
                onChange={e => {
                  this.props.filter(e.target.value);
                }}
              />
              <div className="topicsPage-panels">
                <div className="col-md-6" style={{ flex: 1 }}>
                  <div className="topicsPage-topicsList">
                    <TopicsList topics={this.props.topics} />
                  </div>
                  {/* <div className="topicsPage-votingPanel">
                    {this.props.selectedTopic ? <VotingPanel /> : <div />}
                  </div> */}
                </div>
              </div>
              {this.renderExtra()}
            </article>
          </div>
        </div>
      </div>
    );
  }
}

class AdminTopicsPageClass extends TopicsPageClass {
  checks() {
    if (!this.props.match.params.accessToken) {
      this.props.check();
    } else {
      this.props.loggedIn(this.props.match.params.accessToken);
    }
  }

  renderExtra() {
    return this.props.loggedIn ? <AddTopicPanel /> : <div />;
  }
}
function mapStateToPropsAdmin(state) {
  return {
    topics: state.Topics.filtered,
    topicFilter: state.Topics.filter,
    selectedTopic: state.Voting.selectedTopic,
    loggedIn: state.Login.loggedIn
  };
}
const AdminTopicsPage = connect(mapStateToPropsAdmin, {
  check: LoginActions.check,
  loggedIn: LoginActions.loggedIn,
  get: TopicsActions.get,
  filter: TopicsActions.filter
})(AdminTopicsPageClass);

function mapStateToProps(state) {
  return {
    topics: state.Topics.filtered,
    selectedTopic: state.Voting.selectedTopic,
    topics: state.Topics.filtered,
    topicFilter: state.Topics.filter
  };
}
const TopicsPage = connect(mapStateToProps, {
  get: TopicsActions.get,
  filter: TopicsActions.filter
})(TopicsPageClass);

export { TopicsPage, AdminTopicsPage };
