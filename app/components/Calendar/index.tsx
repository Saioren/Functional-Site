"use client";

import React from "react";
import { Calendar } from "react-calendar";
import CalendarActivities from "./CalendarActivities";
import styled from "styled-components";

export default function CalendarComponent() {
  return (
    <div className="flex justify-between w-100% align-center pt-[8rem]">
      <section className="bg-white shadow-md p-[3rem] rounded-sm">
        <h2 className="font-semibold text-2xl">Calendar!</h2>
        <h3>Coming soon...</h3>
      </section>
      {/*<CalendarActivities />
      <Calendar className="flex" />*/}
    </div>
  );
}
