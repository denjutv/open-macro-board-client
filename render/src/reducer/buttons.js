import { CONNECTION_ADD } from "../../../shared/actionType";


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
            console.log(newState);
            break;
    }

    return newState;
};

export default buttonReducer;