import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
      datasets: [
        {
          data: [10, 20, 30, 40, 50],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // Radar 차트 생성
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "radar",
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

const Hexagon = () => {
  return (
    <div
      className="w-full mt-[1.6rem] h-full flex flex-col p-4"
      style={{
        backgroundColor: "white",
      }}
    >
      <p className="text-lg">영역별 분석</p>
      <div className="h-[20rem] mt-4">
        <RadarChart />
      </div>
    </div>
  );
};

export default Hexagon;
