import electron from "electron";
import { SET_CURRENT_CONNECTION } from "../action/";
import { CONFIG_CONNECTION_SAVE, SET_SETTINGS } from "../../../shared/actionType";
import { MAIN_RENDER_CHANNEL } from "../../../shared/channel";


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const connectionManagerMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;

        switch( action.type )
        {
            // if a new connection is saved, set it as current connection
            case CONFIG_CONNECTION_SAVE:

                if( action.isNewConnection )
                {
                    const setConfigAction = {type: SET_SETTINGS, name: "currentConnectionName", value: action.currentConnection.name };
                    electron.ipcRenderer.send( MAIN_RENDER_CHANNEL, setConfigAction );
                }
                result = next( action );
            break;
            case SET_CURRENT_CONNECTION:
                electron.ipcRenderer.send( MAIN_RENDER_CHANNEL, {type: SET_SETTINGS, name: "currentConnectionName", value: action.connectionName } );
                result = next( action );
                break;
            default:
                result = next( action );
        }
        return result;
    };
};

export default connectionManagerMiddleware;