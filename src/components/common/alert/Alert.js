import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

const Alert = () => {
  const [isStudent, setIsStudent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsStudent(pathname.includes("/student"));
  }, [pathname]);

  return isStudent ? (
    <div className="flex flex-row justify-end items-center w-full h-1/3">
      <p className="text-lg mr-2">새로운 답변</p>
      <div
        className="h-9 w-9 flex justify-center items-center rounded-full"
        style={{ backgroundColor: "white" }}
      >
        <AiOutlineMessage className="text-lg" style={{ cursor: "pointer" }} />
      </div>
    </div>
  ) : (
    <div className="flex flex-row justify-end items-center w-full h-1/3">
      <p className="text-lg mr-2">새로운 질문</p>
      <div
        className="h-9 w-9 flex justify-center items-center rounded-full"
        style={{ backgroundColor: "white" }}
      >
        <AiOutlineMessage className="text-lg" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Alert;
