import React, { useState, useEffect } from "react";
import "../Projects.css";

function Project({ project: { name, link, description, image } }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = () => {
      const img = new Image();
      img.src = `../assets/projects/${image}.png`;
      img.onload = () => setIsLoading(false);
      img.onerror = () => setIsLoading(false);
    };

    preloadImage();
  }, [image]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="project-content">
        <div className="project-info">
          <h1>{name}</h1>
          <div className="project-description">{description}</div>
        </div>
      </div>
    </a>
  );
}

export default Project;
