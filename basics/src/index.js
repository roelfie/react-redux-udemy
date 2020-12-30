import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comments/Comment';

const App = () => {
  return (
    <div className="ui container comments">
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
