"use client";

import React from "react";
import TeaserSection from "../TeaserSection";
import Hero from "../Hero";

export default function Homepage() {
  return (
    <div className="p-[3rem]">
      <Hero />
      <TeaserSection />
    </div>
  );
}
