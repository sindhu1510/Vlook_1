import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import "./index.scss";

export default function OpenTask() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Pending", "Completed"],
      datasets: [
        {
          label: "Tasks",
          data: [7, 16],
          backgroundColor: ["#E05A00", "#00AA00"],
          borderColor: ["#E05A00", "#00AA00"],
          borderWidth: 1,
          borderRadius: {
            topLeft: 6,
            topRight: 6,
          },
          width: 20,
          borderSkipped: false,
          barThickness: 60,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        x: {
          beginAtZero: true,
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context:any) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(context.parsed.y);
              }
              return label;
            },
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const drawLabelsPlugin = {
    id: "drawLabels",
    afterDatasetsDraw: (chart:any) => {
      const ctx = chart.ctx;
      chart.data.datasets.forEach(({ dataset, i }:any) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach(({ bar, index }:any) => {
          const { x, y, base } = bar;

        
          const label = `${chart.data.labels[index]}: ${dataset.data[index]} tasks`;
          ctx.save();
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          ctx.font = "bold 14px Arial"; 
          ctx.fillStyle = index === 0 ? "#E05A00" : "#00AA00"; 
          ctx.fillText(label, x, y - 5);
          ctx.restore();
        });
      });
    },
  };

  return (
    <div className="open__link__table shadow-1 m=0">
      <div className="attendance__list">Open Task</div>
      <div className="card">
        <Chart
          type="bar"
          height="324px"
          data={chartData}
          options={chartOptions}
          plugins={[drawLabelsPlugin]}
        />
      </div>
    </div>
  );
}
