import { useState, useEffect } from "react";

const useImagesLoaded = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true; // track if component is still mounted
    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });

    const handleImageLoad = () => {
      if (images.every((img) => img.complete && img.naturalHeight !== 0)) {
        if (isMounted) setLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        handleImageLoad();
      } else {
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad; // consider image load failure as well
      }
    });

    return () => {
      isMounted = false; // cleanup on component unmount
    };
  }, [imageUrls]);

  return loaded;
};

export default useImagesLoaded;
