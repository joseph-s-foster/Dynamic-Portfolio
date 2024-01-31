import React, { useState, useEffect } from "react";

function Home() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "UX-Driven";
  const texttoType2 = "Mobile-Friendly";
  const texttoType3 = "Full Stack Web Developer";

  useEffect(() => {
    const typeAndBackspace = async () => {
      const cursorFlashInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500); // Flash interval in milliseconds

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Type out
      for (let i = 0; i < textToType.length; i++) {
        setTypedText((prevText) => prevText + textToType[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Wait for a moment before backspacing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Backspace
      for (let i = textToType.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Type out
      for (let i = 0; i < texttoType2.length; i++) {
        setTypedText((prevText) => prevText + texttoType2[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Wait for a moment before backspacing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Backspace
      for (let i = texttoType2.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Type out
      for (let i = 0; i < texttoType3.length; i++) {
        setTypedText((prevText) => prevText + texttoType3[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Wait for a moment before backspacing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Backspace
      for (let i = texttoType3.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Clear the interval to stop flashing when not needed
      clearInterval(cursorFlashInterval);

      // Repeat the process
      typeAndBackspace();
    };

    typeAndBackspace();
  }, [textToType]);

  return (
    <>
    <div
      style={{
        position: "absolute",
        height: "240px",
        width: "240px",
        bottom: "180px",
        left: "41%",
      }}
    ><img src="./src/assets/background2.png"/></div>
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
          Joe Foster
        </h1>
        <h2
          style={{
            fontSize: "",
          }}
        >
          {typedText}
          <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </h2>
      </div>
      </>
  );
}

export default Home;
