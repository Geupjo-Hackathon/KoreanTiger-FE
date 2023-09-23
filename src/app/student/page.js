"use client";
import Profile from "@/components/common/profile/Profile";
import Learning from "@/components/student/main/Learning";
import Alert from "@/components/common/alert/Alert";
import Attendance from "@/components/student/main/Attendance";
import Ranking from "@/components/student/main/Ranking";
import Progress from "@/components/student/main/Progress";
import Timeline from "@/components/student/main/Timeline";
import Badge from "@/components/student/main/Badge";

export default function Home() {
  return (
    <div
      className="grid grid-cols-3 grid-rows-5 gap-0 max-h-screen min-w-screen p-[0.8rem]"
      style={{ minHeight: "calc(100vh - 1.6rem)" }}
    >
      <div className="col-span-1 row-span-1 flex p-[0.8rem]">
        <Profile />
      </div>
      <div className="col-span-1 row-span-3 p-[0.8rem]">
        <Learning />
      </div>
      <div className="col-span-1 row-span-1 px-[0.8rem] pb-[0.8rem] h-[10rem]">
        <Alert />
        <Attendance />
      </div>
      <div className="col-span-1 row-span-2 p-[0.8rem]">
        <Ranking />
      </div>
      <div className="col-span-1 row-span-3 p-[0.8rem] h-[25.5rem] mt-[1rem]">
        <Progress />
      </div>
      <div className="col-span-2 row-span-2 p-[0.8rem]">
        <Timeline />
      </div>
      <div className="col-span-1 row-span-1 flex flex-row p-[0.8rem]">
        <Badge />
      </div>
    </div>
  );
}
