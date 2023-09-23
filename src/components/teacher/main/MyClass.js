import React from "react";
import SchelduedClass from "@/components/teacher/SchelduedClass";
import AssignmentSlide from "@/components/teacher/AssignmentSlide";
import WeeklyClassTable from "@/components/teacher/WeeklyClassTable";

const MyClass = () => {
  return (
    <div className="w-full h-full" style={{ backgroundColor: "white" }}>
      <div style={{ fontSize: "22px" }}>나의 수업 정보</div>
      <SchelduedClass />
      <AssignmentSlide />
      <WeeklyClassTable />
    </div>
  );
};

export default MyClass;
