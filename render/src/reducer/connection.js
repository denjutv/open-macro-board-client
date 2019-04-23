import { CONNECTION_ADD, CONNECTION_CONNECTED } from "../../../shared/actionType";

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
    let connection = null;

    switch( action.type )
    {
        case CONNECTION_ADD:
            newState = state.slice();
            newState.push( action.connection );
        break;
        case CONNECTION_CONNECTED:
        console.log(456, action);
            index = getConnectionIndexByName( state, action.currentConnection.name );
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

function getConnectionIndexByName( connections, name )
{
    let connectionIndex = -1;
    const connectionLength = connections.length;

    for( let index=0; index < connectionLength; ++index )
    {
        let con = connections[index];

        if( con.name === name )
        {
            connectionIndex = index;
            break;
        }
    }
    
    return connectionIndex;
}

export default connectionReducer;