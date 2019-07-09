import { CONFIG_CONNECTION_SAVE } from "../../../shared/actionType";

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

export const saveCurrentConnection = ( currentConnection ) =>
{
    return {
        type: CONFIG_CONNECTION_SAVE,
        currentConnection
    }
}

// open and close connection list

export const CONNECTION_MANAGER_OPEN = "CONNECTION_MANAGER_OPEN";

export const openConnectionManager = ( ) =>
{
    return {
        type: CONNECTION_MANAGER_OPEN
    }
}

export const CONNECTION_MANAGER_CLOSE = "CONNECTION_MANAGER_CLOSE";

export const closeConnectionManager = ( ) =>
{
    return {
        type: CONNECTION_MANAGER_CLOSE
    }
}

export const SET_ACTIVE_CONNECTION = "SET_ACTIVE_CONNECTION";

export const setActiveConnection = connectionName =>
{
    return {
        type: SET_ACTIVE_CONNECTION,
        connectionName
    }
}