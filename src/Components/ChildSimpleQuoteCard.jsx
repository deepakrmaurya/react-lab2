import React from "react";

const ChildSimpleQuoteCard = (props) => {
  return (
    <div className="ml-30 mt-10 border-2 w-100 pl-10 pt-3 h-20 rounded-lg bg-gradient-to-bl from-amber-400 to-blue-400">
      <div>{props.quote}</div>
      <div className="pl-70 pt-2 italic font-mono">{props.author}</div>
    </div>
  );
};

export default ChildSimpleQuoteCard;
