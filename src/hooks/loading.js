import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to check if all images have been loaded.
 *
 * @param {string[]} imageUrls - Array of image URLs to be loaded.
 * @returns {boolean} - True if all images are loaded, otherwise false.
 */
const loading = (imageUrls) => {
  const [loaded, setLoaded] = useState(false); // State to track if all images are loaded
  const isMounted = useRef(true); // Ref to track if the component is still mounted

  useEffect(() => {
    isMounted.current = true; // Set the ref to true when the component mounts

    // Create Image objects for each URL and start loading
    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });

    /**
     * Function to check if all images are loaded.
     * Sets the loaded state to true if all images are fully loaded.
     */
    const handleImageLoad = () => {
      // Check if all images are complete and have natural height
      if (images.every((img) => img.complete && img.naturalHeight !== 0)) {
        if (isMounted.current) setLoaded(true); // Update the state only if the component is still mounted
      }
    };

    // Attach load and error event listeners to each image
    images.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        handleImageLoad(); // Handle the case where the image is already loaded
      } else {
        img.onload = handleImageLoad; // Set the load event listener
        img.onerror = handleImageLoad; // Set the error event listener
      }
    });

    // Cleanup function to run when the component unmounts
    return () => {
      isMounted.current = false; // Set the ref to false when the component unmounts
      // Remove event listeners to prevent memory leaks
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]); // Re-run the effect if the imageUrls array changes

  return loaded; // Return the loaded state
};

export default loading;
