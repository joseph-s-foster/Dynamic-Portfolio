import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import useVerticalCarousel from "../hooks/useCarouselLoop";
import Nav from "../components/NavBar";
import Report from "../components/Lighthouse";
import SkillCards from "../components/SkillCards";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import python from "../assets/python.svg";
import aws from "../assets/aws.svg";
import docker from "../assets/docker.svg";
import atlassian from "../assets/atlassian.svg";
import Footer from "../components/Footer";
import "../SkillCards.css";

function Skills() {
  const { text, offset, animate } = useVerticalCarousel(
    "Collaborative",
    "Adaptive",
    "Resourceful",
    "Extinsible",
    "Analytical",
    "Systemic",
  );

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("skills");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    {
      src: javascript,
      alt: "JavaScript",
      title: "JavaScript",
      description:
        "Powering dynamic interactivity on client and server sides with frameworks like React and Node.js.",
    },
    {
      src: react,
      alt: "React",
      title: "React",
      description:
        "Simplifiying responsive user interfaces through modular UI pieces that manage their own state and render via virtual DOM.",
    },
    {
      src: python,
      alt: "Python",
      title: "Python",
      description:
        "Data processing and automation, supporting object-oriented principles with readable syntax.",
    },
    {
      src: aws,
      alt: "Amazon Web Service",
      title: "Amazon Web Service",
      description:
        "Cloud ecosystem offering scalable deployments, serverless architecture, object storage, relational databases, and more.",
    },
    {
      src: docker,
      alt: "Docker",
      title: "Docker",
      description:
        "Containerization platform used to package applications, enabling consistent development, testing, and deployment.",
    },
    {
      src: atlassian,
      alt: "Atlassian",
      title: "Atlassian",
      description:
        "Suite of tools that streamline version control, documentation, and cross-team collaboration in development environments.",
    },
  ];

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="background">
        <div className="splash-wrapper">
          <h1 className="greeting">Skills</h1>
          <div className="hero">
            <h2 className="carousel">
              <span className="carousel-window">
                <span
                  className="carousel-item"
                  style={{
                    transform: `translateY(${offset}%)`,
                    transition: animate ? "transform 400ms ease" : "none",
                  }}
                >
                  {text}
                </span>
              </span>
            </h2>
            <a
              className="anchor"
              href="#api"
              onClick={handleScroll}
              aria-label="Scroll to main content"
            >
              <ArrowDownCircleIcon className="down-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div id="skills" />
      {/* <Report /> */}
      <div className="summary">
        <h3>Core technologies</h3>
        <p>
          Versatility with servers, presentation layers, and cloud environments
          — from scripting and application design to containerized deployments
          and agile team workflows.
        </p>
        {/* <a href="/" className="explore">
          Homepage <ChevronRightIcon className="chevron-right" />
        </a> */}
      </div>
      <div className="skills">
        {skills.map((item) => (
          <SkillCards
            key={item.alt}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Skills;
