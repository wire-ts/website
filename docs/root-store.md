---
id: root-store
title: Creating a Root Store
---

In `src/state/index.ts`:

```ts
import { rootStore } from "wire";
import todos from "./todos";
// import all your other stores here

const state = rootStore({
  todos,
});

export default state;
```
