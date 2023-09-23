import React from "react";

export default function AssignmentSlide() {
  return (
    <div className="col-span-1 row-span-1 p-4">
      <div>
        <div style={{ fontSize: "18px" }}>과제</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* 피자 그래프 영역 */}
        <div
          style={{
            backgroundColor: "green",
            width: "30%",
            height: "120px",
          }}
        >
          피자그래프 영역
        </div>

        {/* A반 정보 */}
        <div style={{ marginLeft: "10px" }}>
          <div>A반</div>
          <div>계산기 만들기</div>
          <div>70% 완료 (3명 미제출, 10명)</div>
        </div>
      </div>
    </div>
  );
}
