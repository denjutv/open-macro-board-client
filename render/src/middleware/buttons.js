import electron from "electron";
import { UPDATE_BUTTON } from "../../../shared/actionType";
import { MAIN_RENDER_CHANNEL } from "../../../shared/channel";


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const buttonsMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
        const state = getState();

        switch( action.type )
        {
            case UPDATE_BUTTON:
                if( typeof state.buttons[action.connectionName] !== "undefined" && typeof state.buttons[action.connectionName][action.index] !== "undefined"
                    && typeof state.buttons[action.connectionName][action.index][action.field] !== "undefined" )
                {
                    electron.ipcRenderer.send( MAIN_RENDER_CHANNEL, action );
                    result = next( action );
                }
            break;
            default:
                result = next( action );
        }
        return result;
    };
};

export default buttonsMiddleware;