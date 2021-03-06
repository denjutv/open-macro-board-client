import { CONFIG_CONNECTION_SAVE, CONNECTION_REMOVE } from "../../../shared/actionType";

export const CONFIG_START_NEW_CONNECTION = "CONFIG_START_NEW_CONNECTION";

export const startNewConnection = () =>
{
    return {
        type: CONFIG_START_NEW_CONNECTION
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

export const saveCurrentConnection = ( currentConnection, isNewConnection = false ) =>
{
    return {
        type: CONFIG_CONNECTION_SAVE,
        currentConnection,
        isNewConnection
    }
}

export const updateCurrentConnection = ( currentConnection, originalConnectionName ) =>
{
    return {
        type: CONFIG_CONNECTION_SAVE,
        currentConnection,
        isNewConnection: false,
        originalConnectionName
    }
}

export const removeConnection = ( connectionName ) =>
{
    return {
        type: CONNECTION_REMOVE,
        connectionName
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

export const SET_CURRENT_CONNECTION = "SET_CURRENT_CONNECTION";

export const setCurrentConnection = connectionName =>
{
    return {
        type: SET_CURRENT_CONNECTION,
        connectionName
    }
}

// open and close new connection dialog

export const CONNECTION_CONFIG_OPEN_NEW_DIALOG = "CONNECTION_CONFIG_OPEN_NEW_DIALOG";

export const openNewConnectionDialog = ( ) =>
{
    return {
        type: CONNECTION_CONFIG_OPEN_NEW_DIALOG
    }
}

export const CONNECTION_CONFIG_CLOSE_NEW_DIALOG = "CONNECTION_CONFIG_CLOSE_NEW_DIALOG";

export const closeNewConnectionDialog = ( ) =>
{
    return {
        type: CONNECTION_CONFIG_CLOSE_NEW_DIALOG
    }
}

// open and close edit connection dialog

export const CONNECTION_CONFIG_OPEN_EDIT_DIALOG = "CONNECTION_CONFIG_OPEN_EDIT_DIALOG";

export const openEditConnectionDialog = connection =>
{
    return {
        type: CONNECTION_CONFIG_OPEN_EDIT_DIALOG,
        connection
    }
}

export const CONNECTION_CONFIG_CLOSE_EDIT_DIALOG = "CONNECTION_CONFIG_CLOSE_EDIT_DIALOG";

export const closeEditConnectionDialog = () =>
{
    return {
        type: CONNECTION_CONFIG_CLOSE_EDIT_DIALOG
    }
}