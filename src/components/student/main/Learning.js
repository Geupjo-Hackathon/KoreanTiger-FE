import React from "react";
import { Button } from "@/stories/Button";

const Learning = () => {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-4"
      style={{ backgroundColor: "white" }}
    >
      <div className="h-1/4 flex flex-col justify-between p-2">
        <p className="text-xl">나의 마지막 학습</p>
        <Button
          primary={true}
          backgroundColor="blue"
          size="large"
          label="00강 반복문과 조건문"
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
