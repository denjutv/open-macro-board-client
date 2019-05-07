const { CONNECTION_ADD, CONNECTION_CONNECTED } = require( "../../../shared/actionType" );
const ConnectionHelper = require( "../../../shared/helper/connection" );

/**
 * Handles all events, that change the buttons.
 * 
 * @param {Object} state Current state passed by the redux store
 * @param {Object} action Current action object
 */
const connectionReducer = ( state = [], action ) =>
{
    let newState = state;
    let index = 0;

    switch( action.type )
    {
        case CONNECTION_ADD:
            newState = state.slice();
            newState.push( action.connection );
        break;
        case CONNECTION_CONNECTED:
            index = ConnectionHelper.getConnectionIndexByName( state, action.currentConnection.name );
            if( index >= 0 )
            {
                newState = state.slice();
                connection = {...newState[ index ]};
                connection.connected = true;

                newState[index] = connection;
            }
        break;
    }

    return newState;
};

module.exports = connectionReducer;