import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../assets/css/Graphs.css';

const Graphs = () => {
    return (
        <div className='graph-container'>
            <h1>Statistics</h1>
            <div className="main-container">
                <h2>About complaints</h2>
                <div className="graph-container">
                    <PieChart
                        data={[
                            { title: 'Complaints issued', value: 10, color: '#FF0000' },
                            { title: 'Complaints resolved', value: 15, color: '#00FF00' },
                        ]}
                    />
            </div>
            <div className="main-container">
                <h2>About intensity of the complaints and issues</h2>
                    <div className='graph-container'>
                        <PieChart
                            data={[
                                { title: 'Red Zone', value: 40, color: '#FF0000' },
                                { title: 'Yellow Zone', value: 15, color: '#FFFF00' },
                                { title: 'Red Zone', value: 20, color: '#00FF00' },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graphs