import React, { Component } from "react";
import { PieChart, Legend } from "react-easy-chart";

class OurPieChart extends Component {
  replaceAll = (search, replacement, text) => {
    var target = text;
    return target.split(search).join(replacement);
  };

  parseResults = () => {
    let str = JSON.stringify(this.props.voteresults);
    str = this.replaceAll('name', 'key', str);
    str = this.replaceAll('count', 'value', str);
    const object = JSON.parse(str);
    return object;
  }
  render() {
    let res = {};
    let pieData = [];
    if (Object.keys(this.props.voteresults).length > 1) {
      res = this.parseResults(this.props.voteresults);
      let colors = [{ color: "#001a33" }, { color: "#dce7c5" }];
      for (const item in res.options) {
        res.options[item] = { ...res.options[item], ...colors[item] };
      }
      pieData = res.options;
    }
    var divStyle = {
      color: 'white'
    };
    
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
          <Legend data={pieData} dataId={'key'} config={config} horizontal styles={divStyle} />
        </div>
      </div>
    );
  }
}

export { OurPieChart };
