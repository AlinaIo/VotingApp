import React, { Component } from "react";
import { TopicsList } from "./TopicsList";
import { connect } from "react-redux";
import { LoginActions, TopicsActions } from "../Actions";
import { AddTopicPanel } from "./AddTopicPanel";
import { VotingPanel } from "./VotingPanel";
import "./TopicsPage.css";
class TopicsPageClass extends Component {
  componentWillMount() {
    this.props.get();
  }
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
              <AddTopicPanel />
            </article>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    topics: state.Topics.topics,
    selectedTopic: state.Voting.selectedTopic
  };
}
const TopicsPage = connect(mapStateToProps, {
  get: TopicsActions.get
})(TopicsPageClass);

export { TopicsPage };
