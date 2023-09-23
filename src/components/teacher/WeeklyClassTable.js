import React from "react";
// Component
import WeeklyClassTableInner from "@/components/teacher/WeeklyClassTableInner";
// Style
import color from "@/tailwind-theme/color";

export default function WeeklyClassTable() {
  return (
    <div
      className="col-span-1 row-span-1 border-t mt-4 pt-2 w-full"
      style={{ borderColor: color.violet_9740F6 }}
    >
      <div className="text-xl font-bold mb-2 text-center">시간표</div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td className="text-center">월</td>
            <td className="text-center">화</td>
            <td className="text-center">수</td>
            <td className="text-center">목</td>
            <td className="text-center">금</td>
          </tr>
        </thead>
        <WeeklyClassTableInner />
      </table>
    </div>
  );
}
