import { UPDATE_BUTTON, SAVE_BUTTON } from "../../../shared/actionType";
import { MAIN_RENDER_CHANNEL } from "../../../shared/channel";
import { UPDATE_MACRO_INPUT, SELECT_BUTTON, saveButton } from "../action/";
import translator from "../translator";

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
            case UPDATE_MACRO_INPUT:
                action.field = "macro";
                action.value = Object.assign( {}, state.buttons[action.connectionName][action.index][action.field] );
                action.value[action.event.target.name] = action.event.target.type === "checkbox" ? action.event.target.checked : action.event.target.value;
                
                action.type = UPDATE_BUTTON;

                delete action.event;
                // no break to continue UPDATE_BUTTON
            case UPDATE_BUTTON:
                if( typeof state.buttons[action.connectionName] !== "undefined" && typeof state.buttons[action.connectionName][action.index] !== "undefined"
                    //&& typeof state.buttons[action.connectionName][action.index][action.field] !== "undefined"
                    )
                {
                    result = next( action );
                }
            break;
            case SAVE_BUTTON:
                electron.ipcRenderer.send( MAIN_RENDER_CHANNEL, action );
                result = next( action );
            break;
            case SELECT_BUTTON:
                if( state.buttons.isButtonChanged )
                {
                    const isConfirmed = confirm( translator.t("buttonSettingsSaveUnchagedDialog") );

                    if( isConfirmed )
                    {
                        const button = state.buttons[action.connectionName][state.buttonSettings.selectedButtonIndex];
                        dispatch( saveButton( action.connectionName, state.buttonSettings.selectedButtonIndex, button ) );
                        result = next( action );
                    }
                }
                else
                {
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