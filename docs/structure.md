---
id: structure
title: Structuring your App
---

Keeping things simple, we create a folder like `state` to hold our stores.

```
src
│ ...
│ state
│ │ index.ts
│ │ todos.ts
│ │ ...
│ ...
```

Some notes:
- `index.ts` is the root store
    - contains all the stores
    - is used for connecting components
- `todos.ts` and others are individual stores
