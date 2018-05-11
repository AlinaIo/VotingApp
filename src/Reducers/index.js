import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const middleware = routerMiddleware(history);
const rootReducer = combineReducers({});
const store = createStore(rootReducer, {}, applyMiddleware(thunk, middleware));

export default store;
