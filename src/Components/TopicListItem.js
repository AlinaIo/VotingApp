import React from "react";
const TopicListItem = ({ topic }) => {
  return (
    <div className="list-item">
      <i className="fas fa-chevron-circle-down arrow" />
      <li className="list-group-item list-group-item-info text-item">
        {topic.name}
      </li>
    </div>
  );
};
export { TopicListItem };
