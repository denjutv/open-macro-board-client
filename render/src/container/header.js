import { connect } from "react-redux";
import Header from "../component/header";
import { openConnectionManager, openNewConnectionDialog, startNewConnection } from "../action/";

const mapStateToProps = ( state, ownProps ) =>
({
    hasConnections: state.connections.length > 0,
    currentConnection: getCurrentConnectionByName( state.connections, state.connectionManager.currentConnectionName )
});

function getCurrentConnectionByName( connections, name )
{
    const filtered = connections.filter( connection => connection.name === name );

    return filtered.length === 1 ? filtered[0] : null
}

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    openConnectionManager: () => dispatch( openConnectionManager() ),
    openNewConnectionDialog: () => {
        dispatch( startNewConnection() );
        dispatch( openNewConnectionDialog() );
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );