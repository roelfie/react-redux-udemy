import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './comments/Comment';

const RandomComment = () => {
  return (
    <Comment author={faker.name.firstName()}
             avatar={faker.image.image()} 
             comment={faker.lorem.sentence()}/>
  );
};

const App = () => {
  return (
    <div className="ui container comments">
      <RandomComment />
      <RandomComment />
      <RandomComment />
      <RandomComment />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
