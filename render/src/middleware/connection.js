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

                newAction = {...action};
                newAction.type = CONFIG_CONNECTION_SAVE_SUCCESS;
                newAction.currentConnection.socket = socket;
                
                result = next( newAction );
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

    return socket;
}

export default buttonMiddleware;