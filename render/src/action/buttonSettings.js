export const SELECT_BUTTON = "SELECT_BUTTON";

export const selectButton = index =>
{
    return {
        type: SELECT_BUTTON,
        index
    }
}

export const UPDATE_BUTTON = "UPDATE_BUTTON";

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
