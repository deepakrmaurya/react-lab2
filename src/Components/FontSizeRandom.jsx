import { useState } from "react";

const FontSizeRandom = () => {
  const [fontSizeState, setFontSizeState] = useState(50);

  const handleFontSize = () => {
    const randomFontSize = Math.floor(Math.random() * 50 + 1);
    const size = randomFontSize + "px";
    setFontSizeState(size);
  };

  return (
    <div>
      <button
        onClick={handleFontSize}
        className="font-bold border-2 rounded-2xl h-15 mt-10 px-10 mx-[35%]"
      >
        Click to change font size.
      </button>
      <div
        className=" m-2 rounded-2xl border-2 px-[40%] py-20"
        style={{ fontSize: fontSizeState }}
      >
        Hello World...!
      </div>
    </div>
  );
};

export default FontSizeRandom;
