export const SELECT_BUTTON = "SELECT_BUTTON";

export const selectButton = index =>
{
    return {
        type: SELECT_BUTTON,
        index
    }
}

import { UPDATE_BUTTON } from "../../../shared/actionType";

export const updateButton = ( connectionName, index, field, value ) =>
{
    return {
        type: UPDATE_BUTTON,
        connectionName,
        index,
        field,
        value
    }
}
