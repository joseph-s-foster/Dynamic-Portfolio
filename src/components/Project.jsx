import React, { useState, useEffect } from "react";
import "../Projects.css";

function Project({ project: { name, link, description, image } }) {

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
