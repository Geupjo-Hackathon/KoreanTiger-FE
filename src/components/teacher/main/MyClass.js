import React from "react";
import ScheduledClass from "@/components/teacher/ScheduledClass";
import AssignmentSlide from "@/components/teacher/AssignmentSlide";
import WeeklyClassTable from "@/components/teacher/WeeklyClassTable";
import color from "@/tailwind-theme/color";

const MyClass = () => {
  return (
    <div
      className="w-full h-full flex flex-col p-4 border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <ScheduledClass />
      <AssignmentSlide />
      <WeeklyClassTable />
    </div>
  );
};

export default MyClass;
