import React from "react";
import ClassFilter from "./ClassFilter";
import Button from "@/components/common/buttons/button";
import { sizeStyles } from "../common/buttons/button/style";

export default function SubjectList() {
  return (
    <div>
      <ClassFilter />
      <table>
        <thead>
          <tr>
            <td style={{ width: "40%", border: "1px solid black" }}></td>
            <td style={{ width: "35%", border: "1px solid black" }}>과제 명</td>
            <td style={{ width: "35%", border: "1px solid black" }}>과제 강</td>
            <td style={{ width: "10%", border: "1px solid black" }}>반</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gd</td>
            <td>gd</td>
          </tr>
        </tbody>
      </table>

      <Button
        sizeStyles="md"
        colorTheme="pink"
        disabled={false}
        onClick={() => console.log("hi")}
        buttonName={"gg"}
      />
    </div>
  );
}
