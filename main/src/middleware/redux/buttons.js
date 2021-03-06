const { UPDATE_BUTTON, SAVE_BUTTON } = require( "../../../../shared/actionType" );
const { BUTTON_PRESSED, BUTTONS_UPDATE, updateButtons } = require( "../../action/" );
const app = require( "../../app" );


/**
 * Middleware that listens for CONFIG_CONNECTION_SAVE event to pass that event via ipc to the main process.
 */
const connectionMiddleware = ( { getState, dispatch } ) =>
{
    return ( next ) => (action) => 
    {
        let result = null;
        
        let connection = null;

        switch( action.type )
        {
            case BUTTON_PRESSED:
                // console.log(action);
                connection = app.connectionManager.getConnectionByName( action.connectionName );
                handleMacro( connection, action.buttonIndex, getState() );
                break;
            case BUTTONS_UPDATE:
                console.log( "send to board" );

                connection = app.connectionManager.getConnectionByName( action.connectionName );
                connection.socket.emit( "action", action );

                break;
            case UPDATE_BUTTON:
                connection = app.connectionManager.getConnectionByName( action.connectionName );
                updateButton(connection, action);
                
                result = next( action );
                break;

            case SAVE_BUTTON:
                connection = app.connectionManager.getConnectionByName( action.connectionName );
                saveButton(connection, action);

                // send button data to board
                dispatch(updateButtons( action.connectionName, connection.buttons ) );

                result = next( action );
                break;
            default:
                result = next( action );
        }
        return result;
    };
};

function updateButton( connection, action )
{
    const buttons = connection.buttons;

    if( typeof buttons[action.index] !== "undefined"
        // && typeof buttons[action.index][action.field] !== "undefined"
        )
    {
        if( action.field === "iconPath" )
        {
            sendIconToBoard( connection.connectionData, action.index, action.value );
        }
        buttons[action.index][action.field] = action.value;
        buttons[action.index].isUsed = true;
        app.connectionManager.saveToConfig();
    }
}

function saveButton( connection, action )
{
    const buttons = connection.buttons;

    if( typeof buttons[action.index] !== "undefined"
        // && typeof buttons[action.index][action.field] !== "undefined"
        )
    {
        if( buttons[action.index].iconPath !== action.button.iconPath )
        {
            sendIconToBoard( connection.connectionData, action.index, action.button.iconPath );
        }
        buttons[action.index] = action.button;
        buttons[action.index].isUsed = true;
        app.connectionManager.saveToConfig();
    }
}

async function sendIconToBoard( connectionData, buttonIndex, pathToIcon )
{
    
    const axios = require( "axios" );
    const fs = require( "fs" );

    const iconStream = fs.createReadStream(pathToIcon);

    try
    {
        const FormData = require('form-data');
        const formData = new FormData();
        formData.append("icon", iconStream, {
            filename: pathToIcon
        });
        const response = await axios.post(`http://${connectionData.host}:${connectionData.port}/icon/upload/${buttonIndex}`, formData, {
            headers: formData.getHeaders()
        });
    
        console.log( response );
    }
    catch( error )
    {
        if( error.errno === 'ECONNREFUSED' )
        {
            console.log( "cant connect to board" );
            // todo
        }
        else if( error.response && error.response.status === 404 )
        {
            console.log( "404" );
            // todo
        }
        else
        {
            console.log( error );
        }
    }
}

function handleMacro( connection, buttonIndex, state )
{
    const buttons = connection.buttons;

    if( typeof buttons[buttonIndex] !== "undefined"
        // && typeof buttons[buttonIndex][action.field] !== "undefined"
        )
    {
        const button = buttons[buttonIndex];

        if( app.macroMap.hasOwnProperty( button.macroType ) )
        {
            macro = app.macroMap[button.macroType];
            macro.execute( button.macro );
        }
    }
}

module.exports = connectionMiddleware;