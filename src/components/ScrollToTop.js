import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // 'POP', 'PUSH', or 'REPLACE'

  useEffect(() => {
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, left: 0 });
    }
    // Skips scroll reset on BACK/FORWARD (which are 'POP')
  }, [pathname, navigationType]);

  return null;
}
