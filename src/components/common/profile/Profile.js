import React, { useEffect } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import color from "@/tailwind-theme/color";

const Profile = () => {
  // const getProfile = async () => {
  //   const response = await fetch(
  //     `${process.env.BASE_URL}/studentLms/experience`
  //   );
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // };

  // useEffect(() => {
  //   getProfile();
  // }, []);

  return (
    <div
      className="w-full h-full flex flex-row justify-between p-4"
      style={{ backgroundColor: "white" }}
    >
      <div className="w-1/3 h-full flex justify-center items-center">
        사진
        {/* <Image src={} alt="프로필 이미지"/> */}
      </div>
      <div className="w-2/3 h-full flex flex-col">
        <span className="text-lg">이름</span>
        <div
          className="w-full h-6 bg-gray-200 rounded-lg"
          style={{ backgroundColor: "gray" }}
        >
          <div
            className="h-6 rounded-lg"
            style={{ width: "45%", backgroundColor: "black" }}
          ></div>
        </div>
        <div className="w-1/2 flex justify-between">
          <span>레벨 LV</span>
          <span>단계</span>
        </div>
        <div className="flex flex-row items-center">
          <AiFillStar className="text-base mr-2" />
          <p>0일 연속 접속</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
