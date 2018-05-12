import React from "react";
import "../css/list.css";

class List extends React.Component {
  state = {
    open: false
  };
  onClickItem() {
    console.log("supa");
    this.setState({ open: true });
  }
  render() {
    return (
      <div className="container">
        <ul className="list-group text-center">
          {Object.keys(this.props.ideas).map(
            function(key) {
              return (
                <div className="list-item" onClick={this.onClickItem()}>
                  <i className="fas fa-chevron-circle-down arrow" />
                  <li className="list-group-item list-group-item-info text-item">
                    {this.props.ideas[key]}
                  </li>
                </div>
              );
            }.bind(this)
          )}
        </ul>
      </div>
    );
  }
}

export { List };
