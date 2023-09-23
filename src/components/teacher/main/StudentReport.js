import React from "react";
import ClassFilter from "../ClassFilter";
import ReportList from "@/components/teacher/ReportList";

export default function StudentReport() {
  return (
    <div className="w-full h-full" style={{ backgroundColor: "white" }}>
      <div className="flex flex-row">
        <div style={{ fontSize: "22px" }}>학생 학습 보고서</div>
      </div>
      <div>
        <ClassFilter />
        <ReportList />
      </div>
    </div>
  );
}
