import { GET_SETTINGS } from "../../../shared/actionType";

const settingsReducer = ( state = {}, action ) =>
{
    let newState = state;

    switch( action.type )
    {
        case GET_SETTINGS:
            newState = Object.assign( {}, action.settings ); 
        break;
    }

    return newState;
}

export default settingsReducer;