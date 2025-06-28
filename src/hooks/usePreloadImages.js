import { useEffect } from "react";
/**
 * Preloads a list of image URLs by creating new Image objects.
 * Images will be cached by the browser, improving perceived performance.
 *
 * @param {string[]} imageSources - Array of image paths (e.g., /assets/img.webp)
 */
export default function usePreloadImages(imageSources = []) {
  useEffect(() => {
    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [imageSources]);
}
