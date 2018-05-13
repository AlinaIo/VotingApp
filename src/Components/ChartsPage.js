import React, { Component } from "react";
import { OurLineChart } from './Linechart';
import { OurPieChart } from './Piechart';

import axios from 'axios';

class ChartsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {}
        }
    }
    componentDidMount() {
        console.log(this.props)
        axios.get(`http://backend-hacktm-2018.westeurope.cloudapp.azure.com:3001/results/${this.props.topicId}`)
            .then(response => {
                console.log(response)
                this.setState({ results: response.data })
            })
            .catch(error => console.log('err', error))
        // .then((myres) => {
        //     this.setState({results:myres})
        // })
    }
    render() {
        console.log('==state==', this.state)
        return (
            <div>
                <div className="charts-header">
                    <h1>{this.state.results.topicName}</h1>
                </div>
                <div className="flex-grid">                    
                    <div className="col">
                        <OurPieChart voteresults={this.state.results} />
                    </div>
                </div>
                <div className="flex-grid">
                    <div className="col">
                        <OurLineChart />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export { ChartsPage };
