import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="bg-amber-400 m-10 border-2 w-[25%] py-10 px-[6%] rounded-2xl">
      <p className="font-bold text-2xl pl-1">Counter</p>
      <button
        onClick={decrement}
        className="bg-black text-white border-black rounded-2xl border-2 px-3 mr-2"
      >
        -
      </button>
      <label className="font-bold">{counter}</label>
      <button
        onClick={increment}
        className="bg-black text-white border-black border-2 rounded-2xl px-3 ml-2"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
