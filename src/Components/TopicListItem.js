import React from "react";
import "./AddTopicPanel.css";
import { PollDetails } from "./PollDetails"

class TopicListItem extends React.Component {
  state = {
    open: false,
    display: 'none'
  };

  render() {
    return (
      <div
        className="list-item"
        onClick={() => {
          console.log("supa");
          this.setState({ open: !this.state.open ? this.state.display : this.state.display = "inline" });

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
        <PollDetails style={{ display: this.state.display }} />
      </div>
    );
  }
}
export { TopicListItem };
