import React from "react";
// import Accordion from "./Accordion";
import Search from "./Search";

const accordionItems = [
  {
    title: "Question 1",
    description: "Answer 1"
  },
  {
    title: "Question 2",
    description: "Answer 2"
  },
  {
    title: "Question 3",
    description: "Answer 3"
  }
];

function App() {
  return (
    <div>
      {/* <Accordion items={accordionItems} /> */}
      <Search />
    </div>
  );
}

export default App;
