import React, { useEffect, useState } from "react";
// Style
import color from "@/tailwind-theme/color";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Timeline = () => {
  const [data, setData] = useState();
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  const getHistories = async () => {
    const response = await fetch(
      `${process.env.BASE_URL}/studentLms/histories`
    );
    const jsonData = await response.json();
    console.log(jsonData.data);
    setData(jsonData.data);
  };

  useEffect(() => {
    getHistories();
  }, []);

  const DayComponents =
    data &&
    data.learningHistories.map((timeGrade, index) => {
      let bgColor = "white";
      let fontColor = color.basic_CECECE;

      if (timeGrade == 1) {
        bgColor = color.hover_D9C3F1;
        fontColor = color.violet_9740F6;
      } else if (timeGrade == 2) {
        bgColor = color.violet_9740F6;
        fontColor = "white";
      }
      return (
        <div
          key={index}
          className="w-[3.5rem] h-[1.5rem] mb-2 rounded-md flex justify-center items-center"
          style={{ backgroundColor: bgColor, color: fontColor }}
        >
          {index + 1}
        </div>
      );
    });

  return (
    <div
      className="w-full h-full p-4 flex flex-row border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <div className="w-3/4 h-full flex flex-col justify-between">
        <div className="flex flex-row items-center w-full justify-around mb-4">
          <AiFillCaretLeft className="h-6 w-6" />
          <p className="text-2xl">{currentMonth}월</p>
          <AiFillCaretRight className="h-6 w-6" />
        </div>
        <div
          className="w-full h-[12rem] flex flex-col flex-wrap justify-start items-start p-2"
          style={{ backgroundColor: "rgb(242, 242, 242)" }}
        >
          {DayComponents}
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col py-12 px-6">
        <div className="mb-4">
          <div className="flex flex-row items-center">
            <p className="text-lg font-bold mr-2">완료 수업</p>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color.violet_9740F6 }}
            ></div>
          </div>
          <p>{data && data.meta.completeLectureCount}개</p>
        </div>
        <div>
          <p className="text-lg font-bold">총 학습</p>
          <div className="flex flex-row">
            <p className="mr-2">
              {data && Math.floor(data.meta.totalLearningTime / 60)}시간
            </p>
            <p>{data && data.meta.totalLearningTime % 60}분</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
