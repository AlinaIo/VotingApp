import React, { Component } from "react";
import { TopicsList } from "./TopicsList";
import { connect } from "react-redux";
import { TopicsActions } from "../Actions";
import { AddTopicPanel } from "./AddTopicPanel";
class TopicsPageClass extends Component {
  componentWillMount() {
    this.props.get();
  }
  render() {
    return (
      <div className="topicsPage" id="wrapper">
        <div className="container">
          <div className="row">
            <article className="col-md-12">
              <h1 className="text-center">Voting list</h1>
              <h2 className="text-center">Propose a new idea</h2>
              <TopicsList topics={this.props.topics} />
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
    topics: state.Topics.topics
  };
}
const TopicsPage = connect(mapStateToProps, {
  get: TopicsActions.get
})(TopicsPageClass);

export { TopicsPage };
