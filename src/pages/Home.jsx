import React, { useState, useEffect } from "react";

function Home() {
  const [typedText, setTypedText] = useState("");
  const textToType = "ull-Stack Web Developer";

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i < textToType.length; i++) {
        setTypedText((prevText) => prevText + textToType[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    };

    typeText();
  }, [textToType]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "57vh",
      }}
    >
      <h1 style={{ fontSize: "2.5rem" }}>Joe Foster</h1>
      <h2 style={{ fontSize: "16px" }}>F{typedText}</h2>
    </div>
  );
}

export default Home;
