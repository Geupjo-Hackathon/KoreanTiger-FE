import color from "@/tailwind-theme/color";
import React from "react";

const Analysis = () => {
  return (
    <div
      className="w-full h-full p-4"
      style={{
        backgroundColor: "white",
      }}
    >
      <p className="text-xl mb-4 font-bold">상세 분석</p>
      <table className="table-auto w-full">
        <thead>
          <tr style={{ backgroundColor: color.hover_D9C3F1 }}>
            <th>문제 유형</th>
            <th>문제 해결 확률</th>
            <th>문제 해결 점수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">111</td>
            <td className="text-center">222</td>
            <td className="text-center">333</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Analysis;
