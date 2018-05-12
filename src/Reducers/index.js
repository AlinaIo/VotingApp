import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { TopicsReducer } from "./TopicsReducer";
import { VotingReducer } from "./VotingReducer";
import { LoginReducer } from "./LoginReducer";
const history = createHistory();
const middleware = routerMiddleware(history);
const rootReducer = combineReducers({
  Topics: TopicsReducer,
  Voting: VotingReducer,
  Login: LoginReducer
});
const store = createStore(rootReducer, {}, applyMiddleware(thunk, middleware));

export default store;
