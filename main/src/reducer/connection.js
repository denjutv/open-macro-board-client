const { CONNECTION_ADD } = require( "../../../shared/actionType" );
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
        case CONNECTION_ADD:
            newState = state.slice();
            newState.push( action.connection );
        break;
    }

    return newState;
};

module.exports = connectionReducer;