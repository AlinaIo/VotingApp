import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { NavBar, TopicsPage } from "../Components";
const Layout = () => {
  return (
    <BrowserRouter>
      <div className="Layout" style={{ minHeight: "85vh" }}>
        <Switch>
          <Route path="/" component={TopicsPage} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export { Layout };
