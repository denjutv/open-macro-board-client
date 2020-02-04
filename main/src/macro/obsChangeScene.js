class ObsChangeSceneMacro {
    constructor()
    {

    }

    getMetaData() {
        return {
            name: "obsChangeScene",
            label: "obsChangeScene",
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
            const getScenesResponse = await obs.send("GetSceneList");
            
            if( this.shouldUpdate( getScenesResponse, data.scene ) )
            {
                await obs.send("SetCurrentScene", {
                    "scene-name": data.scene
                });
            }
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

    shouldUpdate( getScenesResponse, newSceneName )
    {
        let isValid = false;

        getScenesResponse.scenes.forEach( scene => {
            if( scene.name === newSceneName )
            {
                isValid = true;
            }
        });

        return isValid && newSceneName !== getScenesResponse.currentScene;
    }
};

module.exports = ObsChangeSceneMacro;