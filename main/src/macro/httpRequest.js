class HttpRequestMacro {
    constructor()
    {

    }

    getMetaData() {
        return {
            name: "httpRequest",
            label: "httpRequest",
            dataDefinition: [
                {
                    inputType: "text",
                    name: "url",
                    label: "url",
                    default: ""
                },
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
                    condition: "method==get||method==delete||body==arguments"
                },
                {
                    inputType: "textarea",
                    name: "plainBody",
                    label: "httpPlainBody",
                    default: "",
                    condition: "(method==post||method==put)&&body==plain"
                }
            ]
        }
    }
};

module.exports = HttpRequestMacro;