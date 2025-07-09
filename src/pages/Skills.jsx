import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useTypewriterLoop from "../hooks/useTypewriterLoop";
import Nav from "../components/NavBar";
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
  const tag1 = "collaborative";
  const tag2 = "agile";
  const tag3 = "adaptive";
  const { typedText, showCursor } = useTypewriterLoop(tag1, tag2, tag3);

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

  const handleViewHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="background">
        <div className="hero">
          <h1>
            [jsfoster@dev skills]$ {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h1>
        </div>
        <a className="anchor" href="#api" onClick={handleScroll}>
          <ChevronDownIcon className="w-8 chevron-down" aria-hidden="true" />
        </a>
      </div>
      <div id="skills" />
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
      <div className="summary">
        <h3>Core Technologies</h3>
        <p>
          Versatility across front-end, back-end, and cloud environments — from
          scripting and application design to containerized deployments and
          agile team workflows.
        </p>
        <a onClick={handleViewHomeClick} className="explore">
          Homepage <ChevronRightIcon className="chevron-right" />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
