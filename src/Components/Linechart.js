import React, { Component } from "react";
import { LineChart, Legend } from "react-easy-chart";

class OurLineChart extends Component {
    render() {
        var divStyle = {
            color: 'white'
          };
        return (
            <LineChart
                xType={'time'}
                axes
                grid
                verticalGrid
                interpolate={'cardinal'}
                lineColors={['#e3a51a', '#dce7c5']}
                width={750}
                height={400}
                styles={divStyle}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
            />
        );
    }
}

export { OurLineChart };