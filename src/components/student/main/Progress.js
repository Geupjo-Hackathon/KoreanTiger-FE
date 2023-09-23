import React, { useEffect, useState } from "react";
// Component
import { Button } from "@/stories/Button";
// Style
import color from "@/tailwind-theme/color";

const Progress = () => {
  const [data, setData] = useState({
    lastWeek: {
      weekOfMonth: 2,
      totalLearningTime: 0,
      completeLectureCount: 0,
    },
    thisWeek: {
      weekOfMonth: 3,
      totalLearningTime: 0,
      completeLectureCount: 0,
    },
    meta: {
      date: "2023-09-23",
      achievementRate: "0",
    },
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getProgress = async () => {
    const response = await fetch(
      `${process.env.BASE_URL}/studentLms/achievement`
    );
    const jsonData = await response.json();
    setData(jsonData.data);
    console.log(jsonData.data);
  };

  useEffect(() => {
    // getProgress();
  }, []);

  return (
    <div
      className="w-full h-full p-6 flex flex-col justify-between border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <div>
        <p className="text-2xl mb-4 font-bold">주간 성취도</p>
        <div
          className="w-full h-11 mb-2 border-2"
          style={{ borderColor: color.violet_9740F6 }}
        >
          <div
            className="h-10"
            style={{
              width: `${
                data.thisWeek.completeLectureCount &&
                data.lastWeek.completeLectureCount &&
                (data.thisWeek.completeLectureCount /
                  data.lastWeek.completeLectureCount) *
                  100
              }%`,
              width: "50%",
              backgroundColor: color.hover_D9C3F1,
            }}
          ></div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <p>
              {data.lastWeek.weekOfMonth}주차:
              {data.lastWeek.completeLectureCount}강
            </p>
            <div className="w-4/5 h-5">
              <div
                className="h-5"
                style={{
                  width: `${data.lastWeek.completeLectureCount * 5}%`,
                  backgroundColor: "gray",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p>
              {data.thisWeek.weekOfMonth}주차:
              {data.thisWeek.completeLectureCount}강
            </p>
            <div className="w-4/5 h-5">
              <div
                className="h-5"
                style={{
                  width: `${data.lastWeek.completeLectureCount * 5}%`,
                  backgroundColor: "black",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          {data.meta.date.split("-")[0]}년도 {data.thisWeek.weekOfMonth}주차는{" "}
          {data.lastWeek.weekOfMonth}주차와 비교했을 때
        </p>
        <p>
          {data.thisWeek.completeLectureCount &&
            data.lastWeek.completeLectureCount &&
            (data.thisWeek.completeLectureCount /
              data.lastWeek.completeLectureCount) *
              100}
          % 입니다
        </p>
      </div>
      <div className="w-full flex flex-col">
        <p className="mb-2 text-sm" style={{ color: color.violet_9740F6 }}>
          더 정확한 정보를 보려면 더보기 버튼을 눌러주세요
        </p>
        <Button
          primary={true}
          backgroundColor={isHovered && color.violet_9740F6}
          size="large"
          label="더보기"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Progress;
