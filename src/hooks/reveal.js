import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const applyScrollReveal = () => {
      if (window.matchMedia("(max-width: 724px)").matches) {
        ScrollReveal().reveal(".reveal", {
          delay: 125,
          distance: "24px",
          duration: 750,
          easing: "ease-in-out",
          origin: "bottom",
          interval: 375,
          opacity: 0,
          viewFactor: 0.125,
          mobile: true,
          reset: false,
        });
      }
    };

    applyScrollReveal();
  }, []);
};

export default useScrollReveal;
