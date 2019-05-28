const { CONFIG_CONNECTION_SAVE, CONNECTION_ADD, CONNECTION_CONNECTED, CONNECTION_DISCONNECTED, CONNECTION_REFUSED } = require( "../../../../shared/actionType" );
const { MAIN_RENDER_CHANNEL } = require( "../../../../shared/channel" );
const { BUTTON_PRESSED, BUTTONS_UPDATE } = require( "../../action/" );
const app = require( "../../app" );


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const configMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
        let newAction = {};
        let connection = null;

        switch( action.type )
        {
            // intercept CONFIG_CONNECTION_SAVE action and 
            case CONFIG_CONNECTION_SAVE:
                if( app.connectionManager.addConnection( action.currentConnection, action.buttons, dispatch, action.event.sender ) )
                {
                    newAction.type = CONNECTION_ADD;
                    newAction.connection = Object.assign( {}, action.currentConnection );
                    newAction.connection.connected = false;
                    
                    action.event.sender.send( MAIN_RENDER_CHANNEL, newAction );

                    result = next( newAction );
                }
                else
                {
                    action.event.sender.send( MAIN_RENDER_CHANNEL, { type: CONNECTION_REFUSED, connection: Object.assign( {}, action.currentConnection ) } );
                }
                
            break;
            // forward connect and disconnect event to render process
            case CONNECTION_CONNECTED:
            case CONNECTION_DISCONNECTED:
                action.sender.send( MAIN_RENDER_CHANNEL, action );
                result = next( action );
            break;
            case BUTTON_PRESSED:
                console.log( action.buttonIndex );
                break;
            case BUTTONS_UPDATE:
                console.log( "send to board" );

                connection = app.connectionManager.getConnectionByName( action.connectionName );
                connection.socket.emit( "action", action );

                break;
            default:
                result = next( action );
        }
        return result;
    };
};



module.exports = configMiddleware;