const QuoteContainer = ({ quote }) => {
  if (!quote) return null;
  return (
    <div className="border-2 w-1/2 rounded-lg mx-[25%] pl-2 bg-orange-400">
      <div>
        <h1 className="font-bold text-2xl pt-5 px-5">{quote.quote} </h1>
      </div>
      <div className="font-mono text-right pr-4 pb-2">
        <p className="italic">- {quote.author}</p>
      </div>
    </div>
  );
};

export default QuoteContainer;
