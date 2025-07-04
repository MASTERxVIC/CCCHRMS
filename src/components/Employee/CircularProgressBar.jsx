import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = () => {
  const percentage = 75;
  const fullTimeCount = 117;
  const traineeCount = 39;

  return (
    
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-6">
        Employment Type Split
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
        {/* Circular Chart */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto sm:mx-0">
          <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: "#f59e0b",
              trailColor: "#e5e7eb",
              strokeLinecap: "round",
            })}
          >
            <div className="flex flex-col items-center">
              <div className="text-lg sm:text-xl font-semibold text-gray-800">
                {percentage}%
              </div>
              <div className="text-xs sm:text-sm text-gray-500 text-center mt-1 leading-tight">
                Full-Time <br /> Employees
              </div>
            </div>
          </CircularProgressbarWithChildren>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 text-sm text-gray-700 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            Full-Time: <span className="font-medium">{fullTimeCount}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            Trainee: <span className="font-medium">{traineeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
