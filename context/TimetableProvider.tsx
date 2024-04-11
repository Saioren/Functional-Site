"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "./ThemeContext";
import Timer from "@/models/timer";
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
  weekNumber: number;
  setWeekNumber: React.Dispatch<React.SetStateAction<number>>;
  entryName: string;
  setEntryName: React.Dispatch<React.SetStateAction<string>>;
  deleteEntry: boolean;
  setDeleteEntry: React.Dispatch<React.SetStateAction<boolean>>;
  clickedEntryId: string;
  setClickedEntryId: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteEntry: (id: string) => void;
};

const defaultTimerContext: TimetableContextProps = {
  clickedEntryId: "",
  setClickedEntryId: () => {},
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
  weekNumber: 0,
  setWeekNumber: () => {},
  entryName: "",
  setEntryName: () => {},
  setDeleteEntry: () => {},
  deleteEntry: false,
  handleDeleteEntry: () => {},
};
export const TimetableContext = createContext<TimetableContextProps | null>(
  defaultTimerContext
);

export type TimerType = {
  _id: string;
  hours: number;
  minutes: number;
  seconds: number;
  weeklyHours: number;
  entryName: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function TimetableProvider({
  children,
}: TimetableContextProviderProps) {
  const [weeklyHours, setWeeklyHours] = useState(0);
  const [started, setStarted] = useState(false);
  const [pause, setPause] = useState(() => {
    if (typeof window !== "undefined") {
      const pauseData = localStorage.getItem("pauseData");
      return pauseData ? JSON.parse(pauseData).pause : true;
    } else {
      return true;
    }
  });
  const [hours, setHours] = useState(() => {
    if (typeof window !== "undefined") {
      const timerDataString = localStorage.getItem("timerData");
      return timerDataString ? JSON.parse(timerDataString).hours : 0;
    } else {
      return 0;
    }
  });
  const [minutes, setMinutes] = useState(() => {
    if (typeof window !== "undefined") {
      const timerDataString = localStorage.getItem("timerData");
      return timerDataString ? JSON.parse(timerDataString).minutes : 0;
    } else {
      return 0;
    }
  });
  const [seconds, setSeconds] = useState(() => {
    if (typeof window !== "undefined") {
      const timerDataString = localStorage.getItem("timerData");
      return timerDataString ? JSON.parse(timerDataString).seconds : 0;
    } else {
      return 0;
    }
  });
  const [miniStopwatch, setMiniStopwatch] = useState(false);
  const [timers, setTimers] = useState<TimerType[]>([]);
  const [loading, setLoading] = useState(false);
  const [weekNumber, setWeekNumber] = useState(0);
  const [entryName, setEntryName] = useState("");
  const [clickedEntryId, setClickedEntryId] = useState("");
  const [deleteEntry, setDeleteEntry] = useState(false);

  const router = useRouter();
  const theme = useTheme();

  const handleDeleteEntry = (id: string) => {
    setDeleteEntry(true);
    setClickedEntryId(id);
  };

  const handleSaveTimer = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!seconds && !minutes && !hours) {
      toast.error("Start the timer to clock out!");
      return; // Return early if timer values are all zero
    }

    try {
      handlePause();
      toast.loading("Clocking out...");
      // Save the timer data to the timers collection
      const res = await fetch(`http://${process.env.API_ENDPOINT}/api/timers`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          hours,
          minutes,
          seconds,
          weeklyHours,
          entryName,
        }),
      });

      if (res.ok) {
        // Calculate stopped time in seconds
        const stoppedTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
        setWeeklyHours(stoppedTimeInSeconds);
        setEntryName(entryName);
        // Update weekly hours
        toast.dismiss();
        toast.success("Nice work!");
      } else {
        throw new Error("Failed to save time!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      handleStop();
      router.refresh();
      setTimeout(() => {
        toast.dismiss();
      }, 4000);
    }
  };

  useEffect(() => {
    const fetchTimer = async () => {
      try {
        const res = await fetch(
          `http://${process.env.API_ENDPOINT}/api/timers`,
          {
            cache: "no-store",
          }
        );
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
    // Retrieve timer data from localStorage on component mount
    const timerDataString = localStorage.getItem("timerData");
    if (timerDataString) {
      const timerData = JSON.parse(timerDataString);
      setHours(timerData.hours);
      setMinutes(timerData.minutes);
      setSeconds(timerData.seconds);
    }
  }, []);

  useEffect(() => {
    const pauseData = localStorage.getItem("pauseData");
    if (pauseData) {
      setPause(JSON.parse(pauseData).pause);
    }
  }, []);

  useEffect(() => {
    const timerData = { hours, minutes, seconds };
    localStorage.setItem("timerData", JSON.stringify(timerData));

    const pauseData = { pause };
    localStorage.setItem("pauseData", JSON.stringify(pauseData));
  }, [hours, minutes, seconds, pause]);

  useEffect(() => {
    let intervalId: any;
    if (!pause) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds: number) => {
          let newSeconds = prevSeconds + 1;
          let newMinutes = minutes; // Store minutes value to avoid stale closure
          let newHours = hours; // Store hours value to avoid stale closure
          if (newSeconds >= 60) {
            newMinutes += 1;
            newSeconds = 0;
            if (newMinutes >= 60) {
              newHours += 1;
              newMinutes = 0;
            }
          }
          setMinutes(newMinutes);
          setHours(newHours);
          return newSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [pause, started, seconds, minutes, hours]);

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
    setEntryName("");
  }
  const updateWeeklyHours = (
    stoppedTimeInSeconds: number,
    currentWeeklyHours: number
  ) => {
    // Convert stopped time to hours
    const stoppedHours = stoppedTimeInSeconds / 3600;
    // Add stopped hours to current weekly hours
    const updatedWeeklyHours = currentWeeklyHours + stoppedHours;
    return updatedWeeklyHours;
  };

  const handleSaveWeeklyTime = async (
    objectId: string,
    updatedWeeklyHours: number
  ) => {};

  const contextValue: TimetableContextProps = {
    clickedEntryId,
    setClickedEntryId,
    deleteEntry,
    setDeleteEntry,
    entryName,
    setEntryName,
    loading,
    setLoading,
    timers,
    setTimers,
    weekNumber,
    setWeekNumber,
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
    handleDeleteEntry,
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
