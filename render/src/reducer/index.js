import { combineReducers } from "redux";
import connectionReducer from "./connection";
import connectionManagerReducer from "./connectionManager";
import settingsReducer from "./settings";

export default combineReducers(
{
    connections: connectionReducer,
    connectionManager: connectionManagerReducer,
    settings: settingsReducer
});