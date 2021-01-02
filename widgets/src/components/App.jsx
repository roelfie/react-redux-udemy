import React from "react";
import Accordion from "./Accordion";

const items = [
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
      <Accordion items={items} />
    </div>
  );
}

export default App;
