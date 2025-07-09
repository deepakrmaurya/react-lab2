import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // add 10ms
      }, 10);
    }
    return () => clearInterval(timer); // cleanup
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Format: MM:SS:MS
  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <h2 className="text-3xl font-bold mb-4">🕒</h2>
      <div className="text-5xl font-mono bg-gray-200 px-8 py-4 rounded-lg shadow">
        {formatTime()}
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
