import React from "react";
import { Button } from "@/stories/Button";

const Progress = () => {
  return (
    <div>
      {" "}
      <p>주간 나의 성취도</p>
      <div>progress bar</div>
      <div>
        <div className="flex flex-row">
          <p>00주: 00강</p>
          <div>progress</div>
        </div>
        <div className="flex flex-row">
          <p>00주: 00강</p>
          <div>progress</div>
        </div>
      </div>
      <div>
        <p>0000년도 00주는 00주와 비교했을 때</p>
        <p>000% 했습니다</p>
      </div>
      <p>더 정확한 정보를 보려면 더보기를 눌러주세요</p>
      <Button
        primary={true}
        backgroundColor="blue"
        size="large"
        label="더보기"
      />
    </div>
  );
};

export default Progress;
