import React from "react";
import _ from "lodash";
import { TopicListItem } from "./TopicListItem";
import { ListGroup } from 'react-bootstrap';

const TopicsList = ({ topics }) => {
  return (
    <div className="container">
     <ListGroup className = "topicsList">
        {_.map(topics, topic => {
          return <TopicListItem topic={topic} key={topic._id} />;
        })}
      </ListGroup>
    </div>
  );
};

export { TopicsList };