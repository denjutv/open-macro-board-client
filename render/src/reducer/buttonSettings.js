import { SELECT_BUTTON, SET_CURRENT_CONNECTION, SETTINGS_SET_ACTIVE_TAB } from "../action/";
import { CONFIG_CONNECTION_SAVE } from "../../../shared/actionType";

const defaultState = {
    selectedButtonIndex: 0,
    activeTabIndex: 0
}

const buttonSettingsReducer = ( state = defaultState, action ) =>
{
    let newState = state;

    switch( action.type )
    {
        case SELECT_BUTTON:
            newState = Object.assign( {}, state, {selectedButtonIndex: action.index} );
        break;
        case SET_CURRENT_CONNECTION: // no break
        case CONFIG_CONNECTION_SAVE:
            newState = Object.assign( {}, state, {selectedButtonIndex: 0} );
        break;
        case SETTINGS_SET_ACTIVE_TAB:
            newState = Object.assign( {}, state, {activeTabIndex: action.tabIndex} );
        break;
    }

    return newState;
};

export default buttonSettingsReducer;