import color from "@/tailwind-theme/color";
import React, { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Badge = () => {
  const [data, setData] = useState();
  const [idx, setIdx] = useState(0);

  const getBadge = async () => {
    const response = await fetch(
      `${process.env.BASE_URL}/studentLms/badge-achieved`
    );
    const jsonData = await response.json();
    setData(jsonData.data.BadgeList);
  };

  useEffect(() => {
    getBadge();
  }, []);

  return (
    <div
      className="w-full h-full p-6 flex justify-between items-center border-2 rounded-md"
      style={{ backgroundColor: "white", borderColor: color.hover_D9C3F1 }}
    >
      <div>
        <AiFillCaretLeft
          className="h-8 w-8 cursor-pointer"
          onClick={() => {
            if (idx !== 0) {
              setIdx(idx - 1);
            }
          }}
        />
      </div>
      <div className="flex flex-row w-full justify-around items-center">
        <div
          className="w-16 h-16 rounded-full flex justify-center items-center font-bold"
          style={{ backgroundColor: color.hover_D9C3F1 }}
        >
          {data && data[idx].badgeCode.slice(0, 3)}
        </div>
        <div className="w-2/3">
          <p className="text-xl font-bold mb-1">
            {data && data[idx].badgeName}
          </p>
          <p className="text-sm" style={{ color: color.violet_9740F6 }}>
            {data && data[idx].badgeDescription}
          </p>
        </div>
      </div>
      <div>
        <AiFillCaretRight
          className="h-8 w-8 cursor-pointer"
          onClick={() => {
            if (idx !== data.length - 1) {
              setIdx(idx + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Badge;
