import React, { useState } from "react";

export default function BasicWrapper({ width, height, backgroundColor }) {
  const [colorCode, setColorCode] = useState("#F6C8FB");

  const onColorChage = (backgroundColor) => {
    switch (backgroundColor) {
      case "pink":
        return "#FFFFFF";
      case "skyBlue":
        return "#000000";
      default:
        break;
    }
  };

  return (
    <div>
      <button
        style={{
          width: "120px",
          height: "30px",
          backgroundColor: onColorChage(),
          borderRadius: "5px",
        }}
      >
        {buttonName}
      </button>
    </div>
  );
}
