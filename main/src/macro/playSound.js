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
                    default: ""
                }
            ]
        }
    }
};

module.exports = HttpRequestMacro;