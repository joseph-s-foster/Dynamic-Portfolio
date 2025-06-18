import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useInitialPageLoad from "../hooks/useInitialPageLoad";
import Loader from "../hooks/Loader";
import useTypewriterLoop from "../hooks/useTypewriterLoop";
import Nav from "../components/NavBar";
import SkillCards from "../components/SkillCards";
import javascript from "../assets/project/javascript.svg";
import mysql from "../assets/project/mysql.svg";
import aws from "../assets/project/aws.svg";
import atlassian from "../assets/project/atlassian.svg";
import python from "../assets/project/python.svg";
import docker from "../assets/project/docker.svg";
import Footer from "../components/Footer";
import "../SkillCards.css";

function Proficiencies() {
  const isLoading = useInitialPageLoad();
  const tag1 = "Collaborative";
  const tag2 = "Agile";
  const tag3 = "Adaptive";
  const { typedText, showCursor } = useTypewriterLoop(tag1, tag2, tag3);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("proficiencies");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
  };

  const proficiencies = [
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
      description: "Scripting, data processing, and automation with clarity.",
    },
    {
      link: "https://www.mysql.com/",
      src: mysql,
      alt: "MySQL",
      title: "MySQL",
      description: "Relational database with structured queries and joins.",
    },
    {
      link: "https://aws.amazon.com/",
      src: aws,
      alt: "AWS",
      title: "AWS",
      description:
        "Cloud platform offering scalable compute, storage, and services.",
    },
    {
      link: "https://www.docker.com/",
      src: docker,
      alt: "Docker",
      title: "Docker",
      description:
        "Platform for building, shipping, and running containers at scale.",
    },
    {
      link: "https://www.atlassian.com/",
      src: atlassian,
      alt: "Atlassian",
      title: "Atlassian",
      description:
        "Collaboration tools for code, projects, and team productivity.",
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
      {isLoading && <Loader />}
      <div className="background">
        <div className="hero">
          <h1>Proficiencies</h1>
          <h2>
            {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
        </div>
        <a className="chevron-down" href="#api" onClick={handleScroll}>
          <ChevronDownIcon className="w-8" aria-hidden="true" />
        </a>
      </div>
      <div id="proficiencies" />
      <div className="skills">
        {proficiencies.map((item) => (
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

export default Proficiencies;
