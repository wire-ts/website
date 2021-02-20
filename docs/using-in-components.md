---
id: in-components
title: Using in Components
---

Here we use the Wire Root Store to connect functional and class components.

### React Hook

The root store has a `useStore()` hook for retrieving state, actions, and thunks.

In this example, we take the entire `todos` store and use destructuring to extract the state and actions. You could of course pull in state and actions from other stores as well.


```ts
import React from "react";
import store from "state";

const App = () => {
  const {
    state: { list: todos },
    actions: { add, load, remove, modify },
  } = store.useStore(root => root.todos);

  // Could also do something like:
  // store.useStore(root => ({
  //   items: root.todos.list,
  //   someAction: root.otherStore.actions.someAction
  // }));

  React.useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      {todos.map((todo, i) => (
        <div key={i} className="item">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) => modify(todo.id, { done: e.target.checked })}
          />
          <input
            defaultValue={todo.task}
            onChange={(e) => modify(todo.id, { task: e.target.value })}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
```

### Class Components

Class components are connected similarly, but using a different function.


```ts
import React from "react";
import store from "state";
import { Props } from "@wire-ts/wire"

const connect = store.connect(root => root.todos);

class App extends React.Component<Props<typeof connect>> {
  render() {
    const {
      state: { list: todos },
      actions: { add, load, remove, modify },
    } = this.props;

    return (
      <div className="App">
        {todos.map((todo, i) => (
          <div key={i} className="item">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(e) => modify(i, { done: e.target.checked })}
            />
            <input
              defaultValue={todo.task}
              onChange={(e) => modify(i, { task: e.target.value })}
            />
          </div>
        ))}
      </div>
    );

  }
}

export default connect(App);
```
