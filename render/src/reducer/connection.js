import { CONNECTION_ADD, CONNECTION_CONNECTED, CONNECTION_DISCONNECTED } from "../../../shared/actionType";
import ConnectionHelper from "../../../shared/helper/connection";
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
        case CONNECTION_CONNECTED:
        case CONNECTION_DISCONNECTED:
            newState = setConnectionState( state, action.currentConnection.name, action.type === CONNECTION_CONNECTED ) || state;
        break;
    }

    return newState;
};

function setConnectionState( state, connectionName, connectionState )
{
    let index = ConnectionHelper.getConnectionIndexByName( state, connectionName );
    let newState = null;
    let connection = null;

    if( index >= 0 )
    {
        newState = state.slice();
        connection = {...newState[ index ]};
        connection.connected = connectionState;

        newState[index] = connection;
    }

    return newState;
}

export default connectionReducer;