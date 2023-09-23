import React, { useState } from "react";
// Component
import { Button } from "@/stories/Button";

const Learning = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-4"
      style={{ backgroundColor: "white" }}
    >
      <div className="h-1/4 flex flex-col justify-between p-2">
        <p className="text-xl">나의 마지막 학습</p>
        <Button
          primary={true}
          backgroundColor={isHovered && color.violet_9740F6}
          size="large"
          label="00강 반복문과 조건문"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="h-3/4 flex flex-col p-2">
        <p className="text-xl">나만의 프로그램</p>
        <div className="w-full h-full ">강의 바로가기 버튼 박스</div>
      </div>
    </div>
  );
};

export default Learning;
