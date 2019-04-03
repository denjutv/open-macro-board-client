import { combineReducers } from "redux";
import connectionReducer from "./connection";
import connectionConfigReducer from "./connectionConfig";

export default combineReducers(
{
    connections: connectionReducer,
    connectionConfig: connectionConfigReducer
});