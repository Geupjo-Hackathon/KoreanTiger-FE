import React, { useState } from "react";
import ClassFilter from "../ClassFilter";
import ReportList from "@/components/teacher/ReportList";
import color from "@/tailwind-theme/color";
import { Button } from "@/stories/Button";

export default function StudentReport() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="w-full flex flex-col p-4 border-2 rounded-md"
      style={{
        backgroundColor: "white",
        borderColor: color.hover_D9C3F1,
        minHeight: "calc(100vh - 7rem)",
      }}
    >
      <div className="text-xl font-bold">학생 학습 보고서</div>
      <div>
        <ClassFilter />
        <ReportList />
      </div>
      <div className="p-4">
        <Button
          primary={true}
          backgroundColor={isHovered && color.violet_9740F6}
          size="large"
          label="보고서 내보내기"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}
