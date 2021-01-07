import React from "react";
import { connect } from "react-redux";

import GoogleButton from "./GoogleButton";
import { registerLogin, registerLogout } from "../actions";

const CLIENT_ID = "8143027570-jh3f6tctadfot1vp3r2qobc3l97q96od.apps.googleusercontent.com";

class GoogleAuthenticator extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.GoogleAuth = window.gapi.auth2.getAuthInstance();
          // https://developers.google.com/identity/sign-in/web/reference#googleauthissignedinlistenlistener
          this.GoogleAuth.isSignedIn.listen(this.onAuthChanged);
          this.onAuthChanged(this.GoogleAuth.isSignedIn.get());
        });
    });
  }

  onAuthChanged = (isSignedIn) => {
    if (isSignedIn) {
      this.props.registerLogin(this.GoogleAuth.currentUser.get());
    } else {
      this.props.registerLogout();
    }
  };

  renderButtons = () => {
    if (this.props.isSignedIn === null) {
      return null;
    }
    if (this.props.isSignedIn) {
      return (
        <GoogleButton
          color='red'
          onClick={() => this.GoogleAuth.signOut()}
          label={`Sign Out (${this.props.username})`}
        />
      );
    }
    return <GoogleButton onClick={() => this.GoogleAuth.signIn()} label='Sign In with Google' />;
  };

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authDetails.isSignedIn,
    username: state.authDetails.username
  };
};

export default connect(mapStateToProps, { registerLogin, registerLogout })(GoogleAuthenticator);
