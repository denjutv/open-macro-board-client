import { CONNECTION_ADD, CONNECTION_REMOVE, UPDATE_BUTTON } from "../../../shared/actionType";


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
            newState = {... state};
            newState[action.connectionName] = newState[action.connectionName].slice();
            newState[action.connectionName][action.index] = {... newState[action.connectionName][action.index]};
            newState[action.connectionName][action.index][action.field] = action.value;
            newState[action.connectionName][action.index].isUsed = true;
            break;
    }

    return newState;
};

export default buttonReducer;