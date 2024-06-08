import React, { useState, useEffect } from "react";
import "../Projects.css";
import LoadingSpinner from "../hooks/LoadingSpinner";

function Project({ project: { name, link, description, image } }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [image]);

  if (isLoading) {
    return <LoadingSpinner />;
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
