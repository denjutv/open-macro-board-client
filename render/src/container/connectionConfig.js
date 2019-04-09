import { connect } from "react-redux";
import ConnectionConfig from "../component/connectionConfig";
import { updateConfigConnection, saveCurrentConnection } from "../action/";

const mapStateToProps = ( state, ownProps ) =>
({
    currentConnection: state.connectionConfig.currentConnection
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    updateConnection: event => dispatch( updateConfigConnection( event.target.name, event.target.value ) ),
    saveCurrentConnection: currentConnection => checkConnectionConfig( currentConnection ) ? dispatch( saveCurrentConnection( Object.assign( {}, currentConnection ) ) ) : null
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
function checkConnectionConfig( currentConnection )
{
    let isValid = true;

    if( !currentConnection.name.length )
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

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionConfig );