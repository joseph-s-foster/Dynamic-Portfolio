import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function useScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH") {
      // Overkill to guarantee pixel-perfect scroll reset
      requestAnimationFrame(() => {
        window.scrollTo(0, 0); // no smooth, no options object
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
  }, [pathname, navigationType]);

  return null;
}
