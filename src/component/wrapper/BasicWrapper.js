import React, { useState } from "react";

export default function BasicWrapper({ width, height, backgroundColor }) {
  const [colorCode, setColorCode] = useState("#F6C8FB");

  const onColorChage = (backgroundColor) => {
    switch (backgroundColor) {
      case "pink":
        return setColorCode("#F6C8FB");
      case "babyPink":
        return setColorCode("#E784F2");
      case "blueSky":
        return setColorCode("718DF2");
      case "jade":
        return setColorCode("#84FCED");
      case "violet":
        return setColorCode("#9740F6");
      default:
        return etColorCode("#F6C8FB");
    }
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: onColorChage(backgroundColor),
        borderRadius: "5px",
      }}
    ></div>
  );
}
