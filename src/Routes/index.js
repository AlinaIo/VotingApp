import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { TopicsPage, ChartsPage } from "../Components";
import { PollDetails } from "../Components/PollDetails";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="Layout" style={{ minHeight: "85vh" }}>
        <Switch>
          <Route path="/" component={TopicsPage} exact={true} />
          <Route path="/charts" component={ChartsPage} />
          <Route path="/polldetails" component={PollDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export { Layout };
