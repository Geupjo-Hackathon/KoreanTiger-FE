import React from "react";

export default function ReportList() {
  return (
    <div className="w-full h-full p-4">
      <table className="w-full">
        <thead>
          <tr>
            <td className="w-1/4 border-b-2 border-black text-center font-bold">
              이름
            </td>
            <td className="w-1/4 border-b-2 border-black text-center font-bold">
              누적 시간
            </td>
            <td className="w-1/4 border-b-2 border-black text-center font-bold">
              최근 강의
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-1/5 border-b border-black text-center">이광수</td>
            <td className="w-1/5 border-b border-black text-center">84시간</td>
            <td className="w-3/5 border-b border-black text-center">
              호랑 프로그래밍 기초
            </td>
          </tr>
          <tr>
            <td className="w-1/5 border-b border-black text-center">김희민</td>
            <td className="w-1/5 border-b border-black text-center">63시간</td>
            <td className="w-3/5 border-b border-black text-center">
              호랑 프로그래밍 응용
            </td>
          </tr>
          <tr>
            <td className="w-1/5 border-b border-black text-center">하한울</td>
            <td className="w-1/5 border-b border-black text-center">20시간</td>
            <td className="w-3/5 border-b border-black text-center">
              정보라는 건 뭘까?
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
