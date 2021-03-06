import React, { Component } from "react";
import "./App.css";
import "../src/css/linechart.css"
import { Provider } from "react-redux";
import store from "./Reducers";
import { Layout } from "./Routes";

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
    );
  }
}
export { App };
