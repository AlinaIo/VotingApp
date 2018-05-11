import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OurPieChart from './components/piechart';
import OurBarChart from './components/barchart';
import { Provider } from "react-redux";
import store from "./Reducers";
import { Layout } from "./Routes";

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <div>
      //     <p className="App-intro">
      //       To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //     <OurPieChart />
      //     {/* <OurBarChart /> */}
      //   </div>
      //   <div className="loader">
      //     <h1>Water</h1>
      //   </div>
      // </div>

      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
    );
  }
}
export { App };
