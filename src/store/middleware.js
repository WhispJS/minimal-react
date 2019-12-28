import {applyMiddleware} from "redux";
import {routerMiddleware} from "connected-react-router";
import sessionMiddleware from "./session/session.middleware";

const rootMiddleware = history => applyMiddleware(routerMiddleware(history), sessionMiddleware);

export default rootMiddleware;
