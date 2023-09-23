import React from "react";

export default function ReportList() {
  return (
    <div>
      <table style={{ margin: "10px" }}>
        <thead>
          <tr>
            <td
              style={{
                width: "25%",
                borderBottom: "2px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              이름
            </td>
            <td
              style={{
                width: "25%",
                borderBottom: "2px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              누적 시간
            </td>
            <td
              style={{
                width: "25%",
                borderBottom: "2px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              누적 강의
            </td>
            <td
              style={{
                width: "25%",
                borderBottom: "2px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              반
            </td>
            <td
              style={{
                width: "20%",
                borderBottom: "2px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            ></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                width: "20%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              gd
            </td>
            <td
              style={{
                width: "20%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              gd
            </td>
            <td
              style={{
                width: "20%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              gd
            </td>
            <td
              style={{
                width: "20%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              gd
            </td>
            <td
              style={{
                width: "20%",
                borderBottom: "1px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              gd
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
