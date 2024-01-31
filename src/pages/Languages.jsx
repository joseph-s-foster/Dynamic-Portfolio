import React, { useState, useEffect } from "react";

function Languages() {

  return (
    <>
    <div
      style={{
        backgroundImage: "url('./src/assets/background3.png')",
        backgroundSize: "240px",
        position: "absolute",
        height: "240px",
        width: "240px",
        bottom: "175px",
        left: "41%",
      }}
    ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          position: "absolute",
          left: "24px",
          top: "45%",
          height: "57vh",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
          }}
        >
          Coming Soon
        </h1>
      </div>
      </>
  );
}

export default Languages;
