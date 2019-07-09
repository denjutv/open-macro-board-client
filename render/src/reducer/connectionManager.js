import { CONFIG_OPEN_NEW_CONNECTION, CONFIG_CONNECTION_UPDATE, CONNECTION_MANAGER_OPEN,
    CONNECTION_MANAGER_CLOSE, SET_ACTIVE_CONNECTION } from "../action/";
import { CONFIG_CONNECTION_SAVE } from "../../../shared/actionType";


const defaultState = {
    currentConnection: null,
    isOpen: false,
    activeConnectionName: ""
};

const emptyConnection = {
    name: "",
    host: "",
    port: "3000",
    password: "",
    passwordRepeat: ""
};

/**
 * Handles all events, that change the buttons.
 * 
 * @param {Object} state Current state passed by the redux store
 * @param {Object} action Current action object
 */
const connectionManagerReducer = ( state = defaultState, action ) =>
{
    let newState = state;

    switch( action.type )
    {
        case CONFIG_OPEN_NEW_CONNECTION:
            newState = {...state, currentConnection: emptyConnection };
        break;
        case CONFIG_CONNECTION_UPDATE:
            newState = {...state, currentConnection: {...state.currentConnection } };
            newState.currentConnection[action.fieldName] = action.value;
        break;
        case CONFIG_CONNECTION_SAVE:
            newState = {...state, currentConnection: null };
        break;
        case CONNECTION_MANAGER_OPEN:
            newState = {...state, isOpen: true };
        break;
        case CONNECTION_MANAGER_CLOSE:
            newState = {...state, isOpen: false };
        break;
        case SET_ACTIVE_CONNECTION:
            newState = {...state, activeConnectionName: action.connectionName };
        break;
    }

    return newState;
};

export default connectionManagerReducer;