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
                    inputType: "text",
                    name: "soundFile",
                    label: "soundFile",
                    default: ""
                }
            ]
        }
    }
};

module.exports = HttpRequestMacro;