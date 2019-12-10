const SETTINGS_SEND = "SETTINGS_SEND";
const MACRO_META_DATA_SEND = "MACRO_META_DATA_SEND";

module.exports =
{
    SETTINGS_SEND,
    MACRO_META_DATA_SEND,
    
    sendSettings: ( settings ) =>
    {
        return {
            type: SETTINGS_SEND,
            settings
        };
    },

    sendMacroMetaData: ( metaData ) =>
    {
        return {
            type: MACRO_META_DATA_SEND,
            metaData
        };
    }
}
