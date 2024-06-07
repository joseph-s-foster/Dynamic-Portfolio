import { useState, useEffect, useRef } from "react";

const loading = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    console.log("Loading hook mounted");
    isMounted.current = true;

    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });

    const handleImageLoad = () => {
      if (images.every((img) => img.complete && img.naturalHeight !== 0)) {
        if (isMounted.current) setLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        handleImageLoad();
      } else {
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad;
      }
    });

    return () => {
      console.log("Loading hook unmounted");
      isMounted.current = false;
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []); // Empty dependency array

  return loaded;
};

export default loading;
