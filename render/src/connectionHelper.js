import ConnectionHelper from "../../shared/helper/connection";

function isPositiveInteger(s)
{
    return /^\+?[1-9][\d]*$/.test(s);
}

/**
 * Checks if a connection config provides valid values i.e. name, host and passwort contains content and port is
 * a positive integer.
 * 
 * @param {Object} currentConnection 
 * @returns {Boolean}
 */
export function validateConnectionConfig( currentConnection, connections, originalConnetionName )
{
    let isValid = true;

    if( !currentConnection.name.length )
    {
        isValid = false;
    }
    else if( ( !originalConnetionName || originalConnetionName !== currentConnection.name ) && !ConnectionHelper.checkForUniqueConnectionName( connections, currentConnection.name ) )
    {
        isValid = false;
    }
    if( !currentConnection.host.length )
    {
        isValid = false;
    }
    if( !currentConnection.password.length )
    {
        isValid = false;
    }

    if( !isPositiveInteger( currentConnection.port ) )
    {
        isValid = false;
    }

    if( currentConnection.password !== currentConnection.passwordRepeat )
    {
        isValid = false;
    }

    return isValid;
}

export function getCurrentConnectionByName( connections, name )
{
    const filtered = connections.filter( connection => connection.name === name );

    return filtered.length === 1 ? filtered[0] : null
}