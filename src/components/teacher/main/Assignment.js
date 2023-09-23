import React, { useState } from "react";
import SubjectList from "@/components/teacher/SubjectList";
import ClassFilter from "@/components/teacher/ClassFilter";
import color from "@/tailwind-theme/color";

const Assignment = () => {
  const [classInfo, setClassInfo] = useState("");

  const onFilterProps = {};

  return (
    <div
      className="w-full h-full flex flex-col p-4 border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <div className="text-xl font-bold mb-2">내가 낸 과제</div>
      <div className="w-full h-full flex flex-col items-center">
        <ClassFilter />
        <SubjectList />
      </div>
    </div>
  );
};

export default Assignment;
