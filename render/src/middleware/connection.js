import electron from "electron";
import { CONFIG_CONNECTION_SAVE } from "../../../shared/actionType";
import { MAIN_RENDER_CHANNEL } from "../../../shared/channel";


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
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
                electron.ipcRenderer.send( MAIN_RENDER_CHANNEL, action );
                result = next( action );
            break;
            default:
                result = next( action );
        }
        return result;
    };
};

export default buttonMiddleware;