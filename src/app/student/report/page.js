"use client";
import Profile from "@/components/common/profile/Profile";
import Hexagon from "@/components/common/report/Hexagon";
import Alert from "@/components/common/alert/Alert";
import Report from "@/components/common/report/Report";
import Score from "@/components/common/report/Score";
import GoodBad from "@/components/common/report/GoodBad";
import Analysis from "@/components/common/report/Analysis";

export default function Home() {
  return (
    <div
      class="grid grid-cols-3 grid-rows-9 gap-0 max-h-screen min-w-screen p-[0.8rem]"
      style={{ minHeight: "calc(100vh - 1.6rem)" }}
    >
      <div class="col-span-1 row-span-4 p-[0.8rem] flex flex-col justify-between">
        <Profile />
        <Hexagon />
      </div>
      <div class="col-span-1 row-span-3 p-[0.8rem]">
        <Score />
      </div>
      <div class="col-span-1 row-span-3 p-[0.8rem] flex flex-col">
        <Alert />
        <Report />
      </div>
      <div class="col-span-2 row-span-6 p-[0.8rem]">
        <Analysis />
      </div>
      <div class="col-span-1 row-span-5 p-[0.8rem]">
        <GoodBad />
      </div>
    </div>
  );
}
