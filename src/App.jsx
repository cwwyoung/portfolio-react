import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";
import Contact from "./Contact";
import React from "react";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Hero />
        <br />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
