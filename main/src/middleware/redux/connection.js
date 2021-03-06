const { CONFIG_CONNECTION_SAVE, CONNECTION_ADD, CONNECTION_UPDATE, CONNECTION_CONNECTED,
    CONNECTION_DISCONNECTED, CONNECTION_REFUSED, CONNECTION_UPDATE_FAILED,
    GET_SETTINGS, CONNECTION_REMOVE, GET_MACRO_META_DATA } = require( "../../../../shared/actionType" );
const { MAIN_RENDER_CHANNEL } = require( "../../../../shared/channel" );
const { SETTINGS_SEND, MACRO_META_DATA_SEND } = require( "../../action/" );
const app = require( "../../app" );


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const connectionMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;

        switch( action.type )
        {
            // intercept CONFIG_CONNECTION_SAVE action and 
            case CONFIG_CONNECTION_SAVE:
                if( action.isNewConnection )
                {
                    result = addConnection(action, dispatch, next);
                }
                else
                {
                    result = updateConnection(action, dispatch, next)
                }
                
            break;
            // forward connect and disconnect event to render process
            case CONNECTION_CONNECTED:
            case CONNECTION_DISCONNECTED:
                action.sender.send( MAIN_RENDER_CHANNEL, action );
                result = next( action );
            break;
            case CONNECTION_REMOVE:
                app.connectionManager.removeConnection( action.connectionName );
                result = next( action );
                break;
            case SETTINGS_SEND:
                app.mainWindow.getSender().send( MAIN_RENDER_CHANNEL, Object.assign( action, {type:GET_SETTINGS} ) );
                break;
            case MACRO_META_DATA_SEND:
                app.mainWindow.getSender().send( MAIN_RENDER_CHANNEL, Object.assign( action, {type:GET_MACRO_META_DATA} ) );
                break;
            default:
                result = next( action );
        }
        return result;
    };
};

function addConnection( action, dispatch, next )
{
    const  newAction = {};
    let result = null;

    if( action.refresh || app.connectionManager.addConnection( action.currentConnection, action.buttons, dispatch, action.event.sender ) )
    {
        newAction.type = CONNECTION_ADD;
        newAction.connection = Object.assign( {}, action.currentConnection );
        newAction.buttons = app.connectionManager.getConnectionByName( action.currentConnection.name ).buttons;
        newAction.connection.connected = false;
        
        action.event.sender.send( MAIN_RENDER_CHANNEL, newAction );

        result = next( newAction );
    }
    else
    {
        action.event.sender.send( MAIN_RENDER_CHANNEL, { type: CONNECTION_REFUSED, connection: Object.assign( {}, action.currentConnection ) } );
    }

    return result;
}

function updateConnection( action, dispatch, next )
{
    const  newAction = {};
    let result = null;

    if( app.connectionManager.updateConnection( action.currentConnection, action.buttons, dispatch, action.event.sender, action.originalConnectionName ) )
    {
        newAction.type = CONNECTION_UPDATE;
        newAction.connection = Object.assign( {}, action.currentConnection );
        newAction.connection.connected = false;
        newAction.originalConnectionName = action.originalConnectionName;
        
        action.event.sender.send( MAIN_RENDER_CHANNEL, newAction );

        result = next( newAction );
    }
    else
    {
        action.event.sender.send( MAIN_RENDER_CHANNEL, { type: CONNECTION_UPDATE_FAILED, connection: Object.assign( {}, action.currentConnection ) } );
    }

    return result;
}

module.exports = connectionMiddleware;