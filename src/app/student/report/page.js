"use client";
import Profile from "@/components/common/profile/Profile";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-8 gap-4 max-h-screen min-w-screen p-[0.8rem]">
      <div className="row-span-2 p-[0.8rem]">
        <Profile />
      </div>
      <div className="row-span-3 col-start-1 row-start-3 p-[0.8rem]">2</div>
      <div className="row-span-4 col-start-2 row-start-1 p-[0.8rem]">4</div>
      <div className="col-start-3 row-start-1 p-[0.8rem]">5</div>
      <div className="row-span-3 col-start-3 row-start-2 p-[0.8rem]">6</div>
      <div className="row-span-3 col-start-1 row-start-6 p-[0.8rem]">7</div>
      <div className="col-span-2 row-span-4 col-start-2 row-start-5 p-[0.8rem]">
        8
      </div>
    </div>
  );
}
