import React, { useState } from "react";
import SubjectList from "@/components/teacher/SubjectList";
import ClassFilter from "@/components/teacher/ClassFilter";

const Assignment = () => {
  const [classInfo, setClassInfo] = useState("");

  const onFilterProps = {};

  return (
    <div className="w-full h-full" style={{ backgroundColor: "white" }}>
      <div className="flex flex-row">
        <div style={{ fontSize: "22px" }}>내가 낸 과제</div>
      </div>
      <div>
        <ClassFilter />
        <SubjectList />
      </div>
    </div>
  );
};

export default Assignment;
