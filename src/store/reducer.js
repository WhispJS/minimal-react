import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import sessionReducer from "./session/session.reducer";

const rootReducer = history => combineReducers({router: connectRouter(history), session: sessionReducer});

export default rootReducer;
