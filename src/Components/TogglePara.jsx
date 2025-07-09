import { useState } from "react";

const TogglePara = () => {
  const [togglePara, setTogglePara] = useState(true);

  //   const handleClick = () => {
  //     setTogglePara(!togglePara);
  //   };
  return (
    <div>
      Toggle Para
      <div>
        <button
          onClick={() => {
            setTogglePara(!togglePara);
          }}
          className={`mx-20 my-10 font-bold border-2 rounded-lg px-5 ${
            togglePara ? "bg-amber-600" : "bg-red-600"
          } `}
        >
          {togglePara ? "Click to unhide" : "Click to hide"}
        </button>
        {!togglePara && (
          <p className="w-60 mx-20 border-2 p-2 rounded-lg bg-gray-300">
            One foot in front of the other, One more step, and then one more.
            Jack's only thoughts were to keep moving no matter how much his body
            screamed to stop and rest.
          </p>
        )}
      </div>
    </div>
  );
};

export default TogglePara;
