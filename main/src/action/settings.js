const SETTINGS_SEND = "SETTINGS_SEND";

module.exports =
{
    SETTINGS_SEND,
    
    sendSettings: ( settings ) =>
    {
        return {
            type: SETTINGS_SEND,
            settings
        };
    }
}