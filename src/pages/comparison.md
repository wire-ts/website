---
---

# Talk is cheap. Show me the code.

Let's compare a subset of the chat app from the official Redux docs, then rewrite it using Wire.

## Redux

```ts
// src/store/chat/types.ts
export interface Message {
  user: string
  message: string
  timestamp: number
}

export interface ChatState {
  messages: Message[]
}

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE
  meta: {
    timestamp: number
  }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction

// src/store/chat/actions.ts
export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}

// src/store/chat/reducers.ts
const initialState: ChatState = {
  messages: []
}

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      }
    default:
      return state
  }
}
```

## Wire

```ts
import { store } from "@wire-ts/wire";

interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export default store({ messages: [] as Message[] }).actions({
  send: (state, msg: Message) => ({
    messages: [...state.messages, msg],
  }),
  delete: (state, timestamp: number) => ({
    messages: state.messages.filter(
      (message) => message.timestamp !== timestamp
    ),
  }),
});
```

## Words

To be frank, Wire is a project borne out of frustration with Redux. <u>Redux has brought a lot of good ideas</u> into the mainstream - centralized data storage, functional flow, immutable reducers, and so on. But practically speaking, working with `redux` and `react-redux` today while trying to use TypeScript is a pain.


Unlike Wire, Redux was not created with type safety in mind from the beginning. Instead, types were later bolted on. So yes, you can theoretically have a fully type-safe data store using Redux. But that comes at a cost.

Quoting Redux's (massive) page on TypeScript:

> While we do officially recommend use of static typing with Redux, use of TypeScript does have tradeoffs in terms of setup, amount of code written, and readability. TypeScript will likely provide a net benefit in larger apps or codebases need to be maintained over time by many people, but may feel like too much overhead in smaller projects.

Many teams use TypeScript despite the added overhead.

But day-to-day, this translates into **productivity losses** as engineers spend lots of time creating stringly typed actions, then action creators, then reducers, all scattered across many files. And that's if they're using static typing at all, because the amount of boilerplate can drive anyone mad.

In contrast, Wire utilizes **advanced type inference** so that you can enjoy the benefits of **static typing with minimum effort**. [Try it out](/docs) and let me know what you think.
