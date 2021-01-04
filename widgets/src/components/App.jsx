import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translator from "./Translator";
import Route from "./Route.js";
import Header from "./Header";

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

const tabs = [
  { path: "/", label: "Accordion" },
  { path: "/search", label: "Wikipedia Search" },
  { path: "/dropdown", label: "Dropdown" },
  { path: "/translator", label: "Translator" }
];

function App() {
  const [selectedColor, setSelectedColor] = useState(dropdownOptions[0]);

  return (
    <div className='ui container'>
      <Header tabs={tabs} />

      <Route path='/'>
        <Accordion items={accordionItems} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          selected={selectedColor}
          onSelectedChange={setSelectedColor}
          label='Color'
          options={dropdownOptions}
        />
      </Route>
      <Route path='/translator'>
        <Translator />
      </Route>
    </div>
  );
}

export default App;
