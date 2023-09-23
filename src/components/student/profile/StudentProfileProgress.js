import React from "react";

export default function StudentProfileProgress() {
  return (
    <div>
      <div
        className="w-full h-6 bg-gray-200 rounded-lg"
        style={{ backgroundColor: "gray" }}
      >
        <div
          className="h-6 rounded-lg"
          style={{ width: "45%", backgroundColor: "black" }}
        ></div>
      </div>
      <div className="w-1/2 flex justify-between">
        <span>레벨 LV</span>
        <span>단계</span>
      </div>
    </div>
  );
}
