import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translator from "./Translator";
import Route from "./navigation/Route";
import Header from "./navigation/Header";
import { accordionItems, dropdownOptions } from "../config/Config";

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
