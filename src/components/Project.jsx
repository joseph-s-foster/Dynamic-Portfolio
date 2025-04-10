import React, { useState, useEffect } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import "../Projects.css";

function Project({ project: { name, link, description, language, image } }) {

  return (
    
      <div className="project-content">
        <div className="project-info">
          <h1>{name}</h1>
          <div className="project-description">{description}</div>
          <div className="project-language">{language}</div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ArrowRightCircleIcon className="project-link"/></a>
        </div>
      </div>
    
  )
}

export default Project;
