import React from "react";
import color from "@/tailwind-theme/color";

const GoodBad = () => {
  return (
    <div
      className="w-full h-full flex flex-row"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="w-1/2 h-full px-4 py-6 flex flex-col justify-between">
        <div className="flex flex-row items-center">
          <div
            className="h-12 w-12 rounded-full mr-2"
            style={{ backgroundColor: color.violet_9740F6 }}
          ></div>
          <p>참 잘했어요</p>
        </div>
        <div
          className="w-full h-[5.5rem] border"
          style={{ borderColor: color.violet_9740F6 }}
        ></div>
      </div>
      <div className="w-1/2 h-full px-4 py-6 flex flex-col justify-between">
        <div className="flex flex-row items-center">
          <div
            className="h-12 w-12 rounded-full mr-2"
            style={{ backgroundColor: color.violet_9740F6 }}
          ></div>
          <p>다음에 잘 해봐요</p>
        </div>
        <div
          className="w-full h-[5.5rem] border"
          style={{ borderColor: color.violet_9740F6 }}
        ></div>
      </div>
    </div>
  );
};

export default GoodBad;
