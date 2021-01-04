import React, { useState, useEffect } from "react";
import Google from "../api/Google";

const LanguageConverter = ({ language, text }) => {
  const [output, setOutput] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  // Update debouncedText after X ms
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [text]);

  // Call API whenever debouncedText or language changes
  useEffect(() => {
    if (debouncedText) {
      Google.translate(debouncedText, language)
        .catch((err) => console.log(err))
        .then(({ data }) => {
          if (data.data.translations[0]) {
            setOutput(data.data.translations[0].translatedText);
          } else {
            setOutput("No translation found.");
          }
        });
    }
  }, [language, debouncedText]);

  return <div>{output}</div>;
};

export default LanguageConverter;
