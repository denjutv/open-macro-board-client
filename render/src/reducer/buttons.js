import { SELECT_BUTTON, RESET_BUTTON } from "../action/";
import { CONNECTION_ADD, CONNECTION_REMOVE, UPDATE_BUTTON, SAVE_BUTTON } from "../../../shared/actionType";
import equal from "fast-deep-equal";

export const CURRENT_BUTTON_COPY = "CURRENT_BUTTON_COPY";

/**
 * Handles all events, that change the buttons.
 * 
 * @param {Object} state Current state passed by the redux store
 * @param {Object} action Current action object
 */
const buttonReducer = ( state = {CURRENT_BUTTON_COPY: {}, isButtonChanged: false}, action ) =>
{
    let newState = state;
    console.log(action);
    switch( action.type )
    {
        case CONNECTION_ADD:
            newState = Object.assign( {}, state );
            newState[action.connection.name] = action.buttons;

            newState[CURRENT_BUTTON_COPY] = Object.assign( {}, state[CURRENT_BUTTON_COPY] );
            newState[CURRENT_BUTTON_COPY][action.connection.name] = Object.assign({}, action.buttons[0] );

            break;
        case SELECT_BUTTON:
        case SAVE_BUTTON:

            newState = Object.assign( {}, state );
            newState[CURRENT_BUTTON_COPY] = Object.assign( {}, state[CURRENT_BUTTON_COPY] );
            newState[CURRENT_BUTTON_COPY][action.connectionName] = Object.assign({}, newState[action.connectionName][action.index] );

            if( action.type === SAVE_BUTTON )
            {
                newState.isButtonChanged = false;
            }
            break;
        case RESET_BUTTON:
            newState = Object.assign( {}, state );
            newState[action.connectionName] = state[action.connectionName].slice();
            newState[action.connectionName][action.index] = Object.assign({}, state[CURRENT_BUTTON_COPY][action.connectionName]);
            newState.isButtonChanged = false;
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

            newState.isButtonChanged = !equal( newState[action.connectionName][action.index], state[CURRENT_BUTTON_COPY][action.connectionName] )
            break;
    }
console.log(newState);
    return newState;
};

export default buttonReducer;