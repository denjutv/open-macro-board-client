const { SET_SETTINGS } = require( "../../../../shared/actionType" );
const { MAIN_RENDER_CHANNEL } = require( "../../../../shared/channel" );
const app = require( "../../app" );


/**
 * Middleware that listens for SET_SETTINGS event to store values to the config.
 */
const configMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
       

        switch( action.type )
        {
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