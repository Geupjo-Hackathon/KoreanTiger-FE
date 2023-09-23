import React from "react";
import ClassFilter from "./ClassFilter";
import Button from "@/components/common/buttons/button";
import { sizeStyles } from "../common/buttons/button/style";

export default function SubjectList({ classInfo }) {
  return (
    <div>
      <table style={{ margin: "10px" }}>
        <thead>
          <tr>
            <td
              style={{
                width: "5%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            ></td>
            <td
              style={{
                width: "55%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              과제 명
            </td>
            <td
              style={{
                width: "35%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              과제 강
            </td>
            <td
              style={{
                width: "15%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              반
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gd</td>
            <td>gd</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
