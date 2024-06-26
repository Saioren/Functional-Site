"use client";

import React, { useEffect } from "react";
import { NextSeo } from "next-seo";
import { useTimetableContextProvider } from "@/context/TimetableProvider";

export default function HandleTitle() {
  const { pause, seconds, minutes, hours } = useTimetableContextProvider();

  useEffect(() => {
    const formatTime = (value: any) => {
      return value < 10 ? "0" + value : value.toString();
    };

    let formattedTime = "";

    if (hours !== 0) {
      formattedTime += formatTime(hours) + ":";
    }

    if (minutes !== 0 || hours !== 0) {
      formattedTime += formatTime(minutes) + ":";
    }

    const endingParticle = minutes > 0 && hours === 0 ? " min •" : " sec •";

    const formatEndingParticle = hours === 0 ? endingParticle : " hours •";

    formattedTime += formatTime(seconds) + formatEndingParticle;

    document.title = !pause ? formattedTime + " Saioren.io" : "Saioren.io";
  }, [pause, seconds, minutes, hours]);

  return (
    <NextSeo
      title="Saioren.io"
      description="Saioren's site to track work stuff!"
    />
  );
}
