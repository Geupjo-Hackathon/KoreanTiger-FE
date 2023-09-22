import React from "react";
import { Button } from "@/stories/Button";

const Progress = () => {
  return (
    <div className="w-full h-full p-6" style={{ backgroundColor: "white" }}>
      <div>
        <p className="text-xl mb-4">주간 나의 성취도</p>
        <div className="w-full h-10 mb-2" style={{ backgroundColor: "gray" }}>
          <div
            className="h-10"
            style={{ width: "45%", backgroundColor: "black" }}
          ></div>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <div className="flex flex-row items-center justify-between">
            <p>00주: 00강</p>
            <div className="w-4/5 h-5">
              <div
                className="h-5"
                style={{ width: "45%", backgroundColor: "gray" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p>00주: 00강</p>
            <div className="w-4/5 h-5">
              <div
                className="h-5"
                style={{ width: "45%", backgroundColor: "black" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p>0000년도 00주는 00주와 비교했을 때</p>
        <p>000% 했습니다</p>
      </div>
      <div className="w-full flex flex-col">
        <p className="mb-4">더 정확한 정보를 보려면 더보기를 눌러주세요</p>
        <Button
          primary={true}
          backgroundColor="blue"
          size="large"
          label="더보기"
        />
      </div>
    </div>
  );
};

export default Progress;
