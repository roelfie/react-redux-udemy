import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  render() {
    return (
      <button className='ui primary button'>
        <LanguageContext.Consumer>
          {(value) => (value === "dutch" ? "Verstuur" : "Submit")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
export default Button;
