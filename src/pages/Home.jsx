import React from "react";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>Joe Foster</h1>
      <h2 style={{ fontSize: "1.33rem" }}>Full-Stack Developer</h2>
    </div>
  );
}

export default Home;
