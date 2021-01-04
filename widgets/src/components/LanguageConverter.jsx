import React, { useState, useEffect } from "react";
import Google from "../api/Google";

const LanguageConverter = ({ language, text }) => {
  const [output, setOutput] = useState("");

  // Whenever language or text changes, translate
  useEffect(() => {
    if (text) {
      const timeoutId = setTimeout(() => {
        Google.translate(text, language)
          .catch((err) => console.log(err))
          .then(({ data }) => {
            if (data.data.translations[0]) {
              setOutput(data.data.translations[0].translatedText);
            } else {
              setOutput("No translation found.");
            }
          });
      }, 400);

      // This 'cleanup function' will be executed as soon as this effect executes the next time.
      // The effect of this cleanup function is that no API call is done as long as user is typing.
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [language, text]);

  return <div>{output}</div>;
};

export default LanguageConverter;
