const openSocket = require( "socket.io-client" );
const { CONFIG_CONNECTION_SAVE, CONNECTION_ADD, CONNECTION_CONNECTED } = require( "../../../../shared/actionType" );
const { MAIN_RENDER_CHANNEL } = require( "../../../../shared/channel" );


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const configMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
        let socket = null;
        let newAction = {};

        switch( action.type )
        {
            case CONFIG_CONNECTION_SAVE:
                newAction.type = CONNECTION_ADD;
                newAction.connection = Object.assign( {}, action.currentConnection );
                newAction.connection.connected = false;

                action.event.sender.send( MAIN_RENDER_CHANNEL, newAction );

                socket = createConnection( action.currentConnection, dispatch, action.event.sender );

                result = next( newAction );
            break;
            case CONNECTION_CONNECTED:
                action.sender.send( MAIN_RENDER_CHANNEL, action );
                result = next( action );
            break;
        
            default:
                result = next( action );
        }
        return result;
    };
};

function createConnection( connectionData, dispatch, sender )
{
    let socket = openSocket( `http://${connectionData.host}:${connectionData.port}` );

    // socket.on( "action", ( action ) =>
    // {
    //     console.log( "action", action );
    //     // dispatch( action );
    // });

    socket.on( "connect", ( ) =>
    {
        console.log( "connected" );
        let action = {};
        action.type = CONNECTION_CONNECTED;
        action.currentConnection = Object.assign( {}, connectionData );
        action.sender = sender;
        dispatch( action );
    });

    // socket.on( "connect_error", ( error ) =>
    // {
    //     console.log( "error", error );
    // });

    return socket;
}

module.exports = configMiddleware;