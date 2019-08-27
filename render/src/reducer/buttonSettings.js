import { SELECT_BUTTON } from "../action/buttonSettings";

const defaultState = {
    selectedButtonIndex: 0
}

const buttonSettingsReducer = ( state = defaultState, action ) =>
{
    let newState = state;

    switch( action.type )
    {
        case SELECT_BUTTON:
            newState = Object.assign( {}, state, {selectedButtonIndex: action.index} );
        break;
    }

    return newState;
};

export default buttonSettingsReducer;