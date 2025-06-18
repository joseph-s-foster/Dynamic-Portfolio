import { useEffect, useLayoutEffect, useState } from "react";

export default function useInitialPageLoad(firstVisitDelay = 2000, revisitDelay = 1000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isLoading]);

  useLayoutEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedHomePageBefore");

    const delay = hasVisitedBefore ? revisitDelay : firstVisitDelay;

    if (!hasVisitedBefore) {
      localStorage.setItem("hasVisitedHomePageBefore", "true");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [firstVisitDelay, revisitDelay]);

  return isLoading;
}
