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

export const SETTINGS_SET_ACTIVE_TAB = "SETTINGS_SET_ACTIVE_TAB";

export const settingsSetActiveTab = tabIndex =>
{
    return {
        type: SETTINGS_SET_ACTIVE_TAB,
        tabIndex
    }
}