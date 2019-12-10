import { GET_MACRO_META_DATA } from "../../../shared/actionType";

const macroReducer = ( state = {}, action ) =>
{
    let newState = state;

    switch( action.type )
    {
        case GET_MACRO_META_DATA:
            newState = action.metaData
        break;
    }

    return newState;
};

export default macroReducer;