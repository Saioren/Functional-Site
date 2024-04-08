import React from "react";
import Timetable from "../components/Timetable";
import { Toaster } from "react-hot-toast";

export default function TimetablePage() {
  return (
    <div className="flex w-full h-100vh">
      <Timetable />
      <Toaster />
    </div>
  );
}
