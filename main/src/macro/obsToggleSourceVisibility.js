class ObsToggleSourceVisibilityMacro {
    constructor()
    {

    }

    getMetaData() {
        return {
            name: "obsToggleSourceVisibility",
            label: "obsToggleSourceVisibility",
            dataDefinition: [
                {
                    inputType: "password",
                    name: "password",
                    label: "password",
                    default: ""
                },
                {
                    inputType: "text",
                    name: "scene",
                    label: "scene",
                    default: ""
                },
                {
                    inputType: "text",
                    name: "source",
                    label: "source",
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
            const getSceneItemPropertiesResponse = await obs.send("GetSceneItemProperties", {"scene-name": data.scene, item: data.source });
            
            await obs.send("SetSceneItemProperties", {"scene-name": data.scene, item: data.source, visible: !getSceneItemPropertiesResponse.visible });
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

module.exports = ObsToggleSourceVisibilityMacro;