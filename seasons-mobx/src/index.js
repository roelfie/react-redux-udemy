import React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";

class Location {
  latitude = null;
  errorMessage = null;

  constructor() {
    makeAutoObservable(this);
  }
}

const location = new Location();

const App = observer(
  class App extends React.Component {
    render() {
      const location = this.props.location;
      if (location.latitude && !location.errorMessage) {
        return <SeasonDisplay latitude={location.latitude} />;
      }
      if (!location.latitude && location.errorMessage) {
        return <div>Error: {location.errorMessage}</div>;
      }

      return <Loader text='Please wait...' />;
    }

    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        (position) => (this.props.location.latitude = position.coords.latitude),
        (err) => (this.props.location.errorMessage = err.message)
      );
    }
  }
);

ReactDOM.render(<App location={location} />, document.querySelector("#root"));
