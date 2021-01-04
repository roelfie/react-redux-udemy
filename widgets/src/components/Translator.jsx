import React, { useState } from "react";
import Dropdown from "./Dropdown";
import LanguageConverter from "./LanguageConverter";

const languages = [
  {
    key: "nl",
    value: "Nederlands"
  },
  {
    key: "af",
    value: "Afrikaans"
  },
  {
    key: "de",
    value: "Deutsch"
  },
  {
    key: "ar",
    value: "Arabic"
  }
];

const Translator = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter text</label>
          <input className='input' value={text} onChange={(evt) => setText(evt.target.value)} />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        label='Select language'
        options={languages}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <LanguageConverter language={language.key} text={text} />
    </div>
  );
};

export default Translator;
