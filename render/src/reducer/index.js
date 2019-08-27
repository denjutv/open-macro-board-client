import { combineReducers } from "redux";
import connectionReducer from "./connection";
import connectionManagerReducer from "./connectionManager";
import settingsReducer from "./settings";
import buttonsReducer from "./buttons";
import buttonSettingsReducer from "./buttonSettings";

export default combineReducers(
{
    connections: connectionReducer,
    connectionManager: connectionManagerReducer,
    settings: settingsReducer,
    buttons: buttonsReducer,
    buttonSettings: buttonSettingsReducer
});