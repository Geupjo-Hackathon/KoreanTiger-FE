import React from "react";

export default function SchelduedClass() {
  return (
    <div>
      <div style={{ fontSize: "18px" }}>진행 예정 수업</div>
      <div>
        <table style={{ margin: "10px" }}>
          <thead>
            <tr>
              <td
                style={{
                  width: "30%",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                  padding: "5px",
                }}
              >
                반
              </td>
              <td
                style={{
                  width: "40%",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                  padding: "5px",
                }}
              >
                수업명
              </td>
              <td
                style={{
                  width: "20%",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                  padding: "5px",
                }}
              >
                일자
              </td>
              <td
                style={{
                  Width: "20%",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                  padding: "5px",
                }}
              >
                교시
              </td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ cursor: "pointer" }}>
              <td>반 1</td>
              <td>예정 수업 1</td>
              <td>2023-09-20</td>
              <td style={{ textAlign: "center" }}>1</td>
            </tr>
            <tr style={{ cursor: "pointer" }}>
              <td>반 2</td>
              <td>예정 수업 2</td>
              <td>2023-09-21</td>
              <td>2</td>
            </tr>
            <tr style={{ cursor: "pointer" }}>
              <td></td>
              <td style={{ textAlign: "center" }}>예정된 수업이 없습니다.</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
