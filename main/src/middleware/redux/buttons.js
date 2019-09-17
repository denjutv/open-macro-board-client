const { UPDATE_BUTTON } = require( "../../../../shared/actionType" );
const { BUTTON_PRESSED, BUTTONS_UPDATE } = require( "../../action/" );
const app = require( "../../app" );


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const connectionMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
        
        let connection = null;

        switch( action.type )
        {
            case BUTTON_PRESSED:
                console.log( action.buttonIndex );
                break;
            case BUTTONS_UPDATE:
                console.log( "send to board" );

                connection = app.connectionManager.getConnectionByName( action.connectionName );
                connection.socket.emit( "action", action );

                break;
            case UPDATE_BUTTON:
                connection = app.connectionManager.getConnectionByName( action.connectionName );
                updateButton(connection, action);
            default:
                result = next( action );
        }
        return result;
    };
};

function updateButton( connection, action )
{
    const buttons = connection.buttons;

    if( typeof buttons[action.index] !== "undefined"
        // && typeof buttons[action.index][action.field] !== "undefined"
        )
    {
        buttons[action.index][action.field] = action.value;
        buttons[action.index].isUsed = true;
        app.connectionManager.saveToConfig();
    }
}

module.exports = connectionMiddleware;