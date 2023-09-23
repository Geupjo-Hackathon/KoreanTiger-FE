import React from "react";
// Style
import color from "@/tailwind-theme/color";

export default function ScheduledClass() {
  return (
    <div>
      <div className="text-xl font-bold mb-2">다음 수업</div>
      <div>
        <div
          className="w-full h-12 flex flex-row justify-around rounded-md items-center mb-2"
          style={{
            cursor: "pointer",
            backgroundColor: color.violet_9740F6,
            color: "white",
          }}
        >
          <div>A반</div>
          <div>호랑 프로그래밍 응용</div>
          <div>2023-09-20</div>
          <div>1교시</div>
        </div>
        <div
          className="w-full h-12 flex flex-row justify-around border-2 rounded-md items-center mb-2"
          style={{
            cursor: "pointer",
            borderColor: color.hover_D9C3F1,
          }}
        >
          <div>B반</div>
          <div>정보란 무엇일까?</div>
          <div>2023-09-21</div>
          <div>2교시</div>
        </div>
      </div>
    </div>
  );
}
