import React from "react";

const CLIENT_ID = "MY_CLIENT_ID.apps.googleusercontent.com";

class GoogleAuthenticator extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          // https://developers.google.com/identity/sign-in/web/reference
          this.GoogleAuth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.GoogleAuth.isSignedIn.get() });
          this.GoogleAuth.isSignedIn.listen(this.onAuthChanged);
        });
    });
  }

  onAuthChanged = () => {
    this.setState({ isSignedIn: this.GoogleAuth.isSignedIn.get() });
  };

  renderButtons() {
    if (this.state.isSignedIn === null) {
      return null;
    }
    if (this.state.isSignedIn) {
      return (
        <button className='ui red google button' onClick={this.GoogleAuth.signOut}>
          <i className='google icon'></i>
          Sign Out
        </button>
      );
    }
    return (
      <button className='ui blue google button' onClick={this.GoogleAuth.signIn}>
        <i className='google icon'></i>
        Sign In with Google
      </button>
    );
  }

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

export default GoogleAuthenticator;
