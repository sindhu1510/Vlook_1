import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import SvgNextarrow from "../../../../assets/icons/SvgNextArrow";
import "./index.scss";

const HorizontalBar = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("transparent");
    const defaultColor = documentStyle.getPropertyValue("--blue-500");
    const data = {
      labels: ["Sun", "Sat", "Fri", "Thu", "Wed", "Tue", "Mon"],
      datasets: [
        {
          label: "Tasks",
          // data: [7, 16],
          backgroundColor: [
            "transparent",
            "transparent",
            "#FFD2B3",
            "#C2EEFF",
            "#FFCACA",
            "#C2EEFF",
            "#FFCACA",
          ],
          borderColor: [
            "transparent",
            "transparent",
            "#FFD2B3",
            "#C2EEFF",
            "#FFCACA",
            "#C2EEFF",
            "#FFCACA",
          ],
          borderWidth: 1,
          borderRadius: {
            bottomRight: 6,
            topRight: 6,
          },
          borderSkipped: false,
          data: [2, 4, 6, 8, 10, 12, 14, 16],
        },
      ],
     
    };
    const options = {
      indexAxis: "y",
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                return `${label}: ${context.parsed.y} hours`;
              }
              return "";
            },
          },
        },
      },

      scales: {
        x: {
          ticks: {
            color: textColorSecondary,

            font: {
              weight: 500,
              size: "16px",
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="harizontal__table shadow-1 m=0">
      <div className="tabel__view__header">
        <div className="attendance__list">Workload Status</div>
        <SvgNextarrow />
      </div>
      <div className="card">
        <Chart
          height="266px"
          width="100%"
          type="bar"
          data={chartData}
          options={chartOptions}
        />
      </div>
      <div className="total__work__hours">Total work hours</div>
    </div>
  );
};
export default HorizontalBar;
