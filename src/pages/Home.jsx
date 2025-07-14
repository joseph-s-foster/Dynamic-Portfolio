import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useTypewriterLoop from "../hooks/useTypewriterLoop";
import Nav from "../components/NavBar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

function Home() {
  const tag1 = "ux-driven";
  const tag2 = "mobile-friendly";
  const tag3 = "full-stack developer";
  const { typedText, showCursor } = useTypewriterLoop(tag1, tag2, tag3);

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
        <div className="hero">
          <h1>[jsfoster@dev ~]</h1>
          <h2>
            $ {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
        </div>
        <a
          className="anchor"
          href="#api"
          onClick={handleScroll}
          aria-label="Scroll to main content"
        >
          <ChevronDownIcon className="w-8 chevron-down" aria-hidden="true" />
        </a>
      </div>
      <div id="api">
        <div className="api-headers">
          <h3>Trending Now</h3>
          <div className="api-legend">
            <p className="api-rank">#</p>
            <p className="api-title">Article</p>
            <p className="api-views">Views</p>
          </div>
        </div>
        <Trending />
        <div className="summary">
          <h3>APIs and Algorithms</h3>
          <p>
            Wikimedia pageview metrics are retrieved and sorted to generate the
            top 10 results by view count. Articles are then paired with an indicator
            if their rank has changed since the previous day.
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
