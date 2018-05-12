import React from "react";
import { OurBarChart } from './Barchart';
import { OurPieChart } from './Piechart';

const ChartsPage = () => (
    <div>
        <div>
            <h2>Do you want to save the world?</h2>
        </div>
        <div>
            <button className="button">Yes</button>
            <button className="button">No</button>
            <button className="button">I don't care</button>
        </div>
        <div className="flex-grid">
            <div className="col">
                <OurBarChart />
            </div>
            <div className="col">
                <OurPieChart />
            </div>
            <div className="col">
            </div>
        </div>
    </div>
);


export { ChartsPage };
