import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: 'Unknown', errorMessage: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => console.error(err.message)
    );
  }

  render() { 
    return <div>Latitude: {this.state.latitude}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));


Error: {this.state.errorMessage}
<br/>

(err) => this.setState({ errorMessage: err.message })
