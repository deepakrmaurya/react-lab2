import { useState } from "react";

const ToggleButton = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className="m-10 px-11 py-4 rounded-2xl border-2 w-50 bg-amber-400">
      Toggle Button
      <div>
        <button
          onClick={handleToggle}
          className={` border-2 rounded-2xl px-10  ${
            toggleBtn ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toggleBtn ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
