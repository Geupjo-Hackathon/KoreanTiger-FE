import React, { useEffect, useRef } from "react";
// Style
import color from "@/tailwind-theme/color";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // Pie 차트 생성
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default function AssignmentSlide() {
  return (
    <div
      className="col-span-1 row-span-1 border-t mt-2 pt-2 w-full"
      style={{ borderColor: color.violet_9740F6 }}
    >
      <div className="text-xl font-bold mb-2">과제</div>
      <div className="flex flex-row w-full items-center h-20">
        <div className="w-[5rem] mr-4">
          <PieChart />
        </div>
        {/* A반 정보 */}
        <div style={{ marginLeft: "10px" }}>
          <div className="font-semibold">A반</div>
          <div>계산기 만들기</div>
          <div>60% 완료 (3명 미제출, 2명 진행중)</div>
        </div>
      </div>
    </div>
  );
}
