class HttpRequestMacro {
    constructor()
    {

    }

    getMetaData() {
        return {
            name: "httpReqeust",
            label: "httpRequest",
            dataDefinition: [
                {
                    inputType: "radioGroup",
                    name: "method",
                    label: "httpMethod",
                    default: "get",
                    options: [
                        {name:"get", label:"httpMethodGet",value:"get"},
                        {name:"post", label:"httpMethodPost",value:"post"},
                        {name:"put", label:"httpMethodPut",value:"put"},
                        {name:"delete", label:"httpMethodDelete",value:"delete"}
                    ]
                },
                {
                    inputType: "keyValueList",
                    name: "header",
                    label: "httpHeader",
                    default: []
                },
                {
                    inputType: "radioGroup",
                    name: "body",
                    label: "httpBody",
                    default: "arguments",
                    condition: "method==post||method==put",
                    options: [
                        {name:"arguments", label:"httpBodyArguemntList",value:"arguments"},
                        {name:"plain", label:"httpBodyPlain",value:"plain"}
                    ]
                },
                {
                    inputType: "keyValueList",
                    name: "argument",
                    label: "httpArgument",
                    default: [],
                    condition: "body==arguments"
                },
                {
                    inputType: "textarea",
                    name: "plainBody",
                    label: "httpPlainBody",
                    default: "",
                    condition: "body==plain"
                }
            ]
        }
    }
};

module.exports = HttpRequestMacro;