const { CONNECTION_ADD, CONNECTION_CONNECTED } = require( "../../../shared/actionType" );

const BUTTONS_UPDATE = "BUTTONS_UPDATE";

module.exports =
{
    CONNECTION_ADD,
    
    addConnection: ( connection ) =>
    {
        return {
            type: CONNECTION_ADD,
            connection
        };
    },

    connected: ( connectionData, sender ) =>
    {
        return {
            type: CONNECTION_CONNECTED,
            currentConnection: Object.assign( {}, connectionData ),
            sender: sender
        };
    },

    BUTTONS_UPDATE,

    updateButtons: ( connectionName, buttons ) =>
    {
        return {
            type: BUTTONS_UPDATE,
            connectionName,
            buttons
        };
    }
};