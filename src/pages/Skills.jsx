import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useTypewriterLoop from "../hooks/useTypewriterLoop";
import Nav from "../components/NavBar";
import SkillCards from "../components/SkillCards";
import javascript from "../assets/javascript.svg";
import postgresql from "../assets/postgresql.svg";
import aws from "../assets/aws.svg";
import atlassian from "../assets/atlassian.svg";
import python from "../assets/python.svg";
import docker from "../assets/docker.svg";
import Footer from "../components/Footer";
import "../SkillCards.css";

function Skills() {
  const tag1 = "Collaborative";
  const tag2 = "Agile";
  const tag3 = "Adaptive";
  const { typedText, showCursor } = useTypewriterLoop(tag1, tag2, tag3);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("skills");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: javascript,
      alt: "JavaScript",
      title: "JavaScript",
      description: "Interactivity and behavior on client and server sides.",
    },
    {
      link: "https://www.python.org/",
      src: python,
      alt: "Python",
      title: "Python",
      description: "Scripting, data processing, and automation.",
    },
    {
      link: "https://aws.amazon.com/",
      src: aws,
      alt: "AWS",
      title: "AWS",
      description: "Cloud platform for scalable computing services.",
    },
    {
      link: "https://www.postgresql.org/",
      src: postgresql,
      alt: "PostgreSQL",
      title: "PostgreSQL",
      description: "Open-source database with robust SQL support.",
    },
    {
      link: "https://www.docker.com/",
      src: docker,
      alt: "Docker",
      title: "Docker",
      description: "Platform for building and running containers.",
    },
    {
      link: "https://www.atlassian.com/",
      src: atlassian,
      alt: "Atlassian",
      title: "Atlassian",
      description: "Collaboration tools for code and team productivity.",
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
          <h1>Skills</h1>
        </div>
        <div className="tags">
          <h2>
            {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
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
            link={item.link}
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
