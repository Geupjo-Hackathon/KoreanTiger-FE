import React from "react";
import ClassFilter from "./ClassFilter";
import Button from "@/components/common/buttons/button";
import { sizeStyles } from "../common/buttons/button/style";
import color from "@/tailwind-theme/color";

export default function SubjectList({ classInfo }) {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col justify-start mb-4">
        <div className="flex flex-row w-full justify-between">
          <p className="font-semibold mb-2">2023년 9월 24일</p>
          <p className="font-semibold" style={{ color: color.hover_D9C3F1 }}>
            5명 미완료
          </p>
        </div>
        <div
          className="w-full h-32 flex flex-row justify-around p-4 border-2 rounded-md"
          style={{ borderColor: color.hover_D9C3F1 }}
        >
          <div
            className="w-1/3 h-full"
            style={{ backgroundColor: color.hover_D9C3F1 }}
          ></div>
          <div className="w-2/3 flex flex-col ml-4">
            <p className="font-bold" style={{ color: color.violet_9740F6 }}>
              정보라는 건 뭘까?
            </p>
            <p className="text-sm">
              정보 단어의 정확한 정의와 실생활에서 사용되는 예제를 재미있는
              그림을 통해 알아봐요!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start mb-4">
        <div className="flex flex-row w-full justify-between">
          <p className="font-semibold mb-2">2023년 9월 23일</p>
          <p className="font-semibold" style={{ color: color.hover_D9C3F1 }}>
            2명 미완료
          </p>
        </div>
        <div
          className="w-full h-32 flex flex-row justify-around p-4 border-2 rounded-md"
          style={{ borderColor: color.hover_D9C3F1 }}
        >
          <div
            className="w-1/3 h-full"
            style={{ backgroundColor: color.hover_D9C3F1 }}
          ></div>
          <div className="w-2/3 flex flex-col ml-4">
            <p className="font-bold" style={{ color: color.violet_9740F6 }}>
              프로그래밍이란?
            </p>
            <p className="text-sm">
              컴퓨터 언어의 기본 원리와 실생활에 적용된 프로그래밍의 예시에 대해
              배워봐요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
