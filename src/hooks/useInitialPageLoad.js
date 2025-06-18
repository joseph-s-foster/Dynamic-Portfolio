import { useEffect, useLayoutEffect, useState } from "react";

export default function useInitialPageLoad(
  key = "page",
  firstVisitDelay = 1500,
  revisitDelay = 0
) {
  const [isLoading, setIsLoading] = useState(true);
  const storageKey = `hasVisited_${key}`;

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isLoading]);

  useLayoutEffect(() => {
    const hasVisitedBefore = localStorage.getItem(storageKey);
    const delay = hasVisitedBefore ? revisitDelay : firstVisitDelay;

    if (!hasVisitedBefore) {
      localStorage.setItem(storageKey, "true");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [storageKey, firstVisitDelay, revisitDelay]);

  return isLoading;
}
