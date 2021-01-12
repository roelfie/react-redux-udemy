# react-redux-udemy

My notes of the Udemy course 'Modern React with Redux'

# References

- React
  - [React](https://reactjs.org/)
  - [Create-react-app](https://create-react-app.dev/)
- Chrome extensions
  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension)
  - [React Sight](https://www.reactsight.com/)
- Tools
  - [CodeSandbox](http://react.new/)
  - [Codepen.io](https://codepen.io/)
  - [Babel](https://babeljs.io/repl)
  - [Prettier](https://prettier.io/) VSCode formatter plugin (\*)
  - [Fomantic UI](https://fomantic-ui.com/) (a.k.a. Semantic UI)
  - [Node Media Server](https://github.com/illuspas/Node-Media-Server)
- JavaScript libraries
  - [Axios](https://www.npmjs.com/package/axios)
  - [Faker](https://github.com/marak/Faker.js/) (`basics` app)
  - [Lodash](https://lodash.com/) (`blog` app)
  - [Google API JavaScript client](https://github.com/google/google-api-javascript-client)
  - [JSON Server](https://www.npmjs.com/package/json-server) ([github](https://github.com/typicode/json-server))
- Redux / MobX
  - [React Router](https://reactrouter.com/)
  - [Redux](https://redux.js.org/)
  - [Redux Form](https://redux-form.com/)
  - [Thunk](https://github.com/reduxjs/redux-thunk)
  - [Mobx](https://mobx.js.org/README.html)
- Browser APIs
  - [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) (`seasons` app)
- REST APIs
  - [{JSON}Placeholder](https://jsonplaceholder.typicode.com/) (`blog` app)
  - [Unsplash](https://unsplash.com/developers) (`image-finder` app)
  - [Google](https://console.developers.google.com/) (`movie-player` app)
  - [Google Translate](https://cloud.google.com/translate/docs/reference/rest/v2/translate) (`widgets` app)
  - [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page) (`widgets` app)
- Courses
  - [Modern React with Redux](https://www.udemy.com/course/react-redux/learn/lecture/12531046#overview) (Udemy)
  - [Manage Complex State in React Apps with MobX](https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx) (egghead.io)
  - [React State Management](https://www.linkedin.com/learning/react-state-management/) (LinkedIn Learning)
- Courses (OAuth)
  - [The Nuts and Bolts of OAuth 2.0](https://www.udemy.com/course/oauth-2-simplified/) (Udemy)
  - [OAuth and OpenID Connect](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-2/) (LinkedIn Learning)

(\*) Open VSCode `settings.json` ('Open Settings (JSON)' command) and add the following line: `"editor.defaultFormatter": "esbenp.prettier-vscode"`. Optionally, set 'Format on save' = true.

# Apps

Throughout this course, the following React applications will be built:

| Section | Application  | Topics                                              | Libs & tools                        |
| ------- | ------------ | --------------------------------------------------- | ----------------------------------- |
| 3       | basics       | functional components, props                        | Faker, Semantic UI                  |
| 4-6     | seasons      | class components, state, lifecycle                  | Geolocation API                     |
| 7-10    | image-finder | forms, events, callbacks, refs, promises            | Axios, Unsplash, grid               |
| 11      | movie-player | refs                                                | Youtube API, grid                   |
| 12      | widgets      | hooks (useState, useEffect, useRef), API throttling | Wikipedia API, Google translate API |
| 13      |              | navigation (custom)                                 |                                     |
| 17      | songs        | redux, actions, reducers                            |                                     |
| 18      | blog         | redux thunk (asycn actions), middleware             |                                     |
| 19      |              | API call caching, memoization                       | Lodash                              |
| 20-22   | streams      | navigation (react router)                           | OAuth (Google API), Redux dev tools |
| 23      |              | redux form                                          |                                     |
| 24      |              | REST, path params (react router), browser history   | JSON Server, Lodash                 |
| 25      |              | portals (modal popups)                              |                                     |
| 27      | context      | context                                             |                                     |

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

# Section 13: Navigation

Navigation can be implemented

- from scratch
- with the `React Router` library

In the `widgets` application we build navigation from scratch. A later application will use React Router (Section 20).

# Section 14: Hooks in practice

In this section the class-based components of the `movie-player` application are refactored to functional components using hooks.

### Custom hooks

Custom hooks are (besides components) one of the best ways to create reusable code in React. Take a look at the videos (210-213) in this section to find out about custom hooks.

A custom hook always makes use of one or more standard React hook.

# Section 15: Deployment

Examples:

- [Vercel](https://vercel.com/) - Deploy to Vercel from the command line using the Vercel CLI
- [Netlify](https://www.netlify.com/) - Automatically re-deploys on github commits
- AWS S3:
  - `npm run build`
  - upload the contents of the `build` folder to S3
  - open `BUCKET/index.html` in your browser

# Section 16: Redux

[Redux](https://redux.js.org/introduction/getting-started) is a state container for JavaScript.

Standard React state (`this.state` and `useState`) is bound to a single component. If you want to share this state across components, you will have to pass it around using things like `props`.

If your application grows and you have a lot of state that must be shared across components, you can use a centralized state manager like `Redux`.

- [Stackoverflow](https://stackoverflow.com/questions/41584647/when-do-i-choose-react-state-vs-redux-store)
- [React vs. Redux](https://spin.atomicobject.com/2017/06/07/react-state-vs-redux-state/)

### Redux vs. MobX

[MobX or Redux: Which is Better For React State Management?](https://habr.com/en/post/480692/)

### First example

Run the following snippet on [codepen.io](https://codepen.io):

```js
// Action creators
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: { name: name, amount: amount }
  };
};
const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: { name: name }
  };
};
const createClaim = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: { name: name, amountClaimed: amount }
  };
};

// Reducers
const claimsReducer = (claims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...claims, action.payload];
  }
  return claims;
};
const accountingReducer = (account = { balance: 0 }, action) => {
  if (action.type === "CREATE_POLICY") {
    return { balance: account.balance + action.payload.amount };
  } else if (action.type === "CREATE_CLAIM") {
    return { balance: account.balance - action.payload.amountClaimed };
  }
  return account;
};
const policiesReducer = (policyHolders = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...policyHolders, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return policyHolders.filter((name) => name !== action.payload.name);
  }
  return policyHolders;
};

// Redux in action
const { createStore, combineReducers } = Redux;

// Following structure reflects Redux' state object
const departments = combineReducers({
  account: accountingReducer,
  claims: claimsReducer,
  policies: policiesReducer
});

const store = createStore(departments);

store.dispatch(createPolicy("Alex", 25));
store.dispatch(createPolicy("Bob", 25));
store.dispatch(createPolicy("Chris", 25));
store.dispatch(createPolicy("Drew", 25));
store.dispatch(createClaim("Chris", 40));
store.dispatch(deletePolicy("Bob"));

console.log(store.getState());
```

State can only be modified through the dispatcher. You can not modify state directly.

### Redux 'lifecycle'

- Action Creator
- Action
- dispatch
- Reducers
- State

### Reducers

Do not modify existing data structures inside reducers. Always return new ones.

**For tips & tricks how to modify state in reducers, see the \_doc folder, and the JavaScript appendix at the end of this README.**

```js
originalItems.push(newItem);
return originalItems; // BAD
return [...originalItems, newItem]; // GOOD
```

# Section 17: Integrating React with Redux

**Application: `songs`**

Below is an example of a very simple React application with just one component (SongList) that integrates with Redux using `Provider` and `connect()` from the `react-redux` library:

**`./redux/reducers/index.js`**

```js
import { combineReducers } from "redux";

const songs = [
  { title: "Ninjago Overtue", duration: "4:05" },
  { title: "The Weekend Whip", duration: "8:54" },
  { title: "The Croc Swamp", duration: "7:35" },
  { title: "Hills of Chima", duration: "3:33" }
];

// Reducers are responsible for managing state (based on actions).
// In this example we have just one reducer that returns a static list.
const songsReducer = () => {
  return songs;
};

export default combineReducers({ songs: songsReducer });
```

**`./App.jsx`**

```js
import React from "react";
import SongList from "./components/SongList";

const App = () => {
  return (
    <div>
      <h2>Songs</h2>
      <SongList />
    </div>
  );
};

export default App;
```

**`./components/SongList.jsx`**

```js
import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderSongs = (songs) => {
    return songs.map((song) => {
      return <div key={song.title}>{song.title}</div>;
    });
  };

  render() {
    return <div className='ui divided list'>{this.renderSongs(this.props.songs)}</div>;
  }
}

// Boiler plate code: Map state to props (named 'mapStateToProps' by convention)
const mapStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

// Boiler plate code: Connect component to Redux
export default connect(mapStateToProps)(SongList);
```

**`./index.js`**

```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./redux/reducers";
import App from "./App";

ReactDOM.render(
  {/* Provider manages the React/Redux integration */}
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
```

# Section 18: Redux Thunk

**Application: `blog`**

With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. The [redux-thunk](https://github.com/reduxjs/redux-thunk) middleware extends the store's abilities, and allows you to write action creators that perform async logic (like API calls).

### Action Creators

Action Creators are responsible for making API requests. **Do not make API requests from components or reducers.** Action Creators are typically called from lifecycle methods like `componentDidMount` and `componentDidUpdate` and they are typically performed asynchronously.

### API requests from action creators (BAD)

You would expect an asynchronous API call to be implemented something like this:

```js
import typicode from "../api/Typicode";

export const loadPosts = async () => {
  const response = await typicode.get("/posts");
  return {
    type: "POSTS_UPDATED",
    payload: response.data
  };
};
```

But when React executes the above action creator it will result in this error message:
`Error: Actions must be plain objects. Use custom middleware for async actions.`.

It may look like the action creator is returning a plain object, but it is not. On [babeljs.io](https://babeljs.io/repl) you will find that the above simple action creator is transpiled into `es2015` that in fact returns the request returned by the `axios.get()`, i.e. a promise!

Redux detects that this is a promise and not a plain object, and refuses to `store.dispatch()` it, hence the error.

### Redux Thunk

[Redux-Thunk](https://github.com/reduxjs/redux-thunk) is an example of [Redux Middleware](https://redux.js.org/understanding/history-and-design/middleware).
Middleware sits between the dispatcher and the reducers.

- It gets called with every action we dispatch
- It can stop or modify an action, or do with it whatever it wants
  - logging or crash reporting
  - dealing with async actions

In standard Redux an **action creator must return an action object**.

With Redux-Thunk an **action creator may also return a function**. This function is called by Redux-Thunk with arguments
`function(dispatcher, getState)`.

If Redux-Thunk receives

- an object, then it simply passes it on to the reducers.
- a function, then it calls that function with arguments `function(dispatch, getState)`

The function does what it needs to do (e.g. an async API call) and chooses if and when to dispatch the resulting object (or again a function).

### API requests from action creators (GOOD)

Register the Redux-Thunk middleware (irrelevant imports left out):

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

The above action creator can now be rewritten to the following:

```js
import typicode from "../api/Typicode";

export const loadPosts = () => {
  return async (dispatch, getState) => {
    const response = await typicode.get("/posts");
    dispatch({ type: "POSTS_UPDATED", payload: response.data });
  };
};
```

# Section 19: Redux Store Design

### Reducers

- Never return undefined
- Produce state using only previous state and the action
- Should not mutate the input state (best practice; see video 265 ''A misleading rule')
  - [Lodash](https://lodash.com/) can be helpful in returning new state without mutating the input state.

The signature of a reducer: `myReducer(state, action)`.
Redux calls the reducer

- 1st time: `myReducer(undefined, action_1)`
- next times: `myReducer(previousState, action_2..)`

where previousState is the value returned by the previous call to `myReducer`.

```js
const postsReducer = (posts = [], action) => {
  if (action.type === "POSTS_UPDATED") {
    return action.payload;
  }
  return posts;
};
```

### Warning: Re-rendering of components after dispatching an action

Redux' `state` is a map from reducers (keys) to their state (value). In other words it is the combination of the outputs of all reducers.

In the source code of [combineReducers](https://github.com/reduxjs/redux/blob/a64394d46a74fd3ee502016a12950c44605bd6a0/src/combineReducers.ts#L192) you will see that Redux will only tell React to re-render if one or more reducers has changed their state.

If a Reducer changes the original state object (`originalState.someProp = 'newValue'`) then this change will go undetected (even if the store was actually updated). If all reducers do this, no re-render will take place!

This is why, as a best practice, reducers shouldn't mutate input state.

### Memoizing async functions with Lodash

The `blog` application displays a list of 100 blog posts and loads the user details for the author of each of the posts. There are 10 different authors each of which has written 10 blog posts.

You could use an action creator like this:

```js
const loadUser = (id) => {
  return async (dispatch, getState) => {
    console.log(`loadUser(${id})`);
    const response = await typicode.get(`/users/${id}`);
    dispatch({ type: "LOAD_USER", payload: response.data });
  };
};
```

but this will result in each user being looked up 10 times. We need to 'memoize' our function calls. Lodash has a `_.memoize()` function for this purpose. But simply memoizing loaduser or the inner async function will not work (there will still be 10 requests per user).

The correct way to memoize an asynchronous action creator with Lodash is (see video 278 (Memoization issues)):

```js
import _ from "lodash";

export const loadUser = (id) => {
  return (dispatch, getState) => _loadUser(id, dispatch);
};

const _loadUser = _.memoize(async (id, dispatch) => {
  console.log(`loadUser(${id})`);
  const response = await typicode.get(`/users/${id}`);
  dispatch({ type: "LOAD_USER", payload: response.data });
});
```

**NB: There is no way to invalidate these cached function calls. If you want to reload a user (for instance because it was updated) you can't.**

### Combining action creators

An alternative solution to prevent duplicate API calls is to combine the `loadPosts` and `loadUser` action creators into one (see `blog` application):

```js
export const loadPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(loadPosts());

    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach((id) => dispatch(loadUser(id)));
  };
};
```

Instead of passing in the userId to the UserHeader component, and make each component responsible for loading its own data, the list component now triggers the loading of all the different users and passes the complete user object on to the child components (UserHeader).

# Section 20: Navigation with React Router

**Application: `streams`**

Features:

- React Router (section 20)
- Authentication (OAuth) (section 21)
- Forms (section 23)
- CRUD (section 24)
- Error handling

### Types of Routers

[ReactRouter](https://reactrouter.com/) comes with 3 types of routers. Which one to use depends on your deployment situation (what web server you use and how you can/want to configure it).

- BrowserRouter
  - path `/page1` => url `https://host:port/page1`
  - configure your web server to route all unknowns to `index.html`.
- HashRouter
  - path `/page1` => url `https://host:port/#/page1`
  - configure your web server to ignore everything behind `#`.
- MemoryRouter
  - path `/page1` => url `https://host:port`
  - URL is constant. Easy to deploy but no way to bookmark parts of your application.

#### Traditional web server vs. React Dev server

A React application is typically a single page application that is served by `/index.html`. Web servers automatically serve `index.html` if you request `/`. But what happens if you request a resource `/page2` that the server doesn't know of (NB: the React Router path `/page2` only has meaning inside the React application, which runs inside the browser)?

- Traditional web server will return HTTP 404 by default.
- React Dev web server is configured to return `/index.html`.

In other words, your bookmarks for specific pages inside your React app won't work, unless you configure your web server so that it routes those paths to `/index.html`.

# Section 21: Authentication with OAuth

[OAuth 2.0](https://oauth.net/2/) allows us to use Google authentication to let users login to our application.

[Scope](https://oauth.net/2/scope/) is a mechanism in OAuth 2.0 to limit an application's access to a user's account. An application can request one or more scopes, this information is then presented to the user in the consent screen, and the access token issued to the application will be limited to the scopes granted.

### Google API

We are going to use the [Google API](https://developers.google.com/identity/protocols/oauth2) to authenticate our users.

In our Streams application we are only interested in the user's email address. So we will choose the ['profile' or 'email' scope](https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in) from the [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes).

You can use OAuth on the server or in the client. In our case we use OAuth for JS Browser Apps.

### Integrating OAuth in React

Setup an OAuth 2.0 project in the [Google API Console](https://console.developers.google.com/).

- [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow) for JavaScript web apps
- [API Reference](https://developers.google.com/identity/sign-in/web/reference)
- [Github](https://github.com/google/google-api-javascript-client)

### Examples

- [Google Authentication](https://github.com/roelfie/react-redux-udemy/commit/3ff22400d13c093ebd71b005b940614e05c9ff8c) (login status stored in component state)
- [Google Authentication with Redux](https://github.com/roelfie/react-redux-udemy/commit/c38adf439c742871b4b0303eab67e6502aa5b143)

# Section 22: Redux Dev Tools

[Redux DevTools Chrome extension](https://github.com/zalmoxisus/redux-devtools-extension)

Save data in the Redux store between page refreshes:

```
https://localhost:3000/?debug_session=SOME_KEY
```

By changing the session id in the URL you can even maintain multiple sessions (i.e. multiple Redux stores) at the same time.

# Section 23: Redux Forms

When using React with Redux you have to write a lot of boiler plate code:

- **mapStateToProps** to use data from the Redux store in your React components
- **Action creators** and **reducers** to store input data from your React components in the Redux store

When it comes to form elements, [Redux Form](https://redux-form.com/) simplifies this by providing standard mappers, action creators and reducers to automatically map data between the Redux store and form components.

See [this commit](https://github.com/roelfie/react-redux-udemy/commit/4cfcbc7581c69c183649a569281c9b38863f049f) for an example.

# Section 24: REST APIs and Navigation

### JSON Server

With [JSON Server](https://www.npmjs.com/package/json-server) ([egghead.io](https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server)) you can run a fake REST API.

```
npm init
npm install json-server
```

Create a `db.json` file containing your test data. Every object in JSON Server must have an `id` property. For instance

```js
  "streams": [
    {
      "id": "1",
      "userId": 103021620253644174463,
      "name": "Alex",
      "email": "alex@company.com"
    },
    {
      "id": "2",
      "userId": 103021620253644174463,
      "name": "Bob",
      "email": "bob@company.co.uk"
    }
  ]
}
```

And add a `start` script to `package.json` that starts the server on port 3001 (and watches `db.json` for changes):

```js
  "scripts": {
    "start": "json-server -p 3001 -w db.json"
  }
```

We will connect our React front-end to JSON Server.

### Programmatic navigation

An example of **intentional navigation** with React Router:

```js
import { Link } from "react-router-dom";

renderMyButton() {
    return (
      <div>
        <Link to='/post/new'>
          Create new Post
        </Link>
      </div>
    );
}
```

Sometimes we would like to navigate the user away only after an action has successfully completed. In that case the action creator is responsible for the navigation.

This is harder than intentional navigation because action creators are not part of any Route. The `BrowserRoute` maintains a History object that tracks the routes visited by the user. Action creators do not have access to this History object.

We solve this by using a `Router` instead of a `BrowserRouter` and providing it with our own history object:

history.js:

```js
import { createBrowserHistory } from "history";
export default createBrowserHistory();
```

App.js:

```js
import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>...</Router>
      </div>
    );
  }
}
export default App;
```

actions/index.js

```js
import history from "../history";

export const myAction = (input) => async (dispatch, getState) => {
  const output = doYourThingWith(input);
  dispatch({ type: DO_THING, payload: output });
  history.push("/");
};
```

### Navigation with path parameters

React Router makes all path parameters available on the `match.params` property:

```js
<Router history={history}>
  <div>
    <Route path='/streams/show/:streamId' exact component={StreamShow} />
  </div>
</Router>
```

```js
class Stream extends React.Component {
  render() {
    const streamId = this.props.match.params.streamId;
    return <div>Stream {streamId}</div>;
  }
}
```

# Section 25: React Portals

A modal window is a screen element users must interact with before they can return to the main application.

Getting a modal to display on top of all the other elements in an HTML page can be a challenge (tweaking positioning and z-index etc.). In particular in a React application where components are deeply nested inside a structure like `body > div#root > Provider > App > Components ..`. The more deeply nested the modal, the harder to get it rendered on top of everything else.

In React we can use a `Portal` to create a modal element. A [portal](https://reactjs.org/docs/portals.html) is a way to render children outside the hierarchy of the parent component (for instance the body).

Below an example of a Modal component styled with Fomantic UI. The `onClick` events enable the user to click outside the modal to close it.

index.html:

```html
<body>
  <div id="root"></div>
  <div id="modal"></div>
</body>
```

Modal.jsx:

```js
import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = ({ header, content }) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.goBack()} className='ui dimmer modals visible active'>
      <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active'>
        <div className='header'>{header}</div>
        <div className='content'>
          <p>{content}</p>
        </div>
        <div className='actions'>
          <button className='ui button negative'>OK</button>
          <button className='ui button'>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
```

# Section 26: Streaming Video

### React Router Switch

By default React Router renders all routes that match the given path. When you request path `/streams/123` then component `StreamShow` will render. But when you request `/streams/new` then both `StreamCreate` and `StreamShow` will be rendered (StreamShow interprets `new` as the stream id):

```js
import { Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:streamId' exact component={StreamEdit} />
          <Route path='/streams/:streamId' exact component={StreamShow} />
        </Router>
      </div>
    );
  }
}
```

By wrapping `Route`s in a `<Switch>` React Router will only render the first component that matches (so the order matters inside a switch):

```js
import { Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit/:streamId' exact component={StreamEdit} />
            <Route path='/streams/:streamId' exact component={StreamShow} />
          </Switch>
        </Router>
      </div>
    );
  }
}
```

# Section 28: Context

**Application: `context`**

[Context](https://reactjs.org/docs/context.html) provides a way to pass data through the component tree without having to pass props down manually at every level.

### Creating the Context

Creating a context with a default value:

```js
import React from "react";
export default React.createContext("english");
```

### Updating the Context

The Context `Provider` can update the Context and provides the Context to its children.

```js
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  render() {
    return (
      <div>
        <i className='us flag' onClick={() => this.setState("english")} />
        <i className='nl flag' onClick={() => this.setState("dutch")} />
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
```

The Provider is actually a React component. The value you provide to the context can be anything (from state, props or a static value) of any type (from literals to complex objects).

You can use multiple Providers for the same Context. Each of the Providers stores its own value on the Context. A component using the Context will get its value from its closest Provider.

Any component can use a Context, even if it is not wrapped in (a) Provider(s). In which case it will always get the default value from the Context.

### Reading the Context

By defining a `static contextType = SomeContext` you get access to `this.context`.

```js
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const label = this.context === "dutch" ? "Naam" : "Name";
    return (
      <div>
        <label>{label}</label>
        <input />
      </div>
    );
  }
}
```

Alternatively you can use a `Consumer`:

```js
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  render() {
    return (
      <button>
        <LanguageContext.Consumer>
          {(value) => (value === "dutch" ? "Verstuur" : "Submit")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
```

With this `Consumer` approach you could access multiple Contexts in your component (either nested or at the same level). With `static contextType` you can always only access one `this.context`.

# Section 29: Context vs. Redux

[The Problem with React's Context API](https://leewarrick.com/blog/the-problem-with-context/)

| Redux                                                                         | Context                                |
| ----------------------------------------------------------------------------- | -------------------------------------- |
| Distributes data to various components                                        | Distributes data to various components |
| Centralized data store                                                        |                                        |
| Provides mechanism for changing data in the store (action creators, reducers) |                                        |

### Replacing Redux with Context

Even though the Context systems seems more limited than Redux, section 29 illustrates how you can replace Redux with Context by encapsulating data and business logic in a single custom Context component.

Contains some interesting patterns!

# Appendix: JavaScript

### Named vs. default exports

A **named export** (`export const doSomething = () => { ... }`) is imported like this:

```js
import { doSomething } from "actions";
```

A **default export** (`default export doSomething;`) is imported like this:

```js
import doSomething from "actions";
```

### Spread syntax & Property accessors

The [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (`...`) can be used to copy an array or object:

```js
> const numbers = [1, 2, 3];
> const copy = [...numbers, 4];
> copy.push(5);
> console.log(numbers);
< [1, 2, 3]
> console.log(copy);
< [1, 2, 3, 4, 5]
```

With the [property accessor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) you can change the value of a property of an object:

```js
> const person = { name: 'John', age: 20 };
> person['name'] = 'Jane';
> console.log(person);
< {name: "Jane", age: 20}
```

Recall that state in Redux is (should be) immutable. Inside a reducer, if your state contains a list of persons, you should never update (or replace) single person in the list stored in the Redux store and return the original state object (no components will be re-rendered if Redux can't detect the state has changed). What you should do instead is create a copy of the list of persons, and apply the changes to that copy. Like this:

```js
const newState = { ...state };
newState[action.payload.id] = action.payload;
return newState;
```

or, shorter:

```js
return { ...state, [action.payload.id]: action.payload };
```

This last statement creates a copy of an object and replaces one of its values.

### Lodash

Create a copy of an object containing only specific properties:

```js
import _ from "lodash";
_.pick(this.props.stream, "propA", "propB");
```
