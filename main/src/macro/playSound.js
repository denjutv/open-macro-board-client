const app = require( "../app" );
const { MAIN_RENDER_CHANNEL } = require( "../../../shared/channel" );
const { playSound } = require( "../action" );

class HttpRequestMacro {
    constructor()
    {

    }

    getMetaData() {
        return {
            name: "playSound",
            label: "playSound",
            dataDefinition: [
                {
                    inputType: "file",
                    name: "soundFile",
                    label: "soundFile",
                    default: "",
                    filters: [
                        { name: 'Sounds', extensions: ['ogg', 'mp3', 'wav', 'mid', 'aif'] }
                    ]
                }
            ]
        }
    }

    async execute( data )
    {
        try {
            app.mainWindow.getSender().send( MAIN_RENDER_CHANNEL, playSound( data.soundFile ) );
  
        }
        catch( error )
        {
            console.error( error );
        }
    }
};

module.exports = HttpRequestMacro;