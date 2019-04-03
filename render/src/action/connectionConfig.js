export const CONFIG_OPEN_NEW_CONNECTION = "CONFIG_OPEN_NEW_CONNECTION";

export const openNewConnection = () =>
{
    return {
        type: CONFIG_OPEN_NEW_CONNECTION
    }
}

export const CONFIG_CONNECTION_UPDATE = "CONFIG_CONNECTION_UPDATE";

export const updateConfigConnection = ( fieldName, value ) =>
{
    return {
        type: CONFIG_CONNECTION_UPDATE,
        fieldName,
        value
    }
}