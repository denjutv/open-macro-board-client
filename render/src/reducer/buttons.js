import { CONNECTION_ADD, CONNECTION_REMOVE } from "../../../shared/actionType";
import { UPDATE_BUTTON } from "../action/";


/**
 * Handles all events, that change the buttons.
 * 
 * @param {Object} state Current state passed by the redux store
 * @param {Object} action Current action object
 */
const buttonReducer = ( state = {}, action ) =>
{
    let newState = state;

    switch( action.type )
    {
        case CONNECTION_ADD:
            newState = Object.assign( {}, state );
            newState[action.connection.name] = action.buttons;
            break;
        case CONNECTION_REMOVE:
            if( state[action.connectionName] )
            {
                newState = Object.assign( {}, state );
                delete newState[action.connectionName];
            }
            break;
        case UPDATE_BUTTON:
            if( typeof state[action.connectionName] !== "undefined" && typeof state[action.connectionName][action.index] !== "undefined"
                && typeof state[action.connectionName][action.index][action.field] !== "undefined" )
            {
                newState = {... state};
                newState[action.connectionName] = newState[action.connectionName].slice();
                newState[action.connectionName][action.index] = {... newState[action.connectionName][action.index]};
                newState[action.connectionName][action.index][action.field] = action.value;
            }
            break;
    }

    return newState;
};

export default buttonReducer;