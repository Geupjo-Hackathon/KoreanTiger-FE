import React, { useEffect, useState } from "react";
// Component
import { Button } from "@/stories/Button";

const Attendance = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // const getAttendance = async () => {
  //   const response = await fetch(`${process.env.BASE_URL}/studentLms/check-in`);
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // };

  // useEffect(() => {
  //   getAttendance();
  // }, []);

  return (
    <div className="w-full h-2/3 flex p-4" style={{ backgroundColor: "white" }}>
      <div
        className="w-24 h-full rounded-xl flex flex-col justify-center items-center"
        style={{ backgroundColor: "gray" }}
      >
        <p>TUE</p>
        <p>00일</p>
      </div>
      <div className="flex flex-col ml-4 w-full h-full">
        <p className="text-lg">00일 연속 출석체크</p>
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
