import React from "react";
import { AddFormIdea } from "./AddFormIdea";
import { List } from "./List";

class ListItem extends React.Component {
  state = {
    ideas: this.getInitialState()
  };
  getInitialState() {
    return {
      "idea-1": "Down with the sickness",
      "idea-2": "Start teaching philosophy in schools",
      "idea-3": "Clean all roads"
    };
  }
  addidea(idea) {
    var timestamp = new Date().getTime();
    this.state.ideas["idea-" + timestamp] = idea;
    this.setState({ ideas: this.state.ideas });
  }

  render() {
    return (
      <div className="component-wrapper">
        <List ideas={this.state.ideas} />
        <AddFormIdea addidea={this.addidea.bind(this)} />
      </div>
    );
  }
}

export { ListItem };
