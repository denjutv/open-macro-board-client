import { CONFIG_CONNECTION_SAVE, CONFIG_CONNECTION_SAVE_SUCCESS } from "../action/";
import openSocket from "socket.io-client";

/**
 * Middleware that listens for REQUEST_BUTTON_SETTINGS event to pass that event via ipc to the main process.
 */
const buttonMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
        let socket = null;
        let newAction = null;

        switch( action.type )
        {
            case CONFIG_CONNECTION_SAVE:
                socket = createConnection( action.currentConnection, dispatch );
                result = null;
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

    socket.on( "action", ( action ) =>
    {
        dispatch( action );
    });

    socket.on( "connect", ( ) =>
    {
        let action = {};
        action.type = CONFIG_CONNECTION_SAVE_SUCCESS;
        action.currentConnection = Object.assign( {}, connectionData );
        action.currentConnection.socket = socket;
        dispatch( action );
    });

    return socket;
}

export default buttonMiddleware;