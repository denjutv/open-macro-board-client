import { CONFIG_START_NEW_CONNECTION, CONFIG_CONNECTION_UPDATE, CONNECTION_MANAGER_OPEN,
    CONNECTION_MANAGER_CLOSE, SET_CURRENT_CONNECTION, CONNECTION_CONFIG_OPEN_NEW_DIALOG,
    CONNECTION_CONFIG_CLOSE_NEW_DIALOG,
    CONNECTION_CONFIG_OPEN_EDIT_DIALOG,
    CONNECTION_CONFIG_CLOSE_EDIT_DIALOG } from "../action/";
import { CONFIG_CONNECTION_SAVE, GET_SETTINGS } from "../../../shared/actionType";


const defaultState = {
    currentConnectionName: null,
    editConnection: null,
    originalEditConnectionName: null,
    isOpen: false,
    isNewConnectionOpen: false,
    isEditConnectionOpen: false
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
        case CONFIG_START_NEW_CONNECTION:
            newState = {...state, editConnection: emptyConnection };
        break;
        case CONFIG_CONNECTION_UPDATE:
            newState = {...state, editConnection: {...state.editConnection } };
            newState.editConnection[action.fieldName] = action.value;
        break;
        case CONFIG_CONNECTION_SAVE:
            newState = {...state, editConnection: null, isNewConnectionOpen: false, isEditConnectionOpen: false, currentConnectionName: state.editConnection.name };
        break;
        case CONNECTION_MANAGER_OPEN:
            newState = {...state, isOpen: true };
        break;
        case CONNECTION_MANAGER_CLOSE:
            newState = {...state, isOpen: false };
        break;
        case SET_CURRENT_CONNECTION:
            newState = {...state, currentConnectionName: action.connectionName };
        break;

        case GET_SETTINGS:
            if( action.settings && action.settings.currentConnectionName )
            {
                newState = {...state, currentConnectionName: action.settings.currentConnectionName };
            }
            break;

        case CONNECTION_CONFIG_OPEN_NEW_DIALOG:
            newState = Object.assign( {}, state, {isNewConnectionOpen: true} );
            break;
        case CONNECTION_CONFIG_CLOSE_NEW_DIALOG:
            newState = Object.assign( {}, state, {isNewConnectionOpen: false} );
            break;
        case CONNECTION_CONFIG_OPEN_EDIT_DIALOG:
            newState = Object.assign( {}, state, {isEditConnectionOpen: true, editConnection: action.connection, originalEditConnectionName: action.connection.name} );
            break;
        case CONNECTION_CONFIG_CLOSE_EDIT_DIALOG:
            newState = Object.assign( {}, state, {isEditConnectionOpen: false} );
            break;
    }

    return newState;
};

export default connectionManagerReducer;