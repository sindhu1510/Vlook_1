import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            datasets: [
                {
                    data: [300, 50],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                    ]
                }
            ]
        };
        const options = {
            cutout: '72%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center relative">
            <div  style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)',fontSize:'16px',fontWeight:500,color:'#686868',textAlign:'center'}}>
                06/15
            </div>
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-10rem"/>
        </div>
    )
}


