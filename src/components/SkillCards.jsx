import useScrollReveal from "../hooks/useScrollReveal";
import "../SkillCards.css";

function SkillCards({ src, alt, title, description }) {

  useScrollReveal();

  return (
    <div className="skill-card reveal">
      <img className="skill-icon" src={src} alt={alt} />
      <div className="skill-text">
        <p className="skill-title">{title}</p>
        <p className="skill-description">{description}</p>
      </div>
    </div>
  );
}

export default SkillCards;
