import React from "react";

const Analysis = () => {
  return (
    <div
      className="w-full h-full p-4"
      style={{
        backgroundColor: "white",
      }}
    >
      <p className="text-xl mb-4">상세 분석</p>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Analysis;
