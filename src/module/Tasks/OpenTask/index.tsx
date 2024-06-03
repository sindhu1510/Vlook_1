import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

const OpenTask = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Pending", "Completed"],
      datasets: [
        {
          label: "Sales",
          data: [2,4,6, 8,10, 12, 14],
          backgroundColor: [
            "#E05A00",
            "#00AA00",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
          ],
          borderWidth: 1,
          color:[
            "#E05A00",
            "#00AA00",
          ]
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};
export default OpenTask;
