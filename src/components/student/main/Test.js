import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Test = () => {
  return (
    <div
      className="w-full h-full p-6 flex justify-between items-center"
      style={{ backgroundColor: "white" }}
    >
      <div>
        <AiFillCaretLeft className="h-10 w-10" />
      </div>
      <div className="flex flex-row w-full justify-around items-center">
        <div
          className="w-20 h-20 rounded-full"
          style={{ backgroundColor: "gray" }}
        >
          image
        </div>
        <div>
          <p>TEST</p>
          <p>설명입니다</p>
        </div>
      </div>
      <div>
        <AiFillCaretRight className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Test;
