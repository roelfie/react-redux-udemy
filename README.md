# react-redux-udemy
My notes of the Udemy course 'Modern React with Redux'

# Section 1: Introduction

My system:
* Node v14.15.1
* npm 6.14.8

Generating a new React app:

```
$ npx create-react-app myapp
$ cd myapp
$ npm start
```

Libraries included in a new React app by default:
* Babel (tool for converting JavaScript to an older, more widely supported version)
* Webpack
* Dev Server

A React component is a function or a class that produces HTML (JSX) and handles feedback (event handlers). Example of a function based component:

```
const App = () => {
    return <div>Hi there!</div>;
}
```





# Section 2: JSX

JSX stands for JavaScript XML and is a React syntax extension to JavaScript. 
With [babeljs.io](https://babeljs.io/repl) you can check how Babel translates JSX to JavaScript. The above component translates into
```
const App = () => {
  return React.createElement("div", null, "Hi there!");
};
```

### Referencing variables

```
const App = () => {
    const buttonText = 'Click me!';
    return (
        <button>
            {buttonText}
        </button>
    )
};
```

### Inline styling

```
<div style="background-color: red; border: 1px solid red"></div>
```
becomes
```
<div style={{ backgroundColor: 'red', border: '1px solid red' }}></div>
```

### Class -> className

```
<label class="label" for="name">Name</label>
```
becomes
```
<label className="label" for="name">Name</label>
```





# Section 3: Props

Props (properties) are used to pass information to a React component in order to customize / configure it.

You can use named properties: 

```
const Paragraph = (props) => {
    return (
        <div>{props.content}</div>
    );
};
```

```
const App = () => {
  return (
    <Paragraph content="Quisquam sunt vero odio excepturi." />
  );
};
```

Or nested components (children):

```
const ApprovalPanel = (props) => {
    return (
      <div className="content">
        {props.children}
      </div>
    );
};
```

```
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalPanel>
        <Comment />
      </ApprovalPanel>

      <ApprovalPanel>
        <h3>Please confirm</h3>
        <b>Are you sure?</b>
      </ApprovalPanel>
    </div>
  );
};
```





# Section 4: Class-based Components

### Class components vs. Function components

In the old days class components had much more capabilities than function components.
Therefore, in older React projects, you will see more class components than function components.

With the introduction of __Hooks__, functional components now have the same capabilities:

Class components 
* can produce JSX to show content to the user
* can use lifecycle events to run code at specific points in time
* can use state to update content on the screen

Function components 
* can produce JSX to show content to the user
* can use __Hooks__ to run code at specific points in time
* can use __Hooks__ to access state & update content on the screen

In general, function components are good for simple content. Otherwise use class components. Also, Hooks are easier to understand when you have a good understanding of class components.

A class based component extends `React.Component` and defines a `render()` method that returns JSX:

```
import React from 'react';

class App extends React.Component {
  render() { 
    return <div>Hello!</div>;
  }
}
```

Do not put initialization code inside the `render()` method, as the `render()` method is called very often! 





# Section 5: State

State is a JavaScript object that contains data relevant to a class-based component.
* Updating the State causes the component to rerender.
* State must be initialized when a component is created.
* State can only be updated using the function `setState()`.


Example:
```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: 'Unknown' };
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => console.error(err.message)
    );
  }

  render() { 
    return <div>Your location: {this.state.latitude}</div>;
  }
}
```





# Section 6: Lifecycle Methods

[Component Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html):

1. constructor
   * Initialize state
2. render
   * Return JSX
   * Called many times
   * No data loading!
3. componentDidMount
   * Initialization logic (like data loading)
4. componentDidUpdate
   * Called when state changes
   * Example: Data loading based on user input
5. componentWillUnmount
   * Cleanup when component is removed from screen
   * Freuqently used in combination with non-React libraries

We have already seen `constructor()` and `render()`. We can also add the other methods to our component class, for instance `componentDidMount()` to implement initialization logic.

There are a few more (rarely used) lifecycle methods as described in the React.Component [API Reference](https://reactjs.org/docs/react-component.html#the-component-lifecycle).





# References

### React

* [React](https://reactjs.org/)
* [create-react-app](https://create-react-app.dev/)

### Tools
* [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [CodeSandbox](http://react.new/)
* [Babel](https://babeljs.io/repl)
* [Semantic UI](https://semantic-ui.com/)
* [Faker](https://github.com/marak/Faker.js/)

### Courses
* [Udemy - Modern React with Redux](https://www.udemy.com/course/react-redux/learn/lecture/12531046#overview)

### JavaScript state managers
* [Redux](https://redux.js.org/)
* [Mobx](https://mobx.js.org/README.html)

### APIs

* [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)





