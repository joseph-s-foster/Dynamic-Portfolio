import React, { useState, useEffect } from "react";

function Home() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "edX Full-Stack";
  const texttoType2 = "UX-driven";
  // const texttoType3 = "AWS";

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

      // await new Promise((resolve) => setTimeout(resolve, 1000));

      // // Type out
      // for (let i = 0; i < texttoType3.length; i++) {
      //   setTypedText((prevText) => prevText + texttoType3[i]);
      //   await new Promise((resolve) => setTimeout(resolve, 100));
      // }

      // // Wait for a moment before backspacing
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      // // Backspace
      // for (let i = texttoType3.length; i >= 0; i--) {
      //   setTypedText((prevText) => prevText.slice(0, -1));
      //   await new Promise((resolve) => setTimeout(resolve, 100));
      // }

      // Clear the interval to stop flashing when not needed
      clearInterval(cursorFlashInterval);

      // Repeat the process
      typeAndBackspace();
    };

    typeAndBackspace();
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
      <h2 style={{ fontSize: "16px", position: "relative" }}>
        &nbsp;{typedText}
        <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        &nbsp;
      </h2>
    </div>
  );
}

export default Home;
