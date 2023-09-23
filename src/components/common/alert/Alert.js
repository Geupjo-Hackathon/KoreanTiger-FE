import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

const Alert = () => {
  return (
    <div className="flex flex-row justify-end items-center w-full h-[3rem]">
      <p className="text-lg mr-2">새로운 답변</p>
      <div
        className="h-9 w-9 flex justify-center items-center rounded-full"
        style={{ backgroundColor: "white" }}
      >
        <AiOutlineMessage className="text-lg" />
      </div>
    </div>
  );
};

export default Alert;
