import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import loading from "./hooks/loading";
import background from "./assets/project/background.png";
import wyr from "./assets/project/wyr.png";
import blog from "./assets/project/blog.png";
import pulse from "./assets/project/pulse.png";
import coffee from "./assets/project/coffee.png";
import html from "./assets/project/html.svg";
import css from "./assets/project/css.svg";
import javascript from "./assets/project/javascript.svg";
import jquery from "./assets/project/jquery.svg";
import node from "./assets/project/node.svg";
import express from "./assets/project/express.svg";
import mysql from "./assets/project/mysql.svg";
import handlebars from "./assets/project/handlebars.svg";
import mongodb from "./assets/project/mongodb.svg";
import react from "./assets/project/react.svg";
import graphql from "./assets/project/graphql.svg";
import python from "./assets/project/python.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  const [fadeIn, setFadeIn] = useState(false); // State to control the fade-in effect
  const location = useLocation(); // React Router hook to get the current location
  const imageUrls = [
    background,
    wyr,
    blog,
    pulse,
    coffee,
    html,
    css,
    javascript,
    jquery,
    node,
    express,
    mysql,
    handlebars,
    mongodb,
    react,
    graphql,
    python,
  ]; // Array of image URLs to be loaded
  const imagesLoaded = loading(imageUrls); // Use custom hook to check if images are loaded

  useEffect(() => {
    console.log("Images loaded:", imagesLoaded); // Debugging log to check image load state

    // Get the list of visited pages from local storage or initialize an empty object
    const visitedPages = JSON.parse(localStorage.getItem("visitedPages")) || {};
    const currentPage = location.pathname; // Get the current page path

    // Mark the current page as visited
    if (!visitedPages[currentPage]) {
      visitedPages[currentPage] = true;
      localStorage.setItem("visitedPages", JSON.stringify(visitedPages)); // Save the updated visited pages to local storage
    }

    // Set the fade-in effect when images are loaded
    if (imagesLoaded) {
      setFadeIn(true);
    }
  }, [location, imagesLoaded]); // Re-run the effect if the location or imagesLoaded state changes

  return (
    <div className={`main-container ${fadeIn ? "fade-in" : ""}`}>
      {imagesLoaded ? ( // Conditionally render the main content or the loading message
        <>
          <Nav /> {/* Navigation bar component */}
          <Outlet /> {/* Outlet for nested routes */}
          <Footer /> {/* Footer component */}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
