import React from "react";

class AddFormIdea extends React.Component {
  state = {
    ideaName: ""
  };
  createidea(e) {
    e.preventDefault();
    this.props.addidea(this.state.ideaName);
    this.setState({ ideaName: "" });
  }
  render() {
    return (
      <form
        className="form-inline"
        ref="ideaForm"
        onSubmit={this.createidea.bind(this)}
      >
        <div className="form-group">
          <label for="ideaItem">
            Enter your idea
            <input
              type="text"
              id="ideaItem"
              placeholder="e.x.lemmon"
              ref="ideaName"
              className="form-control"
              value={this.state.ideaName}
              onChange={e => {
                this.setState({ ideaName: e.target.value });
              }}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add idea
        </button>
      </form>
    );
  }
}

export { AddFormIdea };
