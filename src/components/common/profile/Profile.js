import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// Style
import color from "@/tailwind-theme/color";

const Profile = () => {
  const [data, setData] = useState();

  const getProfile = async () => {
    const response = await fetch(
      `${process.env.BASE_URL}/studentLms/experience`
    );
    const jsonData = await response.json();
    setData(jsonData.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const [isStudent, setIsStudent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsStudent(pathname.includes("/student"));
  }, [pathname]);

  return (
    <div
      className="w-full h-[7.5rem] flex flex-row justify-between p-4 rounded-md"
      style={{ backgroundColor: color.hover_D9C3F1 }}
    >
      <div className="w-2/5 h-full flex justify-center items-center">
        <div
          className="w-24 h-24 rounded-full flex justify-center items-center"
          style={{ backgroundColor: "white" }}
        >
          <img src="/horang.png" />
        </div>
      </div>
      <div className="w-3/5 h-full flex flex-col">
        {isStudent ? (
          <div>
            <span className="text-3xl font-bold">{data && data.name}</span>
          </div>
        ) : (
          <div>
            <span className="text-3xl font-bold">
              {data && data.name} 선생님
            </span>
          </div>
        )}
        <div className="flex flex-row">
          <p className="mr-4">레벨 LV{data && data.experience}</p>
          <p>{data && data.title}</p>
        </div>
        <div className="flex flex-row items-center">
          <p>{data && data.connection}일 연속 접속</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
