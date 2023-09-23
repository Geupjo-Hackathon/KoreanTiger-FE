import React, { useEffect, useState } from "react";
// Component
import { Button } from "@/stories/Button";
import color from "@/tailwind-theme/color";

const Attendance = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getAttendance = async () => {
    const response = await fetch(`${process.env.BASE_URL}/studentLms/check-in`);
    const jsonData = await response.json();
    setData(jsonData.data);
  };

  useEffect(() => {
    getAttendance();
  }, []);

  return (
    <div
      className="w-full h-2/3 flex p-4 border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <div
        className="w-24 h-full rounded-xl flex flex-col justify-center items-center"
        style={{ backgroundColor: color.violet_9740F6 }}
      >
        <p className="text-lg font-bold" style={{ color: "white" }}>
          {data && data.date.split("-")[1].slice(0, 3)}
        </p>
        <p className="text-lg font-bold" style={{ color: "white" }}>
          {data && data.date.split("-")[0]}일
        </p>
      </div>
      <div className="flex flex-col ml-4 w-full h-full">
        <p className="text-lg">{data && data.connection}일 연속 출석체크</p>
        <Button
          primary={true}
          backgroundColor={isHovered && color.violet_9740F6}
          size="medium"
          label="오늘의 출석체크하기"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Attendance;
