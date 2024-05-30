import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BasicDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Total', '', '10'],
            datasets: [
                {
                    label: 'Sales',
                    data: [960,792, 605],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderWidth: 1
                }
            ]
        };

        const options = {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem: { raw: any; }) {
                            return tooltipItem.raw;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: true,
                        color: '#686868',
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center relative">
            <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '16px', fontWeight: 500, color: '#686868', textAlign: 'center' }}>
                <div style={{ color: '#E05A00', fontSize: '12px', fontWeight: 500 }}>Medium</div>
                <div className='mt-3' style={{ color: '#686868', fontSize: '12px', fontWeight: 500 }}>3</div>
            </div>
            <div style={{ position: 'absolute', top: '28%', left: '19%', transform: 'translate(-50%, -50%)', fontSize: '16px', fontWeight: 500, color: '#686868', textAlign: 'center' }}>
                <div style={{ color: "#C60000", fontSize: '12px', fontWeight: 500 }}>High</div>
                <div className='mt-3' style={{ color: '#686868', fontSize: '12px', fontWeight: 500 }}>5</div>
            </div>
            <div style={{ position: 'absolute', top: '58%', left: '80%', transform: 'translate(-50%, -50%)', fontSize: '16px', fontWeight: 500, color: '#686868', textAlign: 'center' }}>
                <div style={{ color: "#00AA00", fontSize: '12px', fontWeight: 500 }}>Low</div>
                <div className='mt-3' style={{ color: '#686868', fontSize: '12px', fontWeight: 500 }}>2</div>
            </div>
            <Chart type="bar" data={chartData} options={chartOptions} className="w-full md:w-18rem" />
        </div>
    );
}
