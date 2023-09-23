"use client";
import color from "@/tailwind-theme/color";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link
        href={"/student"}
        className="w-50 h-30 text-3xl p-12 rounded-lg m-4 flex justify-center items-center"
        style={{ backgroundColor: color.violet_9740F6, color: "white" }}
      >
        학생
      </Link>
      <Link
        href={"/teacher"}
        className="w-50 h-30 text-3xl p-12 rounded-lg m-4 flex justify-center items-center"
        style={{ backgroundColor: color.violet_9740F6, color: "white" }}
      >
        선생님
      </Link>
    </div>
  );
}
