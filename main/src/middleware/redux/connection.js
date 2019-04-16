const openSocket = require( "socket.io-client" );
const { CONFIG_CONNECTION_SAVE, CONNECTION_ADD } = require( "../../../../shared/actionType" );
const { MAIN_RENDER_CHANNEL } = require( "../../../../shared/channel" );


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const configMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
        let newAction = {};

        switch( action.type )
        {
            case CONFIG_CONNECTION_SAVE:
                console.log( action );

                newAction.type = CONNECTION_ADD;
                newAction.connection = Object.assign( {}, action.currentConnection );

                action.event.sender.send( MAIN_RENDER_CHANNEL, newAction );

                result = next( newAction );
                // createConnection( action, dispatch );
            break;
        
            default:
                result = next( action );
        }
        return result;
    };
};

function createConnection( connectionData, dispatch )
{
    let socket = openSocket( `http://${connectionData.host}:${connectionData.port}` );
    let action = {};

    dispatch( action );

    socket.on( "action", ( action ) =>
    {
        dispatch( action );
    });

    socket.on( "connect", ( ) =>
    {
        action = {};
        action.type = CONFIG_CONNECTION_SAVE_SUCCESS;
        action.currentConnection = Object.assign( {}, connectionData );
        action.currentConnection.socket = socket;
        dispatch( action );
    });

    return socket;
}

module.exports = configMiddleware;