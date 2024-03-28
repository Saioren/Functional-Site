"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "./ThemeContext";

type TimetableContextProviderProps = {
  children: React.ReactNode;
};

type TimetableContextProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  timers: TimerType[];
  setTimers: React.Dispatch<React.SetStateAction<TimerType[]>>;
  weeklyHours: number;
  setWeeklyHours: React.Dispatch<React.SetStateAction<number>>;
  started: boolean;
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  hours: number;
  setHours: React.Dispatch<React.SetStateAction<number>>;
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  miniStopwatch: boolean;
  setMiniStopwatch: React.Dispatch<React.SetStateAction<boolean>>;
  handleStart: () => void;
  handlePause: () => void;
  handleStop: () => void;
  handleSaveTimer: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const defaultTimerContext: TimetableContextProps = {
  loading: false,
  setLoading: () => {},
  timers: [],
  setTimers: () => {},
  weeklyHours: 0,
  setWeeklyHours: () => {},
  started: false,
  setStarted: () => {},
  pause: true,
  setPause: () => {},
  hours: 0,
  setHours: () => {},
  minutes: 0,
  setMinutes: () => {},
  seconds: 0,
  setSeconds: () => {},
  miniStopwatch: false,
  setMiniStopwatch: () => {},
  handleStart: () => {},
  handlePause: () => {},
  handleStop: () => {},
  handleSaveTimer: () => {},
};
export const TimetableContext = createContext<TimetableContextProps | null>(
  defaultTimerContext
);

export type TimerType = {
  _id: string;
  hours: number;
  minutes: number;
  seconds: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function TimetableProvider({
  children,
}: TimetableContextProviderProps) {
  const [weeklyHours, setWeeklyHours] = useState(0);
  const [started, setStarted] = useState(false);
  const [pause, setPause] = useState(true);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miniStopwatch, setMiniStopwatch] = useState(false);
  const [timers, setTimers] = useState<TimerType[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    const fetchTimer = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/timers", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch timers");
        }
        const data = await res.json();
        setTimers(data.timers);
        setLoading(false);
      } catch (error) {
        console.log("Error loading timers: ", error);
        setLoading(false);
      }
    };

    fetchTimer();
  }, []);

  useEffect(() => {
    let intervalId: any;
    if (!pause) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          let newSeconds = prevSeconds + 1;
          if (newSeconds >= 60) {
            setMinutes((prevMinutes) => {
              let newMinutes = prevMinutes + 1;
              if (newMinutes >= 60) {
                setHours((prevHours) => prevHours + 1);
                newMinutes = 0;
              }
              return newMinutes;
            });
            newSeconds = 0;
          }
          return newSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [pause, started]);

  function handleStart() {
    setPause(false);
    setStarted(true);
    setMiniStopwatch(true);
  }

  function handlePause() {
    setPause(true);
  }

  function handleStop() {
    setPause(true);
    setStarted(false);
    setMinutes(0);
    setSeconds(0);
    setHours(0);
    setMiniStopwatch(false);
  }

  const handleSaveTimer = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!seconds && !minutes && !hours) {
      toast.error("Start the timers to clock out!");
    }
    try {
      toast.loading("Clocking out...");
      const res = await fetch("http://localhost:3000/api/timers", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ hours, minutes, seconds }),
      });
      if (res.ok) {
        toast.dismiss();
        router.refresh();
        toast.success("Nice work!");
      } else {
        throw new Error("Failed to save time!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        handleStop();
        toast.dismiss();
      }, 4000);
    }
  };

  const contextValue: TimetableContextProps = {
    loading,
    setLoading,
    timers,
    setTimers,
    weeklyHours,
    setWeeklyHours,
    started,
    setStarted,
    pause,
    setPause,
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    handleStart,
    handlePause,
    handleStop,
    miniStopwatch,
    setMiniStopwatch,
    handleSaveTimer,
  };

  return (
    <TimetableContext.Provider value={contextValue}>
      {children}
    </TimetableContext.Provider>
  );
}

export function useTimetableContextProvider() {
  const context = useContext(TimetableContext);

  if (context === null) {
    throw new Error(
      "useTimetableContextProvider must be used within a TimetableProvider"
    );
  }
  return context;
}
