const { CONFIG_CONNECTION_SAVE, CONNECTION_ADD, CONNECTION_CONNECTED, CONNECTION_REFUSED } = require( "../../../../shared/actionType" );
const { MAIN_RENDER_CHANNEL } = require( "../../../../shared/channel" );
const connectionManager = require( "../../connectionManager" );


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const configMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
        let newAction = {};

        switch( action.type )
        {
            // intercept CONFIG_CONNECTION_SAVE action and 
            case CONFIG_CONNECTION_SAVE:
                if( connectionManager.addConnection( action.currentConnection, dispatch, action.event.sender ) )
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
            case CONNECTION_CONNECTED:
                action.sender.send( MAIN_RENDER_CHANNEL, action );
                result = next( action );
            break;
        
            default:
                result = next( action );
        }
        return result;
    };
};



module.exports = configMiddleware;