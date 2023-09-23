import React from "react";
import { schedule } from "@/data/schedule";

console.log(schedule);

export default function WeeklyClassTable() {
  return (
    <tbody>
      {schedule.map((scheduleItemGroup) => {
        return (
          <tr key={scheduleItemGroup.id}>
            <td
              style={{
                width: "80px",
                height: "20px",
              }}
            >
              {scheduleItemGroup.name}
            </td>
            <td
              style={{
                border: "1px solid black",
                width: "60px",
                height: "44px",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                width: "60px",
                height: "20px",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                width: "60px",
                height: "20px",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                width: "60px",
                height: "20px",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                width: "60px",
                height: "20px",
              }}
            ></td>
          </tr>
        );
      })}
    </tbody>
  );
}
