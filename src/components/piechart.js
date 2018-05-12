import React, { Component } from "react";
import { PieChart, Legend } from "react-easy-chart";

class OurPieChart extends Component {
  render() {
    var divStyle = {
      color: 'white'
    };
    
    const pieData = [
      { key: "No", value: 100, color: "#001a33" },
      { key: "Yes", value: 200, color: "#dce7c5" },
      { key: "I don't care", value: 50, color: "#e3a51a" }
    ];
    const config = [
      { color: '#001a33' },
      { color: '#dce7c5' },
      { color: '#e3a51a' }
    ];
    return (
      <div className="flex-grid">
        <div className="col">
          <PieChart
            size={400}
            innerHoleSize={200}
            data={pieData}
          />
          <Legend data={pieData} dataId={'key'} config={config} horizontal styles={divStyle}/>
        </div>
      </div>
    );
  }
}

export { OurPieChart };
