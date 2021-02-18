---
id: quick-store
title: Creating a Store
---

Here we will create a store for a hypothetical todo-list application.

### Initial State

Let's start by defining our types. To get started with Wire, we will need to pass an initial state.

```ts
import { store } from "@wire-ts/wire";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

const initialState: { list: Todo[] }= { list: [] }

export default store(initialState)
```

### Actions

Now that we have our state type, we can start defining some actions. Actions are functions that take in the **current** state, some arguments (optional), and output a **new** state.

To enforce good habits, Wire passes in the current state as an **immutable** object. If you try to mutate the state, you will get a type error.

Actions can be asynchronous as well for the common cases of getting and posting data using an API.

```ts
import { store } from "@wire-ts/wire";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

export default store({ list: [] as Todo[] }).actions({
  add: (state, todo: Todo) => ({
    ...state,
    list: [...state.list, todo],
  }),
  remove: async (state, id: number) => {
    await someApiCall();

    return {
      ...state,
      list: state.list.filter((todo) => todo.id !== id),
    }
  },
});
```

And that's it. The data store is now ready to be included in a Root Store. Optionally, you may define thunks (see below).


### Thunks

Thunks are higher-level functions that can call other actions. Thunks do not return a new state and can only change the state via actions.

Example:

```ts
import { store } from "@wire-ts/wire";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

const todos = store({ list: [] as Todo[] }).actions({
  add: (state, todo: Todo) => ({
    ...state,
    list: [...state.list, todo],
  }),
  remove: async (state, id: number) => {
    await someApiCall();

    return {
      ...state,
      list: state.list.filter((todo) => todo.id !== id),
    }
  },
}).thunks({
  sampleTodos: async (someArg: boolean) => {
    console.log(store.state);
    todos.actions.add({ ... });
    await store.actions.remove(123);
  }
});

export default todos;
```
