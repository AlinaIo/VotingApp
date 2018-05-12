import React from "react";
import _ from "lodash";
import { TopicListItem } from "./TopicListItem";
const TopicsList = ({ topics }) => {
  return (
    <div className="container">
      <ul className="list-group text-center">
        {_.map(topics, topic => {
          return <TopicListItem topic={topic} key={topic._id} />;
        })}
      </ul>
    </div>
  );
};

export { TopicsList };
