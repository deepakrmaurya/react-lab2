import React, { useState } from "react";

const MoodSelector = () => {
  const [mood, setMood] = useState("");

  const moodSelector = (a) => {
    setMood(a.target?.attributes?.src?.nodeValue);
  };
  return (
    <div>
      <div className=" mx-10 my-20 border-2 h-22 w-133 rounded-full">
        <div className="flex  mt-1.5 ">
          <div>
            <img
              onClick={moodSelector}
              className="mx-2 w-18 hover:w-24 hover:-mt-8"
              src="/assets/love-21.png"
            />
          </div>
          <div>
            <img
              onClick={moodSelector}
              className="mx-2 w-18 hover:w-24 hover:-mt-8"
              src="/assets/happy-9.png"
            />
          </div>
          <div>
            <img
              onClick={moodSelector}
              className="mx-2 w-18 hover:w-24 hover:-mt-8"
              src="/assets/cold-3.png"
            />
          </div>
          <div>
            <img
              onClick={moodSelector}
              className="mx-2 w-18 hover:w-24 hover:-mt-8"
              src="/assets/sad-13.png"
            />
          </div>
          <div>
            <img
              onClick={moodSelector}
              className="mx-2 w-18 hover:w-24 hover:-mt-8"
              src="/assets/fall-asleep.png"
            />
          </div>
          <div>
            <img
              onClick={moodSelector}
              className="mx-2 w-18 hover:w-24 hover:-mt-8"
              src="/assets/shed-tears.png"
            />
          </div>
        </div>
      </div>
      <div className="border-2 w-30 h-35 ml-20 rounded-lg">
        <div className="pl-2 pt-1">Today's Mood</div>
        <div className="ml-2">
          <img className="mx-2 mt-2 w-21" src={mood} />
        </div>
      </div>
    </div>
  );
};

export default MoodSelector;
