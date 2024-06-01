import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function VerticalBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

        const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        const barColors = [
            '#D9D9D9',
            '#D9D9D9',
            '#0047AB',
            '#D9D9D9',
            '#D9D9D9',
            '#F6F6F6'
        ];

        const data = {
            labels: daysOfWeek,
            datasets: [
                {
                    label: 'Day Data',
                    backgroundColor: barColors,
                    borderColor: '#0047AB',
                    borderRadius: 10,
                    width: '10px',
                    borderSkipped: false,
                    data: [
                        { x: 0, y: [10, 75] },
                        { x: 1, y: [25, 85] },
                        { x: 2, y: [25, 85] },
                        { x: 3, y: [15, 75] },
                        { x: 4, y: [25, 80] },
                        { x: 5, y: [25, 70] }
                    ]
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function (context) {
                            return daysOfWeek[context[0].dataIndex];
                        },
                        label: function (context) {
                            const range = context.raw.y;
                            return `${range[0]} - ${range[1]}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        },
                        callback: function (value, index) {
                            return daysOfWeek[index];
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        callback: function (value) {
                            const labels = {
                                10: '9:00',
                                50: '12:00',
                                90: '22:00'
                            };
                            return labels[value] || '';
                        }
                    },
                    grid: {
                        color: false,
                        drawBorder: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center relative">
            <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '12px', fontWeight: 600, color: '#686868', textAlign: 'center', border: '1px solid #00000014', padding: '3px', borderRadius: '6px', backgroundColor: '#FFFFFF', borderColor: 'none' }}>
                10:00 to 19:00 - 9:16 Hrs
            </div>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    );
}
