import ChildSimpleQuoteCard from "./ChildSimpleQuoteCard";
import QuoteContainer from "./QuoteContainer";

const SimpleQuoteCard = () => {
  return (
    <div>
      Quote Card
      <div>
        <div>Quote of the day.</div>
      </div>
      <ChildSimpleQuoteCard
        quote={"We are the glitch, glitch in the matrix"}
        author={"- Jonas"}
      />
    </div>
  );
};

export default SimpleQuoteCard;
