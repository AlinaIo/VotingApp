import React from "react";
import { OurLineChart } from './Linechart';
import { OurPieChart } from './Piechart';

const ChartsPage = () => (
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
                <OurPieChart />
            </div>
            <div className="col">
                <OurLineChart />
            </div>
            <div className="col">
            </div>
        </div>
    </div>
);


export { ChartsPage };
