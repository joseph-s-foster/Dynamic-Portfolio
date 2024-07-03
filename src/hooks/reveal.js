import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      delay: 375,
      distance: "32px",
      duration: 750,
      easing: "ease-in-out",
      origin: "left",
      interval: 375,
      reset: false,
    });
  }, []);
};

export default useScrollReveal;
