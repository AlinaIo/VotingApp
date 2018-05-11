import React from "react";
import { ListItem } from "./ListItem";
const TopicsPage = () => {
  return (
    <div id="wrapper">
      <div className="container">
        <div className="row">
          <article className="col-md-12">
            <h1 className="text-center">Voting list</h1>
            <h2 className="text-center">Propose a new idea</h2>
            <ListItem className="app-container" />
          </article>
        </div>
      </div>
    </div>
  );
};

export { TopicsPage };
