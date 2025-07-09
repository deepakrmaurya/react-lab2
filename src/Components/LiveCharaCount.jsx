import { useRef, useState } from "react";

const LiveCharaCount = () => {
  const inputRef = useRef();
  const [typeChar, setTypeChar] = useState(0);

  const handleChangeState = () => {
    setTypeChar(typeChar + 1);
    if (inputRef.current.value == "") {
      setTypeChar(0);
    }
    console.log(typeChar);
  };

  return (
    <div>
      LiveCharaCount
      <div className="ml-10 mt-5">
        <input
          ref={inputRef}
          className="border-2 bg-gray-200 font-bold pl-2"
          onChange={handleChangeState}
          type="text"
          placeholder="Type here..."
        />
        <div className="border-2 mt-4 w-100 h-40">
          <div className="font-bold ml-5">Character Count:</div>
          {typeChar > 0 && <p className="text-9xl">{typeChar}</p>}
        </div>
      </div>
    </div>
  );
};

export default LiveCharaCount;
