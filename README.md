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





# Section 3: Communicating with Props

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

### 



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





