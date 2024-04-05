"use client";

import React from "react";
import TeaserSection from "../TeaserSection";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import MaxWidth from "../MaxWidth";
import SpacerComponent from "./Spacer";
import Footer from "../Footer";

export default function Homepage() {
  return (
    <MaxWidth width={50}>
      <div className="text-center flex flex-col items-center pt-[2rem]">
        <Hero />
        <SpacerComponent />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </MaxWidth>
  );
}
