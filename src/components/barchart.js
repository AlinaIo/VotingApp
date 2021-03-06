import React, { Component } from "react";
import { BarChart } from "react-easy-chart";

class OurBarChart extends Component {
  render() {
    return (
      <div>
        <BarChart
          data={[
            { x: "A", y: 20 },
            { x: "B", y: 30, color: "#365382" },
            { x: "C", y: 40 },
            { x: "D", y: 20 },
            { x: "E", y: 40 },
            { x: "F", y: 25 },
            { x: "G", y: 5, color: "orange" }
          ]}
        />
      </div>
    );
  }
}

export { OurBarChart };
