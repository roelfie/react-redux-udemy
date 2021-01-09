import React from "react";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select language:
          <i className='us flag' onClick={() => this.onLanguageChange("english")} />
          <i className='nl flag' onClick={() => this.onLanguageChange("dutch")} />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;
