import {
  ArrowDownCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import useVerticalCarousel from "../hooks/useCarouselLoop";
import Nav from "../components/NavBar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

function Home() {
  const { text, offset, animate } = useVerticalCarousel(
    "Hello",
    "Bonjour",
    "こんにちは",
    "Hej",
    "Hallo",
    "سلام",
  );

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("api");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
  };

  // const handleViewProjectsClick = () => {
  //   window.location.href = "/projects";
  // };

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="background">
        <div className="splash-wrapper">
          <h1 className="greeting">Glad you’re here</h1>
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
      <div id="api">
        <div className="api-headers">
          <h3>Trending now</h3>
          <div className="api-legend">
            <p className="api-rank">#</p>
            <p className="api-title">Article</p>
            <p className="api-views">Views</p>
          </div>
        </div>
        <Trending />
        <div className="summary">
          <h3>APIs and algorithms</h3>
          <p>
            Wikimedia pageview metrics are retrieved and sorted to generate the
            daily top 10 results. Articles are then paired with an indicator if
            their rank has changed since the previous day.
          </p>
          <a href="/projects" className="explore">
            View more projects <ChevronRightIcon className="chevron-right" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
