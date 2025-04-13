import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const applyScrollReveal = () => {
      if (window.matchMedia("(max-width: 480px)").matches) {
        ScrollReveal().reveal(".reveal", {
          delay: 125,
          distance: "48px",
          duration: 750,
          easing: "ease-in-out",
          origin: "left",
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
