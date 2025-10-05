import useScrollReveal from "../hooks/useScrollReveal";
import "../SkillCards.css";

function SkillCards({ src, alt, title, description }) {

  useScrollReveal();

  return (
    <div className="skill-card reveal">
      <img className="skill-icon" src={src} alt={alt} />
      <div className="skill-text">
        <h3 className="skill-title">{title}</h3>
        <p className="skill-description">{description}</p>
      </div>
    </div>
  );
}

export default SkillCards;
