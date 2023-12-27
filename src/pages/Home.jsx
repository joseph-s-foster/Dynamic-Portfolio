import React, { useState, useEffect } from "react";

function Home() {
  const [typedText, setTypedText] = useState("");
  const textToType = "Creating mobile-first experiences";

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
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>Joe Foster</h1>
      <h2 style={{ fontSize: "1.1rem" }}>{typedText}</h2>
    </div>
  );
}

export default Home;
