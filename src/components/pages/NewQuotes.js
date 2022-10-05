import QuoteForm from "../quotes/QuoteForm";

const NewQuotes = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuotes;
