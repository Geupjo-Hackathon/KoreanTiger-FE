"use client";
import Profile from "@/component/common/profile/Profile";
import Learning from "@/component/student/main/Learning";
import Alert from "@/component/common/alert/Alert";
import Attendance from "@/component/student/main/Attendance";
import Ranking from "@/component/student/main/Ranking";
import Progress from "@/component/student/main/Progress";
import Timeline from "@/component/student/main/Timeline";
import Test from "@/component/student/main/Test";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-0 min-h-screen min-w-screen">
      <div className="col-span-1 row-span-1 border flex">
        <Profile />
      </div>
      <div className="col-span-1 row-span-3 border">
        <Learning />
      </div>
      <div className="col-span-1 row-span-1 border">
        <Alert />
        <Attendance />
      </div>
      <div className="col-span-1 row-span-2 border">
        <Ranking />
      </div>
      <div className="col-span-1 row-span-2 border">
        <Progress />
      </div>
      <div className="col-span-2 row-span-2 border">
        <Timeline />
      </div>
      <div className="col-span-1 row-span-2 border flex flex-row">
        <Test />
      </div>
    </div>
  );
}
