const { PLAY_SOUND } = require( "../../../shared/actionType" );
const BUTTON_PRESSED = "BUTTON_PRESSED";

module.exports =
{
    BUTTON_PRESSED,

    playSound: ( soundPath ) => {
        return {
            type: PLAY_SOUND,
            soundPath
        }
    }
}