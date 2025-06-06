import { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../hooks/LoadingSpinner";
import Nav from "../components/NavBar";
import background from "../assets/project/background.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

function Home() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const tag1 = "UX-Driven";
  const tag2 = "Mobile-Friendly";
  const tag3 = "Full-Stack Cloud Developer";

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isLoading]);

  useLayoutEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedHomePageBefore");

    if (!hasVisitedBefore) {
      localStorage.setItem("hasVisitedHomePageBefore", "true");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const typeAndBackspace = async () => {
      const cursorFlashInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < tag1.length; i++) {
        setTypedText((prevText) => prevText + tag1[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = tag1.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < tag2.length; i++) {
        setTypedText((prevText) => prevText + tag2[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = tag2.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < tag3.length; i++) {
        setTypedText((prevText) => prevText + tag3[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = tag3.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      clearInterval(cursorFlashInterval);

      // Repeat the process
      typeAndBackspace();
    };

    typeAndBackspace();
  }, [tag1]);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("api");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProjectsClick = () => {
    window.location.href = "/projects";
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      {isLoading && <LoadingSpinner />}
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100svh",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <div className="interact1">
            <h1 style={{ fontSize: "4rem", paddingBottom: "4px" }}>
              Joseph Foster
            </h1>
            <h2 style={{ fontSize: "2rem" }}>
              {typedText}
              <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
            </h2>
          </div>
          <a className="caret" href="#api" onClick={handleScroll}>
            <ChevronDownIcon className="w-8" aria-hidden="true" />
          </a>
        </div>
        <div
          id="api"
          style={{
            display: "flex",
            flexDirection: "column",
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

          <div className="apidesc2">
            <h3 style={{ marginBottom: "8px" }}>APIs and Algorithms</h3>
            <p className="para">
              The top 10 trending articles are fetched daily using the
              Wikimedia API and ranked by pageview count. Each article is paired
              with an icon indicating whether its rank has improved, declined,
              or held since the previous day.
            </p>
            <div>
              <span
                onClick={handleViewProjectsClick}
                style={{
                  padding: "12px",
                  fontSize: "1rem",
                  border: "solid #eeeeee 2px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                className="explore"
              >
                View more projects
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
