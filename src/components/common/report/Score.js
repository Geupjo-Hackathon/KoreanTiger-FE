import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // Line 차트 생성
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

const Score = () => {
  return (
    <div
      className="w-full h-full flex flex-col p-4"
      style={{
        backgroundColor: "white",
      }}
    >
      <p className="text-lg font-bold">영역별 분석</p>
      <div className="h-[20rem] mt-4">
        <LineChart />
      </div>
    </div>
  );
};

export default Score;
