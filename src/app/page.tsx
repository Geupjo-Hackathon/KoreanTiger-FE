"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/student"} className="w-20 h-10 border">
        학생
      </Link>
      <Link href={"/teacher"} className="w-20 h-10 border">
        선생님
      </Link>
    </div>
  );
}
