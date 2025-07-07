import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useTypewriterLoop from "../hooks/useTypewriterLoop";
import usePreloadImages from "../hooks/usePreloadImages";
import Nav from "../components/NavBar";
import ProjectCards from "../components/ProjectCards";
import snake from "../assets/snake.webp";
import wyr from "../assets/wyr.webp";
import pulse from "../assets/pulse.webp";
import Footer from "../components/Footer";
import "../ProjectCards.css";

function Projects() {
  const tag1 = "Scalable";
  const tag2 = "Modular";
  const tag3 = "Interactive";
  const { typedText, showCursor } = useTypewriterLoop(tag1, tag2, tag3);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("projects");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
  };

  usePreloadImages([snake, wyr, pulse]);

  const projects = [
    {
      link: "https://joseph-s-foster.github.io/Classic-Snake/",
      src: snake,
      alt: "Snake",
      title: "Snake",
      description: "Gaming nostaliga with no-lift d-pad",
      language: ".js",
    },
    {
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      src: wyr,
      alt: "WYR",
      title: "WYR",
      description: "MERN polling - fuel the feud",
      language: ".jsx",
    },
    {
      link: "https://python-pulse-a33bae0b4181.herokuapp.com/",
      src: pulse,
      alt: "Pulse",
      title: "Pulse",
      description: "Post and comment in this CRUD newsfeed",
      language: ".py",
    },
  ];

  const handleViewSkillsClick = () => {
    window.location.href = "/skills";
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="background">
        <div className="hero">
          <h1>Projects</h1>
          <h2>
            {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
        </div>
        <a className="anchor" href="#projects" onClick={handleScroll}>
          <ChevronDownIcon className="w-8 chevron-down" aria-hidden="true" />
        </a>
      </div>
      <div id="projects" />
      <div className="projects">
        {projects.map((item) => (
          <ProjectCards
            key={item.alt}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
            language={item.language}
            link={item.link}
          />
        ))}
      </div>
      <div className="summary">
        <h3>Dynamic Interactions</h3>
        <p>
          Custom React hooks are abstracted into reusable functions that enable
          seamless animations and streamline event handling, delivering an
          intuitive interface across devices.
        </p>
        <a onClick={handleViewSkillsClick} className="explore">
          Explore skills <ChevronRightIcon className="chevron-right" />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
