import { useEffect, useRef, useState } from "react";

export default function useVerticalCarousel(tag1, tag2, tag3) {
  const tags = [tag1, tag2, tag3];

  const [text, setText] = useState(tag1);
  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(false);

  const paused = useRef(document.hidden);

  useEffect(() => {
    const onVisibilityChange = () => {
      paused.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    let mounted = true;
    const wait = (ms) =>
      new Promise((resolve) => {
        const start = Date.now();

        const tick = () => {
          if (paused.current) {
            // stop progressing time while paused
            setTimeout(tick, 200);
            return;
          }

          if (Date.now() - start >= ms) {
            resolve();
          } else {
            setTimeout(tick, 50);
          }
        };

        tick();
      });

    const loop = async () => {
      let i = 0;

      while (mounted) {
        while (paused.current && mounted) {
          await wait(200);
        }

        await wait(2000);

        setAnimate(true);
        setOffset(-100);
        await wait(400)

        setAnimate(false);
        setOffset(100);
        setText(tags[(i + 1) % tags.length]);
        await wait(1);
       

        setAnimate(true);
        setOffset(0);
        await wait(400);

        i = (i + 1) % tags.length;
      }
    };

    loop();
    return () => {
      mounted = false;
    };
  }, [tag1, tag2, tag3]);

  return { text, offset, animate };
}
