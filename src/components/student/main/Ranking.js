import React from "react";

const Ranking = () => {
  return (
    <div className="w-full h-full p-4" style={{ backgroundColor: "white" }}>
      <div className="flex flex-row">
        <div
          className="w-24 h-8 flex justify-center items-center rounded-t-lg mr-1"
          style={{ backgroundColor: "gray" }}
        >
          <p>우리 학교</p>
        </div>
        <div
          className="w-24 h-8 flex justify-center items-center rounded-t-lg"
          style={{ backgroundColor: "gray" }}
        >
          <p>전체</p>
        </div>
      </div>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th></th>
            <th>랭킹</th>
            <th>이름</th>
            <th>진행도</th>
            <th>레벨</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>555</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
