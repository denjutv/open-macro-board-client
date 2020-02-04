class ObsToggleMuteMacro {
    constructor()
    {

    }

    getMetaData() {
        return {
            name: "obsToggleMute",
            label: "obsToggleMute",
            dataDefinition: [
                {
                    inputType: "password",
                    name: "password",
                    label: "password",
                    default: ""
                }
            ]
        }
    }

    async execute( data )
    {
        const OBSWebSocket = require('obs-websocket-js');
        let obs = null;

        try {
            obs = new OBSWebSocket();
            await obs.connect({ address: "localhost:4444", password: data.password });
            const getSourceListResponse = await obs.send("GetSourcesList");
            
            getSourceListResponse.sources.forEach( async source => {
                if( source.typeId === "wasapi_input_capture" )
                {
                    await obs.send("ToggleMute", {
                        "source": source.name
                    });
                }
            });
        }
        catch( error )
        {
            console.log( error );
        }
        finally
        {
            if( obs && obs._connected )
            {
                obs.disconnect();
            }
        }
    }
};

module.exports = ObsToggleMuteMacro;