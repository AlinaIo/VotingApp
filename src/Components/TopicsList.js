import React from "react";
import _ from "lodash";
import { TopicListItem } from "./TopicListItem";
import { ListGroup } from "react-bootstrap";

const TopicsList = ({ topics, children }) => {
  return (
    <div className="container">
      {children}
      <br />
      <ListGroup className="topicsList">
        {_.map(topics, topic => {
          return <TopicListItem topic={topic} key={topic._id} />;
        })}
      </ListGroup>
    </div>
  );
};

export { TopicsList };
