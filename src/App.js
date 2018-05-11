import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Reducers";
import { Layout } from "./Routes";
import "./App.css";

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
