import React, { useState, useEffect, useCallback, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import "../styles/App.css";

const POMODORO = 1800;
const SHORT_BREAK = 300;

const PomodoroTimer: React.FC = () => {
  const [timerType, setTimerType] = useState<"POMODORO" | "SHORTBREAK">(
    "POMODORO"
  );
  const [timeValue, setTimerValue] = useState<number>(POMODORO);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = useCallback(() => {
    setIsRunning(true);
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTimerValue(timerType === "POMODORO" ? POMODORO : SHORT_BREAK);
  }, [timerType]);

  const handleTimerTypeChange = useCallback(
    (type: "POMODORO" | "SHORTBREAK") => {
      setTimerType(type);
    },
    []
  );

  useEffect(() => {
    setTimerValue(timerType === "POMODORO" ? POMODORO : SHORT_BREAK);
    handleReset();
  }, [timerType, handleReset]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimerValue((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, [isRunning]);

  useEffect(() => {
    if (timeValue === 0) {
      setIsRunning(false);
    }
  }, [timeValue]);

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full flex flex-col float-start items-center">
        <h1 className="font-primary font-weight-500 text-64px not-italic tracking-negative-3.4px text-white">
          Focusflow
        </h1>
        <div className="flex justify-stretch gap-12px p-8px border-2px border-gray-6H rounded-20px">
          <button
            id="buttonTypePomodoro"
            className={`px-24px py-12px rounded-12px font-primary font-weight-500 text-16px tracking-negative-0.8px bg-black text-white transition duration-300 ease ${
              timerType === "POMODORO"
                ? "bg-gray-6H text-white text-opacity-100"
                : "hover:bg-gray-9H text-opacity-40"
            }`}
            onClick={() => handleTimerTypeChange("POMODORO")}
          >
            Pomodoro
          </button>
          <button
            id="buttonTypeShortBreak"
            className={`px-24px py-12px rounded-12px font-primary font-weight-500 text-16px tracking-negative-0.8px bg-black text-white transition duration-300 ease ${
              timerType === "SHORTBREAK"
                ? "bg-gray-6H text-white text-opacity-100"
                : "hover:bg-gray-9H text-opacity-40"
            }`}
            onClick={() => handleTimerTypeChange("SHORTBREAK")}
          >
            Short Break
          </button>
        </div>
      </div>
      <TimerDisplay timerValue={timeValue} />
      <TimerControls
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
};

export default PomodoroTimer;
