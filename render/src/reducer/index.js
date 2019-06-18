import { combineReducers } from "redux";
import connectionReducer from "./connection";
import connectionConfigReducer from "./connectionConfig";
import settingsReducer from "./settings";

export default combineReducers(
{
    connections: connectionReducer,
    connectionConfig: connectionConfigReducer,
    settings: settingsReducer
});