import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import color from "@/tailwind-theme/color";
import { usePathname } from "next/navigation";
import StudentProfileProgress from "@/components/student/profile/StudentProfileProgress";

const Profile = () => {
  const username = "test";
  const school = "test고등학교";

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
  const [isStudent, setIsStudent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsStudent(pathname.includes("/student"));
  }, [pathname]);

  return (
    <div
      className="w-full h-32 flex flex-row justify-between p-4"
      style={{ backgroundColor: "white" }}
    >
      <div className="w-1/3 h-full flex justify-center items-center">
        사진
        {/* <Image src={} alt="프로필 이미지"/> */}
      </div>
      <div className="w-2/3 h-full flex flex-col">
        {isStudent ? (
          <div>
            <span className="text-lg">{username}</span>
            <StudentProfileProgress />
          </div>
        ) : (
          <div>
            <span className="text-lg">{username} 선생님</span>
            <div>{school}</div>
          </div>
        )}
        <div className="flex flex-row items-center">
          <AiFillStar className="text-base mr-2" />
          <p>0일 연속 접속</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
