import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { TopicsPage, ChartsPage } from "../Components";
const Layout = () => {
  return (
    <BrowserRouter>
      <div className="Layout" style={{ minHeight: "85vh" }}>
        <Switch>
          <Route path="/" component={TopicsPage} exact={true} />
          <Route path="/charts" component={ChartsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export { Layout };
