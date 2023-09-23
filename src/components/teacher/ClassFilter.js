import React from "react";
// Style
import color from "@/tailwind-theme/color";

export default function ClassFilter() {
  return (
    <div className="w-full p-4">
      <select
        className="w-full p-2 border rounded-md"
        style={{ borderColor: color.violet_9740F6 }}
      >
        <option value={"value_here"}>A반</option>
        <option value={"value_here"}>B반</option>
      </select>
    </div>
  );
}
