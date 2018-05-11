import React, { Component } from "react";
import "./App.css";
import { ListItem } from "./Components/ListItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <div className="container">
            <div className="row">
              <article className="col-md-12">
                <h1 className="text-center">Voting list</h1>
                <h2 className="text-center">
                  Propose a new idea
                </h2>
                <ListItem className="app-container" />
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
