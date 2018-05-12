import React, { Component } from "react";
import { BarChart } from "react-easy-chart";
import { Chart, Axis, Series, Tooltip, Cursor, Line } from 'react-charts'

class OurBarChart extends Component {
  render() {
    const data=[
    ];
    return (
      <div>
        {/* <BarChart
          data={[
            { x: "A", y: 20 },
            { x: "B", y: 30, color: "#365382" },
            { x: "C", y: 40 },
            { x: "D", y: 20 },
            { x: "E", y: 40 },
            { x: "F", y: 25 },
            { x: "G", y: 5, color: "orange" }
          ]}
        /> */}
        <Chart data={data}>
          <Axis
            primary
            type="time"
            position="bottom"
          />
          <Axis
            type="linear"
            position="left"
          />
          <Series type={Line} />
          <Tooltip />
          <Cursor primary />
          <Cursor />
        </Chart>
      </div>
    );
  }
}

export { OurBarChart };
