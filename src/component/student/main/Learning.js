import React from "react";
import { Button } from "@/stories/Button";

const Learning = () => {
  return (
    <div>
      <p>나의 마지막 학습</p>
      <Button
        primary={true}
        backgroundColor="blue"
        size="large"
        label="00강 반복문과 조건문"
      />
      <p>나만의 프로그램</p>
      <div>강의 버튼</div>
    </div>
  );
};

export default Learning;
