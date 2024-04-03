"use client";

import React from "react";
import { Calendar } from "react-calendar";
import CalendarActivities from "./CalendarActivities";
import styled from "styled-components";

export default function CalendarComponent() {
  return (
    <div className="flex justify-between">
      <CalendarActivities />
      <Calendar className="flex" />
    </div>
  );
}
