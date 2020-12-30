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

Props is a system for passing data to a React component in order to customize / configure it.



