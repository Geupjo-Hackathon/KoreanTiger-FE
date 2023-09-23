import React, { useEffect, useState } from "react";
// Component
import { Button } from "@/stories/Button";
// Style
import color from "@/tailwind-theme/color";

const Learning = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState();

  const getLearning = async () => {
    const response = await fetch(
      `${process.env.BASE_URL}/studentLms/learning-box`
    );
    const jsonData = await response.json();
    setData(jsonData.data);
  };

  useEffect(() => {
    getLearning();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full h-full flex flex-col justify-around p-4 border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <div className="h-1/4 flex flex-col justify-between p-2">
        <p className="text-xl">나의 마지막 학습</p>
        <Button
          primary={true}
          backgroundColor={isHovered && color.violet_9740F6}
          size="large"
          label={data && data.title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="h-3/4 flex flex-col p-2">
        <p className="text-xl">나만의 프로그램</p>
        <div className="w-full h-full flex flex-col justify-around">
          <Button
            primary={true}
            backgroundColor={isHovered && color.violet_9740F6}
            size="large"
            label="정보라는 건 뭘까?"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Button
            primary={true}
            backgroundColor={isHovered && color.violet_9740F6}
            size="large"
            label="프로그래밍이란?"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Button
            primary={true}
            backgroundColor={isHovered && color.violet_9740F6}
            size="large"
            label="컴퓨터를 이루는 0과 1에 대해 알아보자!"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Button
            primary={true}
            backgroundColor={isHovered && color.violet_9740F6}
            size="large"
            label="호랑 프로그래밍 응용"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Learning;
