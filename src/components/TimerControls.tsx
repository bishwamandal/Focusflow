import React from "react";

interface TimerControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = React.memo(({ onStart, onStop, onReset }) => {
  return (
    <div className="card-footer">
      <button className="btn-success" onClick={onStart}>
        <img className="play" src="../assets/icons/play.svg" alt="Play" />
        Start
      </button>
      <button className="btn-danger" onClick={onStop}>
        <img className="stop" src="../assets/icons/pause.svg" alt="Stop" />
        Stop
      </button>
      <button className="btn-reset" onClick={onReset}>
        <img className="reset" src="../assets/icons/reset.svg" alt="Reset" />
        Reset
      </button>
    </div>
  );
});

export default TimerControls;