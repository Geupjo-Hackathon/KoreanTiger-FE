"use client";
import Profile from "@/components/common/profile/Profile";
import MyClass from "@/components/teacher/main/MyClass";
import Alert from "@/components/common/alert/Alert";
import StudentReport from "@/components/teacher/main/StudentReport";
import Assignment from "@/components/teacher/main/Assignment";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-0 max-h-screen min-w-screen p-4">
      <div className="col-span-1 row-span-1 flex p-4">
        <Profile />
      </div>
      <div className="col-span-1 row-span-6 p-4">
        <MyClass />
      </div>
      <div className="col-span-1 p-4">
        <Alert />
        <StudentReport />
      </div>
      <div className="col-span-1 row-span-6 p-4">
        <Assignment />
      </div>
    </div>
  );
}
