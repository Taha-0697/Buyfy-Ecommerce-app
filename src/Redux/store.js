import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    //other store enchancers if any
  )
);

export default store;
