import React from "react";
// Style
import color from "@/tailwind-theme/color";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Timeline = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  const daysInMonth = [];
  for (let day = 1; day <= lastDay; day++) {
    daysInMonth.push(day);
  }

  const dayComponents = daysInMonth.map((date, index) => (
    <div
      key={index}
      className="w-[4rem] h-[1.5rem] mb-2 rounded-md flex justify-center items-center"
      style={{ backgroundColor: "white", color: color.basic_CECECE }}
    >
      {index}
    </div>
  ));

  return (
    <div
      className="w-full h-full p-4 flex flex-row"
      style={{ backgroundColor: "white" }}
    >
      <div className="w-3/4 h-full flex flex-col justify-between">
        <div className="flex flex-row items-center w-full justify-around mb-4">
          <AiFillCaretLeft className="h-6 w-6" />
          <p className="text-2xl">{currentMonth}월</p>
          <AiFillCaretRight className="h-6 w-6" />
        </div>
        <div
          className="w-full h-[12rem] flex flex-col flex-wrap p-2"
          style={{ backgroundColor: "rgb(242, 242, 242)" }}
        >
          {dayComponents}
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <div>
            <div className="flex flex-row">
              <p>완료 수업</p>
            </div>
            <p>00시간 00분</p>
          </div>
          <div>
            <div className="flex flex-row">
              <p>총 학습</p>
            </div>
            <p>00시간 00분</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
