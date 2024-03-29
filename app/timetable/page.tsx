import React from "react";
import Timetable from "../components/Timetable";
import { Toaster } from "react-hot-toast";

export default function TimetablePage() {
  return (
    <div className="pt-[2rem] sm:pt-[1rem]">
      <Timetable />
      <Toaster />
    </div>
  );
}
