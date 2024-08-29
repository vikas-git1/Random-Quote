import React, { useState } from "react";
import "./GenQuote.css";
import quotes from "../data/quotes.json";
const GenQuote = () => {
  const [index, setIndex] = useState(0);

  const handleIndexChange = () => {
    let randomNum = Math.floor(Math.random() * quotes.length);
    setIndex(randomNum);
  };
  return (
    <>
      <h1 className="heading">Random Quote Generator</h1>
      <div className="container">
        <h1>{quotes[index].quote}</h1>
        <p>-{quotes[index].author}</p>
      </div>
      <button onClick={handleIndexChange}>Random Quote</button>
    </>
  );
};

export default GenQuote;
