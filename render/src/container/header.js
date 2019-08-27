import { connect } from "react-redux";
import Header from "../component/header";
import { openConnectionManager, openNewConnectionDialog, startNewConnection } from "../action/";
import {getCurrentConnectionByName } from "../connectionHelper";

const mapStateToProps = ( state, ownProps ) =>
({
    hasConnections: state.connections.length > 0,
    currentConnection: getCurrentConnectionByName( state.connections, state.connectionManager.currentConnectionName )
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    openConnectionManager: () => dispatch( openConnectionManager() ),
    openNewConnectionDialog: () => {
        dispatch( startNewConnection() );
        dispatch( openNewConnectionDialog() );
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );