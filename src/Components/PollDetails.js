import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class PollDetails extends Component {
  render() {

    return (
      <div>
        <Button bsStyle="success" className="btn btn-primary addTopicPanel-margins">Yes</Button>
        <Button bsStyle="danger" className="btn btn-primary addTopicPanel-margins">No</Button>
      </div>
    );
  }
}

export { PollDetails };
