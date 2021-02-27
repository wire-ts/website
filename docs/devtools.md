---
id: devtools
title: Debugging & DevTools
slug: /devtools
---

First, install the extension from the chrome webstore: [https://chrome.google.com/webstore/detail/wire/jdngjbjpnclpehccomgeeabplgebiilb](https://chrome.google.com/webstore/detail/wire/jdngjbjpnclpehccomgeeabplgebiilb).

Then, in your root store in `src/state/index.ts`:

```ts
const store = rootStore({
  todos,
});

store.enableDebugging();

export default store;
```

Finally, open your app and open the Chrome DevTools. Wire will be added at the end as a tab.
