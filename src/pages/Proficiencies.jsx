import React, { useState, useEffect } from "react";
import background from "../assets/project/background.png";

function Proficiences() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "40%",
          left: "12%",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
          }}
        >
          Coming Soon
        </h1>
        <h2 style={{ fontSize: "1.5rem" }}>&nbsp;</h2>
      </div>
    </div>
  );
}

export default Proficiences;
