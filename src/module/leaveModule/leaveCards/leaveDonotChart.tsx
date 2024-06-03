import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo({ color, value }) {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            datasets: [
                {
                    data: [value, 100 - value],
                    backgroundColor: [
                        color,
                        '#F5F5F5'
                    ],
                    hoverBackgroundColor: [
                        color,
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
    }, [color, value]);

    return (
        <div className="card flex justify-content-center relative">
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '16px', fontWeight: 500, color: '#686868', textAlign: 'center' }}>
                05/12
            </div>
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-7rem" />
        </div>
    )
}
