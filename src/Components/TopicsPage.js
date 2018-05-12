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
              <h2 className="text-center">Propose a new idea</h2>
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
  checks() {}

  renderExtra() {
    return <AddTopicPanel />;
  }
}
function mapStateToPropsAdmin(state) {
  return {
    topics: state.Topics.topics,
    selectedTopic: state.Voting.selectedTopic,
    loggedIn: state.Login.loggedIn
  };
}
const AdminTopicsPage = connect(mapStateToPropsAdmin, {
  check: LoginActions.check,
  get: TopicsActions.get
})(AdminTopicsPageClass);

function mapStateToProps(state) {
  return {
    topics: state.Topics.topics,
    selectedTopic: state.Voting.selectedTopic
  };
}
const TopicsPage = connect(mapStateToProps, {
  get: TopicsActions.get
})(TopicsPageClass);

export { TopicsPage, AdminTopicsPage };
