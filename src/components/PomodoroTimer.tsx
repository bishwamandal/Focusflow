import React, { useState, useEffect, useCallback, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import "../styles/App.css";

const POMODORO = 1800;
const SHORT_BREAK = 120;

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
    <div className="container">
      <div className="card-header">
        <h1>Focusflow</h1>
        <div className="card-header-buttons">
          <button
            id="buttonTypePomodoro"
            className={timerType === "POMODORO" ? "active" : ""}
            onClick={() => handleTimerTypeChange("POMODORO")}
          >
            Pomodoro
          </button>
          <button
            id="buttonTypeShortBreak"
            className={timerType === "SHORTBREAK" ? "active" : ""}
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
