import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="list-group text-center">
          {Object.keys(this.props.ideas).map(
            function(key) {
              return (
                <div>
                  <i className="fas fa-chevron-circle-down" />
                  <li className="list-group-item list-group-item-info">
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
