import React from "react";

interface TimerControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = React.memo(
  ({ onStart, onStop, onReset }) => {
    return (
      <div className="flex justify-center gap-12px px-24px py-12px">
        <button
          className="flex justify-center items-center px-24px py-12px border-none rounded-12px gap-8px text-white font-primary font-weight-500 text-16px tracking-negative-0.6px bg-button-start hover:bg-button-start-hover transition duration-400"
          onClick={onStart}
        >
          <img
            className="w-icon-w-21 h-icon-h-21"
            src="/icons/play.svg"
            alt="Play"
          />
          Start
        </button>
        <button
          className="flex justify-center items-center px-24px py-12px border-none rounded-12px gap-8px text-white font-primary font-weight-500 text-16px tracking-negative-0.6px bg-button-pause hover:bg-button-pause-hover transition duration-400"
          onClick={onStop}
        >
          <img
            className="w-icon-w-21 h-icon-h-21"
            src="/icons/pause.svg"
            alt="Stop"
          />
          Stop
        </button>
        <button
          className="flex justify-center items-center px-24px py-12px border-none rounded-12px gap-8px text-white font-primary font-weight-500 text-16px tracking-negative-0.6px bg-button-reset hover:bg-button-reset-hover transition duration-400"
          onClick={onReset}
        >
          <img
            className="w-icon-w-21 h-icon-h-21"
            src="/icons/reset.svg"
            alt="Reset"
          />
          Reset
        </button>
      </div>
    );
  }
);

export default TimerControls;
