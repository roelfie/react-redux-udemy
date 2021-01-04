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
   - Add fomantic UI (a.k.a. semantic ui):

   ```html
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.7/semantic.min.css"
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

    // Initialize state
    this.state = { latitude: "Unknown" };

    window.navigator.geolocation.getCurrentPosition(
      // Update state
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => console.error(err.message)
    );
  }

  render() {
    // Use state
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
- Styling (Fomantic UI)

# Section 12: Hooks

**Application: `widgets`**

Hooks allow you to add extra capabilities to functional components.

- `useState` lets you use state
- `useEffect` somehow mimic lifecycle
- `useRef` lets you create a Ref

Hooks help you write reusable code. Other hooks built in to React:

- `useContext`
- `useReducer`
- `useCallback`
- `useMemo`
- `useImperativeHandle`
- `useLayoutEffect`
- `useDebugValue`

The `widgets` application is built with functional components and uses hooks to add state, lifecycle methods & other advanced stuff.

### useState

Allows you to define a container and a setter a 'piece of state'. In this example we use `useState` to store the active element of an accordion:

```js
import React, { useState } from "react";

const Accordion = (props) => {
  // Initialize state (holder & setter)
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    // Update state
    setActiveIndex(index);
  };

  const renderedItems = props.items.map((item, index) => {
    // Use state
    const activeStyle = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${activeStyle}`} onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${activeStyle}`}>
          <p>{item.description}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderedItems}</div>;
};
```

### useEffect

**Widget: `widgets/Search`**

The `useEffect` hook mimics lifecycle and can be configured to run some code when:

- component renders for the first time
  - `useEffect(() => { ... }, []);`
- component renders or re-renders
  - `useEffect(() => { ... });`
- component renders or re-renders and some piece of data (state) has changed
  - `useEffect(() => { ... }, [state]);`

It basically serves as an onChange event handler for state.

#### Implement throttling using the useEffect cleanup function

The function provided to `useEffect` can return an optional cleanup function. This cleanup function will be executed

- on the next execution of `useEffect`
- when the component is removed from the DOM

Example of a Wikipedia search widget that calls the Wikipedia API with a search 'term' 500ms after the last keystroke:

```js
import React, { useState, useEffect } from "react";
import Wikipedia from "../api/Wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (term) {
      const timeoutId = setTimeout(() => {
        Wikipedia.search(term)
          .catch((err) => console.log(err))
          .then((response) => setItems(response.data.query.search));
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedItems = items.map((item) => {
    return (
      <div key={item.pageid}>
        <div>{item.title}</div>
        <p>{item.snippet}</p>
      </div>
    );
  });

  return (
    <div>
      <input value={term} onChange={(evt) => setTerm(evt.target.value)} />
      <div>{renderedItems}</div>
    </div>
  );
};
```

#### Throttling & debounce

The previous example shows how to throttle API calls: We don't call the API until the user has paused typing for 500ms.
Remaining problem: If the user has searched for `cow` then types `s` followed by `Backspace` the API will be called with the unchanged search term `cow`.

To prevent unnecessary API calls we use a technique called debouncing.

- [useDebounce](https://usehooks.com/useDebounce/) on useHooks.com
- [How to throttle or debounce](https://stackoverflow.com/questions/54666401/how-to-use-throttle-or-debounce-with-react-hook) (Stackoverflow)
- Sections 169 (Fixing a warning) and 193 (Deboucing translation updates) of the course.

The idea is to use a second piece of state (debouncedTerm) and use two `useEffect` hooks: one for `term` (which sets a timer to update the debouncedTerm after T millis) and one for `debouncedTerm` (which does the API call if debouncedTerm has changed). Like this:

```js
import React, { useState, useEffect } from "react";
import Wikipedia from "../api/Wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [items, setItems] = useState([]);

  // Copy term to debouncedTerm after 500m
  useEffect(() => {
    if (term) {
      const timeoutId = setTimeout(() => {
        setDebouncedTerm(term);
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  // Call API as soon as debouncedTerm has changed
  useEffect(() => {
    if (debouncedTerm) {
      Wikipedia.search(debouncedTerm)
        .catch((err) => console.log(err))
        .then((response) => setItems(response.data.query.search));
    }
  }, [debouncedTerm]);

  const renderedItems = items.map((item) => {
    return (
      <div key={item.pageid}>
        <div>{item.title}</div>
        <p>{item.snippet}</p>
      </div>
    );
  });

  return (
    <div>
      <input value={term} onChange={(evt) => setTerm(evt.target.value)} />
      <div>{renderedItems}</div>
    </div>
  );
};
```

#### Warning: React Hook useEffect has a missing dependency

If you reference a piece of state inside `useEffect` that is not included in the state array passed into `useEffect`, React will give this warning: _React Hook useEffect has a missing dependency_.
Section 12 (Hooks) Video 169 (Optional Video: Fixing a Warning) gives a solution.

### useRef

**Widget: `widgets/Dropdown`**

The `useRef` hook gives you a reference to a DOM element, similar to `React.createRef()` for class-based components (section 10).

#### Note on event bubbling

If multiple elements in the DOM hierarchy have an event handler defined for the same event, they will all be invoked, in the following order:

1. by default propagated from the innermost to the outermost element
2. but event handlers defined with `addEventListener()` are invoked first

This means that, depending on how you've set up your DOM, events are not necessarilly propagated linearly.

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
- [Fomantic UI](https://fomantic-ui.com/) (a.k.a. Semantic UI)

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
- [Google Translate](https://cloud.google.com/translate/docs/reference/rest/v2/translate)
- [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)
