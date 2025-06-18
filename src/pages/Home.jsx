import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useInitialPageLoad from "../hooks/useInitialPageLoad";
import Loader from "../hooks/Loader";
import useTypewriterLoop from "../hooks/useTypewriterLoop";
import Nav from "../components/NavBar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

function Home() {
  const isLoading = useInitialPageLoad("home");
  const tag1 = "UX-Driven";
  const tag2 = "Mobile-Friendly";
  const tag3 = "Full-Stack Developer";
  const { typedText, showCursor } = useTypewriterLoop(tag1, tag2, tag3);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("api");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewProjectsClick = () => {
    window.location.href = "/projects";
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      {isLoading && <Loader />}
      <div className="background">
        <div className="hero">
          <h1>Joseph Foster</h1>
          <h2>
            {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
        </div>
        <a className="chevron-down" href="#api" onClick={handleScroll}>
          <ChevronDownIcon className="w-8" aria-hidden="true" />
        </a>
      </div>
      <div
        id="api"
        style={{
          zIndex: isLoading ? -1 : 1,
        }}
      >
        <div className="api">
          <div className="apiresults">
            <div className="apitrend">
              <h3>Trending Now</h3>
            </div>
          </div>
        </div>

        <Trending />

        <div className="summary">
          <h3>APIs and Algorithms</h3>
          <p>
            The top 10 trending articles are fetched daily using the Wikimedia
            API and ranked by pageview count. Each article's link is paired with
            an icon indicating whether its rank has improved, declined, or held
            since the previous day.
          </p>
          <a onClick={handleViewProjectsClick} className="explore">
            View more projects <ChevronRightIcon className="chevron-right" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
