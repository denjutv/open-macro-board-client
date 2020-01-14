export const SELECT_BUTTON = "SELECT_BUTTON";

export const selectButton = (index,connectionName) =>
{
    return {
        type: SELECT_BUTTON,
        index,
        connectionName
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

export const SETTINGS_SET_ACTIVE_TAB = "SETTINGS_SET_ACTIVE_TAB";

export const settingsSetActiveTab = tabIndex =>
{
    return {
        type: SETTINGS_SET_ACTIVE_TAB,
        tabIndex
    }
}

export const UPDATE_MACRO_INPUT = "UPDATE_MACRO_INPUT";

export const updateMacroInput = (connectionName, index, event ) =>
{
    return {
        type: UPDATE_MACRO_INPUT,
        connectionName,
        index,
        event
    }
}

export const RESET_BUTTON = "RESET_BUTTON";

export const resetButton = ( connectionName, index ) =>
{
    return {
        type: RESET_BUTTON,
        connectionName,
        index
    }
}