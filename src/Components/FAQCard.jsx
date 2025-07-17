import React, { useState } from "react";
import jsQuestions from "../constants/jsQuestions";

const FAQCard = () => {
  const [showAnswerTray, setShowAnswerTray] = useState(null);

  const toggleAnswerTray = (index) => {
    setShowAnswerTray(showAnswerTray === index ? null : index);
    console.log(showAnswerTray);
  };
  return (
    <div>
      FAQCard
      {jsQuestions.map((qna, index) => (
        <div
          className="mx-10 mt-5 hover:bg-gray-400 cursor-pointer border-2 rounded-lg p-2"
          key={qna.id || index}
        >
          <div
            className="m-2 justify-between flex"
            onClick={() => toggleAnswerTray(index)}
          >
            <div>{qna.question}</div>
            <div>{showAnswerTray === index ? "⬆️" : "⬇️"}</div>
          </div>
          {showAnswerTray === index && (
            <div className="m-2 pl-5 pt-2 ">{qna.answer}</div>
          )}{" "}
        </div>
      ))}
    </div>
  );
};

export default FAQCard;
