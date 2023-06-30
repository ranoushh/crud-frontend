//contain logger and middleware (thunk)

// Import the necessary functions to create and configure the Redux store
import { applyMiddleware, createStore } from "redux";

import axios from "axios";

// Import the createLogger function from redux-logger, which will create a middleware that logs Redux actions to the console
import { createLogger } from "redux-logger";

// Import thunkMiddleware from redux-thunk, which lets us dispatch thunk async actions
import thunkMiddleware from "redux-thunk";

// Import a utility function that allows us to use the Redux DevTools browser extension
import { composeWithDevTools } from "redux-devtools-extension";

// Import the root reducer which will be used to update the Redux store's state
import allReducers from "./allreducers";

// Create a logger middleware with collapsed logs
const logger = createLogger({ collapsed: true });

// Apply the middleware to our store, also use Redux DevTools extension if available
const middleware = composeWithDevTools(
//   // Thunk middleware is being configured here to include axios in every dispatched function
//   // This allows for easy access to axios within our thunks for making API requests
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), logger)
);

// // Create the Redux store with our combined reducer and the middleware
const store = createStore(allReducers, middleware);

// Export the store as the default export
// This allows the store to be provided to the React app in a single line, giving the React components access to the Redux store
export default store;