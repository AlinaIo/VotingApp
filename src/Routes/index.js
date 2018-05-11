import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { NavBar } from "../Components";
const Layout = () => {
  return (
    <BrowserRouter>
      {/* <PublicNavigator /> */}
      <div className="Layout" style={{ minHeight: "85vh" }}>
        <Switch>
          {/* <Route path="/about" component={About} exact={true} />
        <Route path="/posts/:id" component={Post} exact={true} />
        <Route path="/posts" component={PostsNew} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/" component={Home} exact={true} /> */}
          <Route path="/" component={NavBar} exact={true} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export { Layout };
