import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      delay: 125,
      distance: "24px",
      duration: 750,
      easing: "ease-in-out",
      origin: "left",
      interval: 375,
      opacity: 0,
      viewFactor: .125,
      mobile: true,
      reset: false,
    });
  }, []);
};

export default useScrollReveal;
