import React from "react";
import "./AddTopicPanel.css";

class TopicListItem extends React.Component {
  state = {
    open: false
  };

  render() {
    return (
      <div
        className="list-item"
        onClick={() => {
          console.log("supa");
          this.setState({ open: !this.state.open });
        }}
      >
        <i
          className={`fas fa-chevron-circle-down arrow ${
            this.state.open ? "arrow-rotate" : ""
          }`}
        />
        <li className="list-group-item list-group-item-info text-item">
          {this.props.topic.name}
        </li>
      </div>
    );
  }
}
export { TopicListItem };
