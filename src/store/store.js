import {createBrowserHistory} from "history";
import {createStore, compose} from "redux";
import rootReducer from "./reducer";
import rootMiddleware from "./middleware";

export const history = createBrowserHistory();

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer(history), composeEnhancers(rootMiddleware(history)));

export default store;
