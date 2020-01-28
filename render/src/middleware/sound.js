import { PLAY_SOUND } from "../../../shared/actionType";
import {Howl, Howler} from 'howler';
 

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
            case PLAY_SOUND:
                try {
                    // Setup the new Howl.
                    const sound = new Howl({
                        src: [action.soundPath]
                    });
                    
                    // Play the sound.
                    sound.play();
                }
                catch( error )
                {
                    console.log(error);
                }
            break;
            default:
                result = next( action );
        }
        return result;
    };
};

export default connectionMiddleware;