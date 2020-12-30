import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './comments/Comment';
import ApprovalPanel from './comments/ApprovalPanel';

const RandomComment = () => {
  return (
    <Comment author={faker.name.firstName() + " " + faker.name.lastName()}
             avatar={faker.image.image()} 
             comment={faker.lorem.sentence()}/>
  );
};

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalPanel>
        <RandomComment />
      </ApprovalPanel>
      <ApprovalPanel>
        <RandomComment />
      </ApprovalPanel>
      <ApprovalPanel>
        <RandomComment />
      </ApprovalPanel>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
