"use client";
import Profile from "@/components/common/profile/Profile";
import Learning from "@/components/student/main/Learning";
import Alert from "@/components/common/alert/Alert";
import Attendance from "@/components/student/main/Attendance";
import Assignment from "@/components/teacher/main/Assignment";
import Progress from "@/components/student/main/Progress";
import Timeline from "@/components/student/main/Timeline";
import Test from "@/components/student/main/Test";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-0 max-h-screen min-w-screen p-4">
      <div className="col-span-1 row-span-1 flex p-4">
        <Profile />
      </div>
      <div className="col-span-1 row-span-3 p-4">
        <Learning />
      </div>
      <div className="col-span-1 row-span-1 p-4">
        <Alert />
        <Attendance />
      </div>
      <div className="col-span-1 row-span-4 p-4">
        <Assignment />
      </div>
      <div className="col-span-1 row-span-3 p-4">
        <Progress />
      </div>
      <div className="col-span-1 row-span-1 flex flex-row p-4">
        <Test />
      </div>
    </div>
  );
}
