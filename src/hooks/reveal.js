import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const applyScrollReveal = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
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

    // Apply on initial render
    applyScrollReveal();

    // Apply on resize
    window.addEventListener("resize", applyScrollReveal);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", applyScrollReveal);
    };
  }, []);
};

export default useScrollReveal;
