# react-redux-udemy

My notes of the Udemy course 'Modern React with Redux'

# Section 1: Introduction

My system:

- Node v14.15.1
- npm 6.14.8

### Generating a React app

Each React application created during this course is generated using `create-react-app`:

```js
$ npx create-react-app myapp
$ cd myapp
$ npm start
```

Libraries included in each new React app:

- Babel (tool for converting JavaScript to an older, more widely supported version)
- Webpack
- Dev Server

#### Cleanup

After generating a new React app (with the default template) I follow these steps:

1. Add to `.gitignore`:

   ```
   .eslintcache
   ```

2. Remove everything from `./src`

3. Remove everything from `./public` except `./public/index.html`

4. Fix `index.html`:

   - Delete references to `manifest.json` and `favicon.ico`
   - Add semantic UI:

   ```html
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
   />
   ```

### React Components

A React component is a function or a class that produces HTML (JSX) and handles feedback (event handlers). Example of a function based component:

```js
const App = () => {
  return <div>Hi there!</div>;
};
```

# Section 2: JSX

JSX stands for JavaScript XML and is a React syntax extension to JavaScript.

Each React component is usually put in its own file. This file can have extension `.js` or `.jsx`. The transpiler will resolve the type of file contents. I prefer using `.jsx` since JSX is not pure JavaScript. This makes it easier to distinguish React from JavaScript files.

With [babeljs.io](https://babeljs.io/repl) you can check how Babel translates JSX into JavaScript. The above component translates into

```js
const App = () => {
  return React.createElement("div", null, "Hi there!");
};
```

### Referencing variables

```js
const App = () => {
  const buttonText = "Click me!";
  return <button>{buttonText}</button>;
};
```

### Inline styling

```js
<div style='background-color: red; border: 1px solid red'></div>
```

becomes

```js
<div style={{ backgroundColor: "red", border: "1px solid red" }}></div>
```

### Class -> className

```js
<label class='label' for='name'>
  Name
</label>
```

becomes

```js
<label className='label' for='name'>
  Name
</label>
```

# Section 3: Props

Props (properties) are used to pass information to a React component in order to customize / configure it.

You can use named properties:

```js
const Paragraph = (props) => {
  return <div>{props.content}</div>;
};
```

```js
const App = () => {
  return <Paragraph content='Quisquam sunt vero odio excepturi.' />;
};
```

Or nested components (children):

```js
const ApprovalPanel = (props) => {
  return <div className='content'>{props.children}</div>;
};
```

```js
const App = () => {
  return (
    <div className='ui container comments'>
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

**Application: `seasons`**

### Class components vs. Function components

In the old days class components had much more capabilities than function components.
Therefore, in older React projects, you will see more class components than function components.

With the introduction of **Hooks**, functional components now have the same capabilities:

Class components

- can produce JSX to show content to the user
- can use lifecycle events to run code at specific points in time
- can use state to update content on the screen

Function components

- can produce JSX to show content to the user
- can use **Hooks** to run code at specific points in time
- can use **Hooks** to access state & update content on the screen

In general, function components are good for simple content. Otherwise use class components. Also, Hooks are easier to understand when you have a good understanding of class components.

A class based component extends `React.Component` and defines a `render()` method that returns JSX:

```js
import React from "react";

class App extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}
```

Do not put initialization code inside the `render()` method, as the `render()` method is called very often!

### Using props in class components

Anywhere inside a class component you can lookup props using `this.props.propName`.

# Section 5: State

State is a JavaScript object that contains data relevant to a class-based component.

- Updating the State causes the component to rerender.
- State must be initialized when a component is created.
- State can only be updated using the function `setState()`.

Example:

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: "Unknown" };
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
   - Initialize state
2. render
   - Return JSX
   - Called many times
   - No data loading!
3. componentDidMount
   - Initialization logic (like data loading)
4. componentDidUpdate
   - Called when state changes
   - Example: Data loading based on user input
5. componentWillUnmount
   - Cleanup when component is removed from screen
   - Freuqently used in combination with non-React libraries

We have already seen `constructor()` and `render()`. We can also add the other methods to our component class, for instance `componentDidMount()` to implement initialization logic.

There are a few more (rarely used) lifecycle methods as described in the React.Component [API Reference](https://reactjs.org/docs/react-component.html#the-component-lifecycle).

Example of state and lifecycle (a clock that updates itself every second):

```js
class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <div className='time'>The time is: {this.state.time}</div>;
  }
}
```

# Section 7: Forms and Events

**Application: `image-finder`**

### Uncontrolled vs. controlled form elements

For an _uncontrolled element_ only the HTML DOM knows the value of the element:

```js
class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
    // Do stuff...
  }

  render() {
    return (
      <form className='ui form'>
        <input type='text' name='search-term' onChange={this.onInputChange} />
      </form>
    );
  }
}
```

A _controlled element_ is backed by the component's state:

```js
class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <form className='ui form'>
        <input
          type='text'
          name='search-term'
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
        />
      </form>
    );
  }
}
```

The source of thruth for controlled elements is the State and not the HTML DOM. The React application is storing all the data; the purpose of the DOM is presentation only!

### JavaScript 'this' keyword

This code will result in an error on form submit (`TypeError: Cannot read property 'state' of undefined`):

```js
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return <form onSubmit={this.onFormSubmit}>// Input elements using state...</form>;
  }
}
```

#### Solution 1: bind 'this' in the constructor

```js
class SearchBar extends React.Component {
  state = { term: "" };

  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return <form onSubmit={this.onFormSubmit}>// Input elements using state...</form>;
  }
}
```

#### Solution 2: Use an arrow function to bind 'this' properly

```js
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return <form onSubmit={this.onFormSubmit}>// Input elements using state...</form>;
  }
}
```

#### Solution 3: Invoke using an arrow function

```js
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return <form onSubmit={(e) => this.onFormSubmit(e)}>// Input elements using state...</form>;
  }
}
```

# Section 8: HTTP Requests

We start with a [comparison](https://medium.com/javascript-in-plain-english/an-absolute-guide-to-javascript-http-requests-44c685edfa51) of the three most popular techniques for making API requests from a browser: XHR, Fetch and Axios.

### XmlHttpRequest (XHR)

- Low level built-in browser object.
- Since 1999.

### Fetch

- Low level built-in browser object.
- Modern replacement for XHR.
- More advanced than XHR (supports concurrent requests, promise-based requests).

### Axios

- Third party library.
- Good for more advanced use cases. For basic use cases, fetch will do.
- Comparison of [fetch vs. Axios](https://blog.logrocket.com/axios-or-fetch-api/).

In our projects we will be using Axios, and we use the free [Unsplash API](https://unsplash.com/documentation#search-photos) for searching photos.

# Section 9: Rendering Lists

### JavaScript Map statements

```js
const numbers = [0, 1, 2, 3, 4];
numbers.map((n) => n * 2);
```

Example of a React component that renders a list of photos from the Unsplash API:

```js
import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ id, description, urls }) => {
    return (
      <div key={id}>
        <img src={urls.thumb} alt={description} />
      </div>
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
```

# Section 10: Ref

[Refs](https://reactjs.org/docs/refs-and-the-dom.html) provide a way to access DOM nodes or React elements created in the render method.

- Managing focus or media playback
- Integrating with 3rd party libraries

We use Refs in our `image-finder` app to get hold of `<img>` DOM elements to calculate the height of an image.

```js
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    // Initialize Ref
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Add behavior to Ref
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // Use Ref
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;
    // Bind Ref to DOM element
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular}></img>
      </div>
    );
  }
}
```

# Section 11: Movie Player app

**Application: `movie-player`**

In the `movie-player` application we bring together all the techniques learned so far:

- Functional components vs. Class-based components
- Props
- State
- Lifecycle methods
- HTTP Requests (Axios)
- Styling (Semantic UI)

# Section 12: Hooks

**Application: `widgets`**

Hooks allow you to add extra capabilities to functional components.

- `useState` lets you use state
- `useEffect` somehow mimic lifecycle
- `useRef` lets you create a Ref

Hooks help you write reusable code.

Other hooks built in to React:

- `useContext`
- `useReducer`
- `useCallback`
- `useMemo`
- `useImperativeHandle`
- `useLayoutEffect`
- `useDebugValue`

# References

### React

- [React](https://reactjs.org/)
- [create-react-app](https://create-react-app.dev/)
- [Udemy - Modern React with Redux](https://www.udemy.com/course/react-redux/learn/lecture/12531046#overview)

### Tools

- [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [CodeSandbox](http://react.new/)
- [Babel](https://babeljs.io/repl)
- [Prettier](https://prettier.io/) VSCode formatter plugin
  - Open VSCode `settings.json` ('Open Settings (JSON)' command) and add the following line: `"editor.defaultFormatter": "esbenp.prettier-vscode"`. Optionally, set 'Format on save' = true.
- [Semantic UI](https://semantic-ui.com/)

### JavaScript libraries

- [Axios](https://www.npmjs.com/package/axios)
- [Faker](https://github.com/marak/Faker.js/)

### JavaScript state managers

- [Redux](https://redux.js.org/)
- [Mobx](https://mobx.js.org/README.html)

### Browser APIs

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

### REST APIs

- [Unsplash](https://unsplash.com/developers) (image-finder)
- [Google](https://console.developers.google.com/) (movie-player)
