import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <Router history={history}>
          <div style={{ margin: "10px" }}>
            <Header />
            <Switch>
              <Route path='/' exact component={StreamList} />
              <Route path='/streams/new' exact component={StreamCreate} />
              <Route path='/streams/edit/:streamId' exact component={StreamEdit} />
              <Route path='/streams/delete/:streamId' exact component={StreamDelete} />
              <Route path='/streams/:streamId' exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
