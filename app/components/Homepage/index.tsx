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
import { Toaster } from "react-hot-toast";

export default function Homepage() {
  return (
    <MaxWidth>
      <div className="text-center flex flex-col w-full items-center justify-center pt-[2rem]">
        <Toaster />
        <Hero />
        <SpacerComponent />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </MaxWidth>
  );
}
