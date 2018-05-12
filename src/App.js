import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OurPieChart from './Components/piechart';
import OurBarChart from './Components/barchart';
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
