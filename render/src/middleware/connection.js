import { CONFIG_CONNECTION_SAVE, GET_SETTINGS, CONNECTION_REMOVE } from "../../../shared/actionType";
import { MAIN_RENDER_CHANNEL } from "../../../shared/channel";
import translator from "../translator";

/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const connectionMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;

        switch( action.type )
        {
            case CONFIG_CONNECTION_SAVE:
            case CONNECTION_REMOVE:
                electron.ipcRenderer.send( MAIN_RENDER_CHANNEL, action );
                result = next( action );
            break;
            case GET_SETTINGS:
                translator.changeLanguage( action.settings.language );
                result = next( action );
                break;
            default:
                result = next( action );
        }
        return result;
    };
};

export default connectionMiddleware;