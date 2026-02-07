import {
  ArrowDownCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import useVerticalCarousel from "../hooks/useCarouselLoop";
import usePreloadImages from "../hooks/usePreloadImages";
import Nav from "../components/NavBar";
import ProjectCards from "../components/ProjectCards";
import snake from "../assets/snake.webp";
import wyr from "../assets/wyr.webp";
import pulse from "../assets/pulse.webp";
import Footer from "../components/Footer";
import "../ProjectCards.css";

function Projects() {
  const { text, offset, animate } = useVerticalCarousel(
    "scalable",
    "modular",
    "interactive",
  );

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
      description:
        "Gaming nostaliga at your fingertips with no-lift d-pad on mobile devices and arrow key navigation for keyboards.",
      language: ".js",
    },
    {
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      src: wyr,
      alt: "WYR",
      title: "WYR",
      description:
        "MERN stack polling for age-old rivalries like Apple vs Android, Nike vs Adidas, and more.",
      language: ".jsx",
    },
    {
      link: "https://python-pulse-a33bae0b4181.herokuapp.com/",
      src: pulse,
      alt: "Pulse",
      title: "Pulse",
      description:
        "CRUD ops newsfeed giving users the ability to post, comment, and upvote trending online articles.",
      language: ".py",
    },
  ];

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="background">
        <div className="splash-wrapper">
          <h1 className="greeting">Projects</h1>
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
        <h3>Dynamic interactions</h3>
        <p>
          Custom React hooks are abstracted into reusable functions that enable
          seamless animations and streamline event handling, delivering an
          intuitive interface across devices.
        </p>
        <a href="skills" className="explore">
          Explore skills <ChevronRightIcon className="chevron-right" />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
