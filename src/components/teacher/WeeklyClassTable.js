import React from "react";
import WeeklyClassTableInner from "@/components/teacher/WeeklyClassTableInner";

export default function WeeklyClassTable() {
  return (
    <div className="col-span-1 row-span-1 p-4">
      <div>
        <div style={{ fontSize: "18px" }}>시간표</div>
      </div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td
              style={{
                width: "50px",
                height: "50px",
              }}
            >
              월
            </td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
          </tr>
        </thead>
        <WeeklyClassTableInner />
      </table>
    </div>
  );
}
