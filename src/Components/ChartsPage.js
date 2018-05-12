import React, { Component } from "react";
import { OurLineChart } from './Linechart';
import { OurPieChart } from './Piechart';

class ChartsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {}
        }
    }
    componentDidMount(){
        fetch('http://backend-hacktm-2018.westeurope.cloudapp.azure.com:3001/results/2')
            .then(response => {
                return response.json();
            })
            .then((myres) => {
                this.setState({results:myres})
            })
    }
    render() {
        return (
            <div>
                <div className="charts-header">
                    <h1>Do you want to save the world?</h1>
                </div>
                <div className="flex-grid-thirds">
                    <button className="button">Yes</button>
                    <button className="button">No</button>
                    <button className="button">I don't care</button>
                </div>
                <div className="flex-grid">
                    <div className="col">
                    </div>
                    <div className="col">
                        <OurPieChart voteresults={this.state.results}/>
                    </div>
                    <div className="col">
                        <OurLineChart />
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}

export { ChartsPage };
