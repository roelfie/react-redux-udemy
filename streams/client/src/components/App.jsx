import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/show' exact component={StreamShow} />
            <Route path='/streams/edit' exact component={StreamEdit} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/delete' exact component={StreamDelete} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
