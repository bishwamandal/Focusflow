import React from "react";

interface TimerDisplayProps {
  timerValue: number;
}

const formatTime = (time: number): string => {
  const minutes = Math.trunc(time / 60).toString().padStart(2, "0");
  const seconds = Math.trunc(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timerValue }) => {
  const multiplierFactor = 360 / (timerValue === 0 ? 1 : timerValue);
  const progressStyle = React.useMemo(() => ({
    background: `conic-gradient(#1A1A1A ${timerValue * multiplierFactor}deg, #832126 0deg)`,
    transition: 'background 0.8s ease-out',
  }), [timerValue, multiplierFactor]);

  return (
    <div className="card-body">
      <div id="circularProgressBar" className="progress-bar" style={progressStyle}>
        <div className="progress-bar-inner">
          <h2 className="progress-value">{formatTime(timerValue)}</h2>
        </div>
      </div>
    </div>
  )
}

export default TimerDisplay;