import { CONFIG_CONNECTION_SAVE_SUCCESS } from "../action/";
/**
 * Handles all events, that change the buttons.
 * 
 * @param {Object} state Current state passed by the redux store
 * @param {Object} action Current action object
 */
const connectionReducer = ( state = [], action ) =>
{
    let newState = state;

    switch( action.type )
    {
        case CONFIG_CONNECTION_SAVE_SUCCESS:
            newState = state.slice();
            newState.push( action.currentConnection );
        break;
    }

    return newState;
};

export default connectionReducer;