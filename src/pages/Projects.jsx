import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
// import useInitialPageLoad from "../hooks/useInitialPageLoad";
// import Loader from "../hooks/Loader";
import useTypewriterLoop from "../hooks/useTypewriterLoop";
import Nav from "../components/NavBar";
import ProjectCards from "../components/ProjectCards";
import snake from "../assets/project/snake.svg";
import brain from "../assets/project/brain.svg";
import news from "../assets/project/news.svg";
import Footer from "../components/Footer";
import "../ProjectCards.css";

function Projects() {
  // const isLoading = useInitialPageLoad("projects");
  const tag1 = "Scalable";
  const tag2 = "Modular";
  const tag3 = "Interactive";
  const { typedText, showCursor } = useTypewriterLoop(tag1, tag2, tag3);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("projects");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      link: "https://joseph-s-foster.github.io/Classic-Snake/",
      src: snake,
      alt: "Snake",
      title: "Classic Snake",
      description: "Gaming nostaliga",
      language: ".js",
    },
    {
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      src: brain,
      alt: "Brain",
      title: "WYR",
      description: "MERN stack polling",
      language: ".jsx",
    },
    {
      link: "https://python-pulse-a33bae0b4181.herokuapp.com/",
      src: news,
      alt: "Newspaper",
      title: "Python Pulse",
      description: "CRUD ops newsfeed",
      language: ".py",
    },
  ];

  const handleViewProficienciesClick = () => {
    window.location.href = "/proficiencies";
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      {/* {isLoading && <Loader />} */}
      <div className="background">
        <div className="hero">
          <h1>Projects</h1>
          <h2>
            {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
        </div>
        <a className="chevron-down" href="#projects" onClick={handleScroll}>
          <ChevronDownIcon className="w-8" aria-hidden="true" />
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
        <a onClick={handleViewProficienciesClick} className="explore">
          View proficiencies <ChevronRightIcon className="chevron-right" />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
