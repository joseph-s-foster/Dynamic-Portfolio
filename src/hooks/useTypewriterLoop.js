import { useState, useEffect } from "react";

export default function useTypewriterLoop(tag1, tag2, tag3) {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeAndBackspace = async () => {
      const cursorFlashInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      await wait(1000);

      for (let i = 0; i < tag1.length; i++) {
        setTypedText((prevText) => prevText + tag1[i]);
        await wait(100);
      }

      await wait(1000);

      for (let i = tag1.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await wait(100);
      }

      await wait(1000);

      for (let i = 0; i < tag2.length; i++) {
        setTypedText((prevText) => prevText + tag2[i]);
        await wait(100);
      }

      await wait(1000);

      for (let i = tag2.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await wait(100);
      }

      await wait(1000);

      for (let i = 0; i < tag3.length; i++) {
        setTypedText((prevText) => prevText + tag3[i]);
        await wait(100);
      }

      await wait(1000);

      for (let i = tag3.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await wait(100);
      }

      clearInterval(cursorFlashInterval);
      typeAndBackspace(); // loop
    };

    typeAndBackspace();
  }, [tag1, tag2, tag3]);

  return { typedText, showCursor };
}
