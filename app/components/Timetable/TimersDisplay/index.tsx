import {
  TimerType,
  useTimetableContextProvider,
} from "@/context/TimetableProvider";
import React from "react";

type TimersDisplayProps = {
  timer: TimerType[];
  index: number;
};

export default function TimersDisplay({ timer, index }: TimersDisplayProps) {
  return <div>{timer.minutes}</div>;
}
