const { SET_SETTINGS } = require( "../../../../shared/actionType" );
const { MAIN_RENDER_CHANNEL } = require( "../../../../shared/channel" );
const app = require( "../../app" );


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const configMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
       

        switch( action.type )
        {
            // intercept CONFIG_CONNECTION_SAVE action and 
            case SET_SETTINGS:
                app.conf.set( action.name, action.value );
            break;
            default:
                result = next( action );
        }
        return result;
    };
};



module.exports = configMiddleware;