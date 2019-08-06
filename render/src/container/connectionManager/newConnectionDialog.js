import { connect } from "react-redux";
import NewConnectionDialog from "../../component/connectionManager/newConnectionDialog";
import { closeNewConnectionDialog, updateConfigConnection, saveCurrentConnection } from "../../action/";
import ConnectionHelper from "../../../../shared/helper/connection";

const mapStateToProps = ( state, ownProps ) =>
({
    connection: state.connectionManager.editConnection,
    connections: state.connections
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    close: () => dispatch( closeNewConnectionDialog() ),
    updateConfigConnection: ( event ) => dispatch( updateConfigConnection(event.target.name, event.target.value) ),
    saveCurrentConnection: ( currentConnection, connections ) => checkConnectionConfig( currentConnection, connections ) ? dispatch( saveCurrentConnection( Object.assign( {}, currentConnection ) ) ) : null
});

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
function checkConnectionConfig( currentConnection, connections )
{
    let isValid = true;

    if( !currentConnection.name.length )
    {
        isValid = false;
    }
    else if( !ConnectionHelper.checkForUniqueConnectionName( connections, currentConnection.name ) )
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

export default connect( mapStateToProps, mapDispatchToProps )( NewConnectionDialog );