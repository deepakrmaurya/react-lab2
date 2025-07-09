import QuoteContainer from "./QuoteContainer";
import quotes from "../constants/quotes";
import { useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);

  const generateRandom = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };
  return (
    <div>
      Random Quote
      <div>
        <div>
          <button
            onClick={generateRandom}
            className="border-2 w-[20%] py-1 rounded-lg mx-[40%] mb-10 mt-10 bg-gradient-to-br from-violet-600 to-fuchsia-800"
          >
            Click for the Quote
          </button>
        </div>
        <div>
          <QuoteContainer quote={quote} />
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
