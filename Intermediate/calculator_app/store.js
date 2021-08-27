// this is basically where we connect all of our reducers and middleware stuff like that
// we're going to have many reducers and each reducer is going to handle a certain functionality
import { createStore, applyMiddleware, combineReducers } from "redux"
import { useMemo } from "react"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

// import of reducers from files
import { currentThemeReducer } from "./reducers/currentThemeReducer"
import { memoryReducer } from "./reducers/memoryReducer"

// combining reducers

const reducer = combineReducers({
  //  all the reducers will go over here
  //mentioning productList here is important because this is what's going to show as this piece of state, so it'll be productList part of state
  currentTheme: currentThemeReducer,
  memory: memoryReducer,
})

let store

const initialState = {
  currentTheme: {
    id: "1",
  },
  memory: {
    currentValue: 0,
    operationalValue: "",
  },
}

const middleware = [thunk]

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
