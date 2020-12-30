import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <div>Latitude: {this.state.latitude}</div>;
    } 
    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));