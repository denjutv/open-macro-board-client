import { CONFIG_OPEN_NEW_CONNECTION, CONFIG_CONNECTION_UPDATE } from "../action/";


const defaultState = {
    currentConnection: null
};

const emptyConnection = {
    name: "",
    host: "",
    password: "",
    passwordRepeat: ""
};

/**
 * Handles all events, that change the buttons.
 * 
 * @param {Object} state Current state passed by the redux store
 * @param {Object} action Current action object
 */
const connectionConfigReducer = ( state = defaultState, action ) =>
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
    }

    return newState;
};

export default connectionConfigReducer;