import React from "react";
import SchelduedClass from "@/components/teacher/SchelduedClass";
import AssignmentSlide from "@/components/teacher/AssignmentSlide";
import WeeklyClassTable from "@/components/teacher/WeeklyClassTable";
import color from "@/tailwind-theme/color";

const MyClass = () => {
  return (
    <div
      className="w-full h-full flex flex-col justify-around p-4 border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <div style={{ fontSize: "22px" }}>나의 수업 정보</div>
      <SchelduedClass />
      <AssignmentSlide />
      <WeeklyClassTable />
    </div>
  );
};

export default MyClass;
