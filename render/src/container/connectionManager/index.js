import { connect } from "react-redux";
import ConnectionManager from "../../component/connectionManager";
import { closeConnectionManager, openEditConnectionDialog, startNewConnection, openNewConnectionDialog } from "../../action/";

const mapStateToProps = ( state, ownProps ) =>
({
    connections: state.connections,
    currentConnectionName: state.connectionManager.currentConnectionName
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    close: () => dispatch( closeConnectionManager() ),
    openEditConnectionDialog: connection => dispatch( openEditConnectionDialog(connection) ),
    openNewConnectionDialog: () => {
        dispatch( startNewConnection() );
        dispatch( openNewConnectionDialog() );
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionManager );