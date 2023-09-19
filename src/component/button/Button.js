import React from "react";

export default function button({ buttonName }) {
  return (
    <div>
      <button
        style={{
          width: "120px",
          height: "30px",
          backgroundColor: "#E784F2",
          borderRadius: "5px",
        }}
      >
        {buttonName}
      </button>
    </div>
  );
}
