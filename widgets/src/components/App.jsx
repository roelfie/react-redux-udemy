import React, { useState } from "react";
// import Accordion from "./Accordion";
// import Search from "./Search";
import Dropdown from "./Dropdown";

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

const dropdownOptions = [
  {
    key: "red",
    value: "Red"
  },
  {
    key: "green",
    value: "Green"
  },
  {
    key: "blue",
    value: "Blue"
  }
];
function App() {
  const [selectedColor, setSelectedColor] = useState(dropdownOptions[0]);

  return (
    <div>
      {/* <Accordion items={accordionItems} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selectedColor}
        onSelectedChange={setSelectedColor}
        defaultText='Color'
        options={dropdownOptions}
      />
    </div>
  );
}

export default App;
